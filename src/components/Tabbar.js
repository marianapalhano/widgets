import React from 'react';

const Tabbar = () => {
    return (
        <div className="ui secondary pointing menu">
            <a href="/" className="item">
                Accordion
            </a>
            <a href="/search" className="item">
                Wiki Search
            </a>
            <a href="/dropdown" className="item">
                Dropdown
            </a>
            <a href="/translator" className="item">
                Translator
            </a>
        </div>
    )
}

export default Tabbar;