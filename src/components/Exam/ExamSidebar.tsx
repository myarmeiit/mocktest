import React from 'react';
import styles from './ExamTaking.module.css';

interface ExamSidebarProps {
    answeredCount: number;
    totalQuestions: number;
    questions: { id: number }[]; // Add actual questions to get real IDs
    timeLeft: string;
    currentQuestionIndex: number;
    answers: Record<number, string>; // questionId -> answer
    markedForReview: Record<number, boolean>;
    onNavigate: (index: number) => void;
    onSubmit: () => void;
}

const ExamSidebar: React.FC<ExamSidebarProps> = ({
    answeredCount,
    totalQuestions,
    questions,
    timeLeft,
    currentQuestionIndex,
    answers,
    markedForReview,
    onNavigate,
    onSubmit
}) => {
    return (
        <div className={styles.sidebarCard}>
            <div className={styles.sidebarHeader}>
                <div className={styles.sidebarStat}>
                    <span className={styles.statLabel}>Answered</span>
                    <span className={styles.statValue}>{answeredCount}/{totalQuestions}</span>
                </div>
                <div className={styles.sidebarStat} style={{ borderLeft: '1px solid #edf2f7' }}>
                    <span className={styles.statLabel}>Time Remaining</span>
                    <span className={`${styles.statValue} ${styles.timerPrimary}`}>{timeLeft}</span>
                </div>
            </div>

            <div className={styles.gridContainer}>
                {Array.from({ length: totalQuestions }).map((_, index) => {
                    const question = questions[index];
                    const questionId = question ? question.id : index + 1;
                    const isAnswered = !!answers[questionId];
                    const isMarked = !!markedForReview[questionId];
                    const isActive = currentQuestionIndex === index;

                    let className = styles.gridItem;
                    if (isActive) className += ` ${styles.active}`;

                    if (isAnswered) {
                        className += ` ${styles.answered}`;
                    } else if (isMarked) {
                        className += ` ${styles.marked}`;
                    }

                    return (
                        <button
                            key={index}
                            className={className}
                            onClick={() => onNavigate(index)}
                        >
                            {index + 1}
                        </button>
                    );
                })}
            </div>

            <button className={styles.sidebarSubmitBtn} onClick={onSubmit}>
                SUBMIT
            </button>

            <div className={styles.legend}>
                <div className={styles.legendItem}>
                    <div className={`${styles.legendDot} ${styles.green}`}></div>
                    Answered
                </div>
                <div className={styles.legendItem}>
                    <div className={`${styles.legendDot} ${styles.white}`}></div>
                    Not Answered
                </div>
                <div className={styles.legendItem}>
                    <div className={`${styles.legendDot} ${styles.purple}`}></div>
                    Mark for Review
                </div>
            </div>
        </div>
    );
};

export default ExamSidebar;
