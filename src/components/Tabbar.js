import React from 'react';
import Link from './components/Link';

const Tabbar = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link href="/" className="item">
                Accordion
            </Link>
            <Link href="/search" className="item">
                Wiki Search
            </Link>
            <Link href="/dropdown" className="item">
                Dropdown
            </Link>
            <Link href="/translator" className="item">
                Translator
            </Link>
        </div>
    )
}

export default Tabbar;