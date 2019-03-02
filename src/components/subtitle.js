import React from 'react';
import styles from './subtitle.module.css';


const SubTitle = ({ title, label }) => {
    return (
        <div className={styles.subtitle}>
            <h3>{title}</h3>
            {
                label &&
                <span className={styles.label}>{label}</span>
            }
        </div>
    );
};

export default SubTitle;
