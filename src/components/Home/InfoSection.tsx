import React from 'react';
import { Info, CheckCircle } from 'lucide-react';
import styles from './InfoSection.module.css';

const InfoSection: React.FC = () => {
    return (
        <section className={`container ${styles.container}`}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <div className={styles.titleWrapper}>
                        <Info className={styles.icon} size={24} />
                        <h2 className={styles.title}>About Us</h2>
                    </div>
                </div>

                <div className={styles.content}>
                    <p>
                        <strong className={styles.brandName}>EnglishMastery</strong> helps students from Grade 1–12 practice English with mock exams, instant scoring, and clear explanations —{" "}
                        <strong className={styles.highlight}>100% Free</strong>.
                    </p>

                    <ul className={styles.features}>
                        <li><CheckCircle size={16} className={styles.checkIcon} /> Rich exam library, constantly updated</li>
                        <li><CheckCircle size={16} className={styles.checkIcon} /> Instant scoring, detailed explanations</li>
                        <li><CheckCircle size={16} className={styles.checkIcon} /> Personalized learning path</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
