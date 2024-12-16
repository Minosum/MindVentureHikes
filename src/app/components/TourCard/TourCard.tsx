import React from 'react';
import styles from './TourCard.module.css';

interface TourCardProps {
  image: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  grade: number;
  price: number;
  viewTripUrl: string;
  bookNowUrl: string;
}

const TourCards: React.FC<TourCardProps> = ({
  image,
  title,
  location,
  startDate,
  endDate,
  grade,
  price,
  viewTripUrl,
  bookNowUrl,
}) => {
  return (
    <div className={styles.tourCard}>
      <img src={image} alt={title} className={styles.tourCardImage} />
      <div className={styles.tourCardContent}>
        <h3 className={styles.tourCardTitle}>{title}</h3>
        <p className={styles.tourCardLocation}>{location}</p>
        <p className={styles.tourCardDate}>
          {startDate} - {endDate}
        </p>
        <p className={styles.tourCardGrade}>Grade: {grade}</p>
        <div className={styles.tourCardPricing}>
          <p className={styles.tourCardPrice}>Price: ${price}.00</p>
        </div>
        <div className={styles.tourCardActions}>
          <a href={viewTripUrl} target="_blank" className={styles.tourCardViewTrip}>
            View Trip
          </a>
          <a href={bookNowUrl} target="_blank" className={styles.tourCardBookNow}>
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default TourCards;