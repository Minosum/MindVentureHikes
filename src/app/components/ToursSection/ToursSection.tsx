import React from 'react';
import TourCard from '../TourCard/TourCard';
import styles from './ToursSection.module.css';

const ToursSection: React.FC = () => {
  return (
    <section className={styles.toursSection}>
      <h2 className={styles.title}>Upcoming tours & Adventures</h2>
      <TourCard
        image="https://images.squarespace-cdn.com/content/v1/64b534e3c375b379a4fd2c5c/1734234343537-O1NJ06A2UMCPMV8U4KUT/unsplash-image-tmBYSL3kZcE.jpg?format=2500w"
        title="Mount Batur sunrise hike for charity"
        location="Indonesia"
        startDate="Feb 24, 2025 1:00 am"
        endDate="Feb 24, 2024 10:00 am"
        grade={3}
        price={60}
        viewTripUrl="https://www.hearttohati.org/events"
        bookNowUrl="https://docs.google.com/forms/d/e/1FAIpQLSeteZbFk2eALHgz2jlILFc12mPUOfs4oSfDf33yQElrdcaXMg/viewform"
      />
    </section>
  );
};

export default ToursSection;