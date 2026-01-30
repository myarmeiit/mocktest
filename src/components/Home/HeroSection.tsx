import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className={styles.hero}>
            <div className={`container ${styles.content}`}>
                <h1 className={styles.title}>
                    Master English <br />
                    <span className={styles.highlight}>From Grade 1 to 12</span>
                </h1>
                <p className={styles.description}>
                    Comprehensive mock exams, study materials, and learning paths to help students achieve high scores in every exam.
                </p>
                <div className={styles.buttons}>
                    <button className={styles.primaryBtn} onClick={() => navigate('/exams')}>Take Exam Now</button>
                    <button className={styles.secondaryBtn} onClick={() => navigate('/exams')}>View Materials</button>
                </div>
            </div>
            <div className={styles.decoration} />
        </section>
    );
};

export default HeroSection;
