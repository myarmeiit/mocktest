import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { getExamById } from '../../data/mockData';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import { Play, Clock, Star, FileText, User } from 'lucide-react';
import styles from './ExamDetail.module.css';

const ExamDetail: React.FC = () => {
    const { examId } = useParams<{ examId: string }>();
    const navigate = useNavigate();
    const location = useLocation();
    const { examTitle, examQuestions, examTime } = location.state || {};
    const mockExam = getExamById(examId);

    // Mock exam data - normally fetched by ID or passed via context/state
    const exam = {
        id: examId,
        title: examTitle || mockExam?.title || "Exam Title Not Found",
        category: "National High School Mock Exam",
        candidate: "Admin User", // Could come from auth context
        questions: examQuestions || mockExam?.questions || 20,
        duration: examTime || mockExam?.time || 35, // minutes
        highScore: mockExam?.score ?? 8.00
    };

    return (
        <div className={styles.pageWrapper}>
            <Header />
            <main className={styles.pageContainer}>
                <div className="container">
                    <div className={styles.card}>
                        {/* Header */}
                        <div className={styles.cardHeader}>
                            <FileText size={18} />
                            {exam.category}
                        </div>

                        {/* Main Content */}
                        <div className={styles.mainContent}>
                            <h1 className={styles.examTitle}>{exam.title}</h1>
                            <div className={styles.candidateInfo}>
                                <User size={16} /> Candidate: <strong>{exam.candidate}</strong>
                            </div>

                            <button
                                className={styles.startButton}
                                onClick={() => navigate(`/attempt/${examId}`, { state: { title: exam.title } })}
                            >
                                <Play size={24} fill="currentColor" /> START EXAM
                            </button>
                        </div>

                        {/* Info Bar */}
                        <div className={styles.infoBar}>
                            <div className={styles.infoGroup}>
                                <div className={`${styles.infoBadge} ${styles.badgeBlue}`}>
                                    <FileText size={14} /> {exam.questions} Questions
                                </div>
                                <div className={`${styles.infoBadge} ${styles.badgeOrange}`}>
                                    <Clock size={14} /> {exam.duration} Minutes
                                </div>
                            </div>
                            <div className={styles.timer}>
                                00:{exam.duration}:00
                            </div>
                        </div>

                        {/* Instructions Section */}
                        <div className={styles.instructionsSection}>
                            <h3><FileText size={18} /> Testing Instructions</h3>
                            <ul className={styles.instructionList}>
                                <li>Ensure you have a stable internet connection.</li>
                                <li>The timer starts once you click the <strong>START EXAM</strong> button.</li>
                                <li>You cannot pause the timer once the test has begun.</li>
                                <li>The system will automatically submit your answers when the time expires.</li>
                                <li>Click "Submit" only when you have finished all questions.</li>
                            </ul>
                        </div>

                        {/* Footer Actions */}
                        <div className={styles.footerActions}>
                            {/* <div className={styles.pagination}>
                                <button className={styles.pageBtn} disabled><ChevronsLeft size={16} /></button>
                                <button className={styles.pageBtn} disabled><ChevronLeft size={16} /></button>
                                <button className={styles.pageBtn} disabled>Previous</button>
                                <button className={styles.pageBtn} disabled>Next</button>
                                <button className={styles.pageBtn} disabled><ChevronRight size={16} /></button>
                                <button className={styles.pageBtn} disabled><ChevronsRight size={16} /></button>
                            </div> */}

                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ExamDetail;
