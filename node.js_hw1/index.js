const express = require('express');
const fs = require('fs');
const path = require('path');
const winston = require('winston');
const { readFile, writeFile } = require('./fileManager');

const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'server.log' })
  ],
});

const app = express();
const PORT = 3000;

app.use(express.text());

app.use((req, res, next) => {
  const logMessage = `${new Date().toISOString()} - ${req.method} ${req.originalUrl}`;
  logger.info(logMessage);
  next(); 
});

app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.info(`Request to ${req.originalUrl} took ${duration}ms`);
  });
  next();
});

app.get('/', (req, res) => {
  res.status(200).send('Welcome to my first Node.js server!');
});

app.get('/file', async (req, res) => {
  const filePath = path.join(__dirname, 'data.txt');
  if (cachedFileContent) {
    return res.status(200).send(cachedFileContent);
  }

  try {
    const content = await readFile(filePath);
    cachedFileContent = content;
    res.status(200).send(content);
  } catch (err) {
    logger.error(`Error reading file: ${err}`);
    res.status(404).send('File not found');
  }
});

app.post('/file', async (req, res) => {
  const filePath = path.join(__dirname, 'data.txt');
  try {
    await writeFile(filePath, req.body);
    cachedFileContent = req.body;
    res.status(200).send('File updated successfully');
  } catch (err) {
    logger.error(`Error writing to file: ${err}`);
    res.status(500).send('Error writing to file');
  }
});

app.get('/time', (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  res.status(200).send(`Current time: ${currentTime}`);
});

app.get('/date', (req, res) => {
  const currentDate = new Date().toISOString().split('T')[0];
  res.status(200).send(`Current date: ${currentDate}`);
});

app.get('/status', (req, res) => {
  requestCount++;
  const serverStatus = {
    uptime: process.uptime(),
    requestCount,
    cacheStatus: cachedFileContent ? 'Cached' : 'Not Cached',
  };
  logger.info(`Server status: ${JSON.stringify(serverStatus)}`);
  res.status(200).json(serverStatus);
});

app.use((req, res) => {
  res.status(404).send('404: Page not found');
});

app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send('Something went wrong!');
});

let requestCount = 0;
let cachedFileContent = null;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
