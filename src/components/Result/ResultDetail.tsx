import React, { useMemo, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import { CheckCircle, XCircle, RotateCcw, Home as HomeIcon, ChevronUp } from 'lucide-react';
import styles from './ResultDetail.module.css';
import type { Question } from '../../data/mockData';

const ResultDetail: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {
        score,
        totalQuestions,
        answers,
        questions,
        timeSpent
    } = location.state as {
        score: number,
        totalQuestions: number,
        answers: Record<number, string>,
        questions: Question[],
        timeSpent: string
    };

    const correctCount = useMemo(() => {
        return questions.reduce((acc, q) => {
            return answers[q.id] === q.correctAnswer ? acc + 1 : acc;
        }, 0);
    }, [questions, answers]);

    const percentage = Math.round((correctCount / totalQuestions) * 100);

    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={styles.pageWrapper}>
            <Header />
            <main className={styles.mainContent}>
                <div className="container">
                    <div className={styles.resultContainer}>
                        <div className={styles.scoreCard}>
                            <div className={styles.scoreCircle}>
                                <div className={styles.scoreValue}>{score.toFixed(2)}</div>
                                <div className={styles.scoreLabel}>Final Score</div>
                            </div>
                            <div className={styles.statsGrid}>
                                <div className={styles.statItem}>
                                    <div className={styles.statLabel}>Correct</div>
                                    <div className={`${styles.statValue} ${styles.correct}`}>{correctCount}/{totalQuestions}</div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.statLabel}>Accuracy</div>
                                    <div className={styles.statValue}>{percentage}%</div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.statLabel}>Time Spent</div>
                                    <div className={styles.statValue}>{timeSpent}</div>
                                </div>
                            </div>
                            <div className={styles.actionButtons}>
                                <button className={styles.restartBtn} onClick={() => navigate(-1)}>
                                    <RotateCcw size={18} /> Try Again
                                </button>
                                <button className={styles.homeBtn} onClick={() => navigate('/')}>
                                    <HomeIcon size={18} /> Back to Home
                                </button>
                            </div>
                        </div>

                        <div className={styles.answersSection}>
                            <h2 className={styles.sectionTitle}>Answer Review</h2>
                            <div className={styles.answersList}>
                                {questions.map((q, index) => {
                                    const userAnswer = answers[q.id];
                                    const isCorrect = userAnswer === q.correctAnswer;
                                    return (
                                        <div key={q.id} className={`${styles.answerItem} ${isCorrect ? styles.correctItem : styles.incorrectItem}`}>
                                            <div className={styles.questionHead}>
                                                <span className={styles.qNumber}>Question {index + 1}</span>
                                                {isCorrect ? (
                                                    <span className={styles.correctBadge}><CheckCircle size={16} /> Correct</span>
                                                ) : (
                                                    <span className={styles.incorrectBadge}><XCircle size={16} /> Incorrect</span>
                                                )}
                                            </div>
                                            <div className={styles.qContent}>{q.content.replace(/^\d+\.\s*/, '')}</div>
                                            <div className={styles.optionsReview}>
                                                {q.options.map(opt => {
                                                    const isUserChoice = userAnswer === opt.id;
                                                    const isCorrectAns = q.correctAnswer === opt.id;

                                                    let optionClass = styles.optionItem;
                                                    if (isCorrectAns) optionClass += ` ${styles.correctOption}`;
                                                    if (isUserChoice && !isCorrectAns) optionClass += ` ${styles.incorrectOption}`;

                                                    return (
                                                        <div key={opt.id} className={optionClass}>
                                                            <span className={styles.optLabel}>{opt.id}</span>
                                                            <span className={styles.optText}>{opt.text}</span>
                                                            {isCorrectAns && <CheckCircle size={14} className={styles.checkIcon} />}
                                                            {isUserChoice && !isCorrectAns && <XCircle size={14} className={styles.xIcon} />}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <button
                className={`${styles.scrollToTop} ${showScroll ? styles.visible : ''}`}
                onClick={scrollToTop}
                title="Scroll to Top"
            >
                <ChevronUp size={24} />
            </button>
        </div>
    );
};

export default ResultDetail;
