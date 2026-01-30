import React, { useEffect } from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import MaterialsSection from '../Home/MaterialsSection';
import styles from './MaterialPage.module.css';

const MaterialPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.pageWrapper}>
            <Header />
            <main className={styles.mainContent}>
                <div className={styles.heroBanner}>
                    <div className="container">
                        <h1 className={styles.title}>Study Materials</h1>
                        <p className={styles.subtitle}>Comprehensive vocabulary and grammar resources for all grades.</p>
                    </div>
                </div>
                <MaterialsSection type="materials" />
            </main>
            <Footer />
        </div>
    );
};

export default MaterialPage;
