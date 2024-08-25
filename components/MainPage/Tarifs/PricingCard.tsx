'use client'
import React from 'react';
import { motion } from 'framer-motion';

export const PricingCard = () => {
    return (
        <motion.div
            className="bg-white rounded-lg shadow-lg p-6 m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col justify-between"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">dsds</h2>
                <p className="text-gray-600 mb-4">dsadasd</p>
            </div>
            <div>
                <p className="text-3xl font-bold text-blue-600 mb-2">2121</p>
                <p className="text-gray-500">Терміни: 3232</p>
            </div>
        </motion.div>
    );
};