import React from 'react';
import { motion } from 'framer-motion';

const PostCard = ({ post }) => {
    return (
        <motion.div 
            className="post-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p><strong>Date:</strong> {post.date}</p>
            <p><strong>Tags:</strong> {post.tags.join(", ")}</p>
        </motion.div>
    );
};

export default PostCard;
