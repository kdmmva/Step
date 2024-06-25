import React from 'react';
import PostCard from './PostCard';
import { posts } from '../data/posts';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
        opacity: 1, 
        scale: 1,
        transition: {
            delay: 0.3,
            duration: 0.5
        }
    }
};

const PostList = () => {
    return (
        <motion.div 
            className="post-list"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {posts.map((post, index) => (
                <PostCard key={index} post={post} />
            ))}
        </motion.div>
    );
};

export default PostList;
