import React from 'react';
import { BookOpen, Search } from 'lucide-react';
import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerContainer}`}>
                <a href="/" className={styles.logo}>
                    <BookOpen className={styles.logoIcon} size={32} />
                    <span>EnglishMastery</span>
                </a>

                <nav className={styles.nav}>
                    <a href="/" className={styles.navLink}>Home</a>
                    <a href="/exams" className={styles.navLink}>Exams (Grade 1-12)</a>
                    <a href="/materials" className={styles.navLink}>Materials</a>
                    <a href="#" className={styles.navLink}>About Us</a>
                </nav>

                <div className={styles.actions}>
                    <button className={styles.searchBtn}>
                        <Search size={20} />
                    </button>
                    <div className={styles.userProfile}>
                        <img
                            src="https://ui-avatars.com/api/?name=Admin+User&background=random"
                            alt="Admin"
                            className={styles.avatar}
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.userName}>Admin User</span>
                            <span className={styles.userRole}>Administrator</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
