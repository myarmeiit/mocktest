import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.column}>
                    <h3 className={styles.title}>EnglishMastery</h3>
                    <p className={styles.text}>
                        The English Exam Preparation Platform.
                    </p>
                    <p className={styles.copyright}>© 2026 EnglishMastery. All rights reserved.</p>
                </div>

                <div className={styles.column}>
                    <h4 className={styles.heading}>Links</h4>
                    <ul className={styles.list}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Exams</a></li>
                        <li><a href="#">Materials</a></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h4 className={styles.heading}>Support</h4>
                    <ul className={styles.list}>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
