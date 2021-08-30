import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Search() {
    const [term, setTerm] = useState('');

    useEffect(() => {
        console.log('asdf')
    });

    function searchWiki(input) {
        setTerm(input);
    }

    return(
        <>
            <h1>Search</h1>
            <input type="text" onChange={searchWiki(e.target.value)} value={term} />
            { console.log(term) }
        </>
    );
}