import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import { Book, FileText, ArrowLeft, CheckCircle } from 'lucide-react';
import styles from './MaterialDetail.module.css';

const MaterialDetail: React.FC = () => {
    const { gradeId } = useParams<{ gradeId: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const topics = {
        vocabulary: [
            "Unit 1: Family Life",
            "Unit 2: Your Body and You",
            "Unit 3: Music",
            "Unit 4: For a Better Community",
            "Unit 5: Inventions"
        ],
        grammar: [
            "Present Simple vs. Present Continuous",
            "Past Simple vs. Past Continuous",
            "Future with Will and Be Going To",
            "Passive Voice",
            "Compound Sentences"
        ]
    };

    return (
        <div className={styles.pageWrapper}>
            <Header />
            <main className={styles.mainContent}>
                <div className="container">
                    <div className={styles.content}>
                        <button className={styles.backBtn} onClick={() => navigate(-1)}>
                            <ArrowLeft size={16} /> Back
                        </button>

                        <h1 className={styles.pageTitle}>English Grade {gradeId} Materials</h1>

                        <div className={styles.grid}>
                            <div className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <Book className={styles.icon} />
                                    <h2>Vocabulary</h2>
                                </div>
                                <ul className={styles.list}>
                                    {topics.vocabulary.map((item, index) => (
                                        <li key={index} className={styles.listItem}>
                                            <CheckCircle size={14} className={styles.checkIcon} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <button className={styles.learnBtn}>View Details</button>
                            </div>

                            <div className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <FileText className={styles.icon} />
                                    <h2>Grammar</h2>
                                </div>
                                <ul className={styles.list}>
                                    {topics.grammar.map((item, index) => (
                                        <li key={index} className={styles.listItem}>
                                            <CheckCircle size={14} className={styles.checkIcon} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <button className={styles.learnBtn}>View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MaterialDetail;
