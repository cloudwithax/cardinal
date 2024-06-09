import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const AnimatedHeart = () => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div onClick={handleLike}>
            <motion.div
                key={isLiked ? 'heart' : 'heart-outline'}
                initial={{ scale: 0.8 }}
                animate={{ scale: isLiked ? 1 : 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                exit={{ scale: 0.8, opacity: 0 }}
                layout
            >
                <Heart
                    size={20}
                    color={isLiked ? 'red' : 'white'}
                    fill={isLiked ? 'red' : 'none'}
                />
            </motion.div>
        </div>
    );
};

export default AnimatedHeart;
