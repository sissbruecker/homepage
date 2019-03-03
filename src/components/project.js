import React from 'react';
import styles from './project.module.css';

const Project = ({ title, customer, time, skills, children }) => {

    return (
        <li>
            <div className={styles.title}>
                <strong dangerouslySetInnerHTML={{ __html: title }}/>
                <span>{customer} - {time}</span>
            </div>
            <ul>
                {children}
            </ul>
            <em>Skills:</em>
            <span> {skills}</span>
        </li>
    );
};

export default Project;
