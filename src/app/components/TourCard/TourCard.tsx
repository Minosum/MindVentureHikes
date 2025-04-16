import React from 'react';
import styles from './TourCard.module.css';
import Image, { StaticImageData } from 'next/image';

interface TourCardProps {
    image: string | StaticImageData;
    title: string;
    location: string;
    startDate: string;
    endDate: string;
    grade: number;
    price: number;
    viewTripUrl: string;
}

const TourCards: React.FC<TourCardProps> = ({
    image,
    title,
    location,
    startDate,
    endDate,
    grade,
    price,
}) => {
    return (
        <div className={styles.tourCard}>
            <Image
                src={typeof image === 'string' ? image : image.src}
                alt={title}
                className={styles.tourCardImage}
                width={0}
                height={0}
                sizes="100vw"
            />
            <div className={styles.tourCardContent}>
                <h3 className={styles.tourCardTitle}>{title}</h3>
                <p className={styles.tourCardLocation}><span style={{ fontWeight: 'bold' }}>Location:</span> {location}</p>
                <p className={styles.tourCardDate}>
                    <span style={{ fontWeight: 'bold' }}>Month:</span> {startDate} - {endDate}
                </p>
                <p className={styles.tourCardGrade}><span style={{ fontWeight: 'bold' }}>Grade: </span>{grade}</p>
                <div className={styles.tourCardPricing}>
                    <p className={styles.tourCardPrice}><span style={{ fontWeight: 'bold' }}>Price: </span>  ${price}.00</p>
                </div>
                <div>
                    <span style={{ marginLeft: '10px', fontSize: '11px' }}>Please enquire for specific dates</span>
                </div>
                <div className={styles.tourCardActions}>
                    <a href="/MtAraratItinerary.pdf" target="_blank" className={styles.tourCardViewTrip}>
                        View Trip
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TourCards;