import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const Modal = ({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) => {
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
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-zinc-800 rounded-lg shadow-md p-6 max-w-lg w-full mx-4 relative"
                            onClick={(e) => e.stopPropagation()}>
                            <div
                                className="absolute top-6 right-6"
                                onClick={onClose}>
                                <Icon
                                    icon="mingcute:close-fill"
                                    className="w-6 h-6 bg-slate-300 rounded-full p-1 text-zinc-800 cursor-pointer duration-300 transition-all hover:bg-slate-500"
                                />
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
