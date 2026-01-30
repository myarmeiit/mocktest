import React from 'react';
import { Book, FileText, ArrowRight } from 'lucide-react';
import styles from './LatestExams.module.css';
import { useNavigate } from 'react-router-dom';

const MaterialsByGrade: React.FC = () => {
    const navigate = useNavigate();
    const gradeMaterials = [
        { grade: 10, vocabulary: 15, grammar: 12 },
        { grade: 11, vocabulary: 18, grammar: 14 },
        { grade: 12, vocabulary: 25, grammar: 20 },
    ];

    return (
        <section className={`container ${styles.section}`}>
            <div className={styles.header}>
                <h2 className={styles.sectionTitle}>Featured Materials</h2>
                <button onClick={() => navigate('/materials')} className={styles.viewAll}>
                    View all Materials <ArrowRight size={16} />
                </button>
            </div>

            <div className={styles.grid}>
                {gradeMaterials.map(item => (
                    <div key={item.grade} className={styles.card} onClick={() => navigate(`/materials/grade/${item.grade}`)}>
                        <div className={styles.cardHeader}>
                            <div className={styles.badge}>Grade {item.grade}</div>
                        </div>
                        <h3 className={styles.examTitle}>High School English - Grade {item.grade}</h3>
                        <div className={styles.meta} style={{ gap: '15px' }}>
                            <span className={styles.metaItem}><Book size={14} /> {item.vocabulary} Vocabulary List</span>
                            <span className={styles.metaItem}><FileText size={14} /> {item.grammar} Grammar Lessons</span>
                        </div>
                        <button className={styles.startBtn} onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/materials/grade/${item.grade}`);
                        }}>Study Now</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MaterialsByGrade;
