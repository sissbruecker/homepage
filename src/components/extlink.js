import React from 'react';

const ExtLink = ({ href, children }) => {
    return (
        <a href={href}
           target='_blank'
           rel='noopener noreferrer'>{children}</a>
    );
};

export default ExtLink;
