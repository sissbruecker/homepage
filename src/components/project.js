import React from 'react';

const Project = ({title, customer, time, skills, children}) => {

    return (
        <li>
            <strong dangerouslySetInnerHTML={{__html: title}}/> - {customer} - {time}
            <ul>
                {children}
            </ul>
            <em>Skills:</em>
            <span> {skills}</span>
        </li>
    );
};

export default Project;
