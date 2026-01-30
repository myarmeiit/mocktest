import React, { useEffect } from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import MaterialsSection from '../Home/MaterialsSection';
import styles from './ExamPage.module.css';

const ExamPage: React.FC = () => {
    // Scroll to top when page is loaded
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.pageWrapper}>
            <Header />
            <main className={styles.mainContent}>
                <div className={styles.heroBanner}>
                    <div className="container">
                        <h1 className={styles.title}>All Exams</h1>
                        <p className={styles.subtitle}>Select your grade to explore specialized mock tests and learning resources.</p>
                    </div>
                </div>
                <MaterialsSection />
            </main>
            <Footer />
        </div>
    );
};

export default ExamPage;
