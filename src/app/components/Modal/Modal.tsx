'use client'
import React, { useState } from 'react';
import styles from './Modal.module.css';
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineChatBubbleOutline } from 'react-icons/md';

interface Modal {
    message: string
}

const Modal: React.FC<Modal> = ({ message }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);
    const handleOpen = () => setIsOpen(true);

    if (!isOpen) {
        return (
            <button onClick={handleOpen} className={styles.openButton}>
                <MdOutlineChatBubbleOutline size={20} style={{
                    color: 'white'
                }} />
            </button>
        );
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <textarea
                    className={styles.textbox}
                    readOnly
                    value={message}
                />
                <button className={styles.closeButton} onClick={handleClose}>
                    <IoCloseOutline size={30} />
                </button>
            </div>
        </div>
    );
};

export default Modal;
