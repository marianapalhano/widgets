import React from 'react';

const Link = ({ href, className, children }) => {

    const onClick = (e) => {
        e.preventDefault();
        window.history.pushState({}, '', href);
    };

    return (
        <a href={href} className={className} onClick={onClick}>
            {children}
        </a>
    );
};

export default Link;