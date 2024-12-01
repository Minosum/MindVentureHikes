'use client'
import React, { useState } from 'react';
import styles from './ModalForm.module.css'; // Import the CSS Module

interface ModalProps {
    iframeSrc: string; 
}

const ModalForm: React.FC<ModalProps> = ({ iframeSrc }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button className={styles.joinOurTrip} onClick={openModal}>JOIN OUR TRIP</button>
            <div className={`${styles.modal} ${isOpen ? styles.open : ''}`} onClick={closeModal}>
                <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                    <span className={styles.close} onClick={closeModal}>
                        &times;
                    </span>
                    <iframe
                        className={styles.iframe}
                        src={iframeSrc}
                    >
                        Loading…
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default ModalForm;
