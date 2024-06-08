import React, { useState } from 'react';
import { Repeat } from 'lucide-react';
import { motion } from 'framer-motion';

const AnimatedRepost = () => {
    const [isReposted, setIsReposted] = useState(false);

    const handleLike = () => {
        setIsReposted(!isReposted);
    };

    return (
        <div onClick={handleLike}>
            <motion.div
                key={isReposted ? 'repeat' : 'repeat-outline'}
                initial={{ scale: 0.8 }}
                animate={{ scale: isReposted ? 1 : 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                exit={{ scale: 0.8, opacity: 0 }}
                layout
            >
                <Repeat color={isReposted ? '#5dff47' : 'white'} />
            </motion.div>
        </div>
    );
};

export default AnimatedRepost;
