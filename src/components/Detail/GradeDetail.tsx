import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import { AlignLeft, Search, ArrowRight, Clock, PlayCircle, Book, FileText } from 'lucide-react';
import styles from './GradeDetail.module.css';

import { MOCK_EXAMS } from '../../data/mockData';

const GradeDetail: React.FC = () => {
    const { gradeId } = useParams<{ gradeId: string }>();
    const navigate = useNavigate();

    const materialCategories = [
        { id: 'vocabulary', name: "Vocabulary", icon: <Book size={20} />, count: 15 },
        { id: 'grammar', name: "Grammar", icon: <FileText size={20} />, count: 12 },
    ];

    const exams = MOCK_EXAMS;

    return (
        <div className={styles.pageWrapper}>
            <Header />
            <main className={styles.mainContent}>
                <div className="container">
                    <div className={styles.pageContainer}>
                        <div className={styles.header}>
                            <div className={styles.breadcrumb}>
                                <AlignLeft className={styles.breadcrumbIcon} />
                                ENGLISH GRADE {gradeId}
                            </div>
                            <div className={styles.headerActions}>
                                <button className={styles.backBtn} onClick={() => navigate('/')}>
                                    Back to Home
                                </button>
                                <button className={styles.searchBtn}><Search size={16} /> Search</button>
                            </div>
                        </div>

                        <section className={styles.materialsSection}>
                            <h3 className={styles.sectionTitle}>Essential Materials</h3>
                            <div className={styles.materialsGrid} style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                                {materialCategories.map(cat => (
                                    <div
                                        key={cat.id}
                                        className={styles.materialCard}
                                        onClick={() => navigate(`/materials/grade/${gradeId}`)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <div className={styles.materialInfo}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                                                <span style={{ color: '#10b981' }}>{cat.icon}</span>
                                                <span className={styles.materialName} style={{ marginBottom: 0 }}>{cat.name}</span>
                                            </div>
                                            <span className={styles.materialCount}>{cat.count} documents & lessons</span>
                                        </div>
                                        <button className={styles.viewBtn}>Study Now <ArrowRight size={12} /></button>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <div className={styles.splitLayout}>
                            <div className={styles.examsColumn}>
                                <h3 className={styles.sectionTitle}>Selected Exams</h3>

                                <div className={styles.examsList}>
                                    {exams.map(exam => (
                                        <div key={exam.id} className={styles.examCard}>
                                            <div className={styles.examContent}>
                                                <FileText className={styles.examIcon} />
                                                <div className={styles.examInfo}>
                                                    <h4>
                                                        {exam.title}
                                                        {exam.isNew}
                                                    </h4>
                                                    <div className={styles.examMeta}>
                                                        <span className={styles.metaBadge}><Book size={12} /> {exam.questions} Qs</span>
                                                        <span className={styles.metaBadge}><Clock size={12} /> {exam.time} Mins</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                className={styles.startExamBtn}
                                                onClick={() => navigate(`/exam/${exam.id}`, { state: { examTitle: exam.title, examQuestions: exam.questions, examTime: exam.time } })}
                                            >
                                                <PlayCircle size={16} /> Start Exam
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.scoreboardColumn}>
                                <h3 className={styles.sectionTitle}>My Score Board</h3>

                                <div className={styles.scoreboard}>
                                    <div className={styles.emptyState}>
                                        <Clock size={24} style={{ marginBottom: 8 }} />
                                        <p>You haven't taken any exams yet. Start one now!</p>
                                    </div>

                                    <div className={styles.emptyState} style={{ marginTop: 12, background: '#f7fafc', border: 'none' }}>
                                        <p style={{ fontSize: '0.8rem' }}>Only you can see this information!</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default GradeDetail;
