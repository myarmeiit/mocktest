import React from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import HeroSection from './HeroSection';
import InfoSection from './InfoSection';
import MaterialsSection from './MaterialsSection';
import LatestExams from './LatestExams';
import styles from './Home.module.css';

const Home: React.FC = () => {
    return (
        <div className={styles.pageWrapper}>
            <Header />
            <main className={styles.mainContent}>
                <HeroSection />
                <InfoSection />
                <MaterialsSection />
                <LatestExams />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
