import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getExamById } from '../../data/mockData';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import ExamSidebar from './ExamSidebar';
import styles from './ExamTaking.module.css';
import { Clock, HelpCircle, ChevronLeft, ChevronRight, FileText } from 'lucide-react';

const ExamTaking: React.FC = () => {
    const { examId } = useParams<{ examId: string }>();
    const navigate = useNavigate();
    const location = useLocation();
    const { title } = location.state || {};
    const mockExam = getExamById(examId);

    const examTitle = title || mockExam?.title || "High School Graduation Mock Exam 2026";
    const [questions, setQuestions] = useState(mockExam?.questionList || []);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [markedForReview, setMarkedForReview] = useState<Record<number, boolean>>({});
    const [timeLeft, setTimeLeft] = useState((mockExam?.time || 35) * 60);

    useEffect(() => {
        const newExam = getExamById(examId);
        const newQuestions = newExam?.questionList || [];
        setQuestions(newQuestions);
        setCurrentQuestionIndex(0);
        setAnswers({});
        setMarkedForReview({});
        setTimeLeft((newExam?.time || 35) * 60);
    }, [examId]);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 0) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h > 0 ? h + ':' : ''}${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const handleAnswerSelect = (questionId: number, optionId: string) => {
        setAnswers(prev => ({ ...prev, [questionId]: optionId }));
    };

    const currentQuestion = questions[currentQuestionIndex];
    const answeredCount = Object.keys(answers).length;

    useEffect(() => {
        if (timeLeft === 0 && questions.length > 0) {
            submitExam(true);
        }
    }, [timeLeft, questions.length]);

    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            if (answeredCount > 0 && timeLeft > 0) {
                e.preventDefault();
                e.returnValue = '';
            }
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, [answeredCount, timeLeft]);

    const submitExam = (isAuto = false) => {
        if (!isAuto && !window.confirm('Are you sure you want to submit your exam?')) return;

        const correctCount = questions.reduce((acc: number, q: any) => {
            return answers[q.id] === q.correctAnswer ? acc + 1 : acc;
        }, 0);

        const score = (correctCount / questions.length) * 10;
        const totalDurationSeconds = (mockExam?.time || 35) * 60;
        const timeSpentSeconds = totalDurationSeconds - timeLeft;
        const timeSpent = formatTime(timeSpentSeconds);

        if (isAuto) {
            alert('Time is up! Your exam has been submitted automatically.');
        }

        navigate(`/result/${examId}`, {
            state: {
                score,
                totalQuestions: questions.length,
                answers,
                questions,
                timeSpent
            }
        });
    };

    const handleSubmit = () => submitExam(false);

    const progress = (answeredCount / (questions.length || 1)) * 100;

    return (
        <div className={styles.pageWrapper}>
            <Header />

            <main className={styles.mainContent}>
                <div className="container">
                    <div className={styles.layout}>

                        <div className={styles.mainColumn}>

                            <div className={styles.examHeader}>
                                <div className={styles.userLabel}>
                                    Candidate: <strong>Admin User</strong>
                                </div>
                                <h2 className={styles.examTitle}>
                                    {examTitle}
                                </h2>

                                <div className={styles.statsRow}>
                                    <div className={styles.badges}>
                                        <span className={`${styles.badge} ${styles.badgeBlue}`}>
                                            <FileText size={14} /> {questions.length} Questions
                                        </span>
                                        <span className={`${styles.badge} ${styles.badgeOrange}`}>
                                            <Clock size={14} /> {mockExam?.time || 35} Minutes
                                        </span>
                                    </div>
                                    <div className={styles.timer}>
                                        {formatTime(timeLeft)}
                                    </div>
                                </div>
                            </div>

                            <div className={styles.questionCard}>
                                <div className={styles.questionMeta}>
                                    <span className={styles.questionNumber}>
                                        Question {currentQuestionIndex + 1} / {questions.length}
                                    </span>
                                    <span className={styles.difficulty}>
                                        <HelpCircle size={14} style={{ marginRight: 4 }} />
                                        Difficulty: {currentQuestion.difficulty === 'Dễ' ? 'Easy' : currentQuestion.difficulty === 'Trung Bình' ? 'Medium' : currentQuestion.difficulty === 'Khó' ? 'Hard' : currentQuestion.difficulty}
                                    </span>
                                </div>

                                <div className={styles.questionText}>
                                    <p style={{ marginBottom: 12 }}>{currentQuestion.text}</p>
                                    <p style={{ fontSize: '0.9rem', color: '#4a5568', background: '#f7fafc', padding: 12, borderRadius: 8 }}>
                                        {currentQuestion.content.replace(/^\d+\.\s*/, '')}
                                    </p>
                                </div>

                                <div className={styles.optionsList}>
                                    {currentQuestion.options.map((option: any) => (
                                        <div
                                            key={option.id}
                                            className={`${styles.optionItem} ${answers[currentQuestion.id] === option.id ? styles.selected : ''}`}
                                            onClick={() => handleAnswerSelect(currentQuestion.id, option.id)}
                                        >
                                            <div className={styles.optionLabel}>{option.id}</div>
                                            <div className={styles.optionText}>{option.text}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className={styles.questionFooter}>
                                    <div className={styles.progressSection}>
                                        <div className={styles.progressLabel}>Completed: {answeredCount}/{questions.length}</div>
                                        <div className={styles.miniProgressBar}>
                                            <div className={styles.miniProgressFill} style={{ width: `${progress}%` }}></div>
                                        </div>
                                    </div>
                                    <div className={styles.reviewToggleRow} onClick={() => setMarkedForReview(prev => ({ ...prev, [currentQuestion.id]: !prev[currentQuestion.id] }))}>
                                        <div className={`${styles.reviewCheck} ${markedForReview[currentQuestion.id] ? styles.marked : ''}`}>
                                            {markedForReview[currentQuestion.id] && <div className={styles.innerCheck} />}
                                        </div>
                                        <span className={styles.reviewText}>Mark for review</span>
                                    </div>
                                </div>

                                <div className={styles.navFooter}>
                                    <div className={styles.navGroup}>
                                        <button
                                            className={styles.navBtn}
                                            onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                                            disabled={currentQuestionIndex === 0}
                                        >
                                            <ChevronLeft size={16} /> Previous
                                        </button>
                                        <button
                                            className={styles.navBtn}
                                            onClick={() => setCurrentQuestionIndex(prev => Math.min(questions.length - 1, prev + 1))}
                                            disabled={currentQuestionIndex === questions.length - 1}
                                        >
                                            Next <ChevronRight size={16} />
                                        </button>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className={styles.sidebarColumn}>
                            <ExamSidebar
                                answeredCount={answeredCount}
                                totalQuestions={questions.length}
                                questions={questions}
                                timeLeft={formatTime(timeLeft)}
                                currentQuestionIndex={currentQuestionIndex}
                                answers={answers}
                                markedForReview={markedForReview}
                                onNavigate={setCurrentQuestionIndex}
                                onSubmit={handleSubmit}
                            />
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ExamTaking;
