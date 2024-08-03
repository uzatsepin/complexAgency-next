import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const Modal = ({ isOpen, onClose, children, header }: { isOpen: boolean; onClose: () => void; children: React.ReactNode, header?: string }) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleOverlayClick = (e: any) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const modalContent = (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            backdropFilter: "blur(10px)"
                        }}
                        exit={{
                            opacity: 0,
                            backdropFilter: "blur(0px)"
                        }}
                        transition={{ duration: 0.3 }}
                        onClick={handleOverlayClick}
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center">
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.5,
                                rotateX: 40,
                                y: 40,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                rotateX: 0,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.8,
                                rotateX: 10,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 15,
                            }}
                            className="bg-zinc-900 rounded-lg shadow-md p-7 max-w-lg w-full mx-4 relative"
                            onClick={(e) => e.stopPropagation()}>
                            <div className='mb-4'>
                                <div
                                    className="absolute top-6 right-6"
                                    onClick={onClose}>
                                    <Icon
                                        icon="mingcute:close-fill"
                                        className="w-7 h-7  rounded-full p-1 text-zinc-600 hover:text-zinc-100 cursor-pointer duration-300 transition-all"
                                    />
                                </div>
                                <div className='text-2xl font-bold'>{header}</div>
                            </div>
                            {children}
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );

    if (!isBrowser) {
        return null;
    }

    return modalContent;
};

export default Modal;
