import React from 'react';

import { Layers } from 'lucide-react';
import styles from './MaterialsSection.module.css';

import { useNavigate } from 'react-router-dom';

interface GradeCardProps {
    grade: number | string;
    count: number;
    type: 'exams' | 'materials';
}

const GradeCard: React.FC<GradeCardProps> = ({ grade, count, type }) => {
    const navigate = useNavigate();
    const targetPath = type === 'materials' ? `/materials/grade/${grade}` : `/grade/${grade}`;

    return (
        <div
            className={styles.card}
            onClick={() => navigate(targetPath)}
        >
            <div className={styles.iconWrapper}>
                <Layers size={24} />
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.gradeTitle}>Grade {grade}</h3>
                <p className={styles.docCount}>{count} {type === 'materials' ? 'materials' : 'exams'}</p>
            </div>
            <button className={styles.actionBtn}>View</button>
        </div>
    );
};

interface MaterialsSectionProps {
    type?: 'exams' | 'materials';
}

const MaterialsSection: React.FC<MaterialsSectionProps> = ({ type = 'exams' }) => {
    const primaryGrades = [1, 2, 3, 4, 5];
    const secondaryGrades = [6, 7, 8, 9];
    const highSchoolGrades = [10, 11, 12];

    return (
        <section id="materials" className={`container ${styles.section}`}>
            <h2 className={styles.sectionTitle}>
                {type === 'materials' ? 'Study Materials by Grade' : 'Practice Exams by Grade'}
            </h2>

            <div className={styles.levelGroup}>
                <h3 className={styles.levelTitle}>Primary School</h3>
                <div className={styles.grid}>
                    {primaryGrades.map(g => <GradeCard key={g} type={type} grade={g} count={Math.floor(Math.random() * 50) + 10} />)}
                </div>
            </div>

            <div className={styles.levelGroup}>
                <h3 className={styles.levelTitle}>Secondary School</h3>
                <div className={styles.grid}>
                    {secondaryGrades.map(g => <GradeCard key={g} type={type} grade={g} count={Math.floor(Math.random() * 50) + 10} />)}
                </div>
            </div>

            <div className={styles.levelGroup}>
                <h3 className={styles.levelTitle}>High School</h3>
                <div className={styles.grid}>
                    {highSchoolGrades.map(g => <GradeCard key={g} type={type} grade={g} count={Math.floor(Math.random() * 50) + 10} />)}
                </div>
            </div>
        </section>
    );
};

export default MaterialsSection;
