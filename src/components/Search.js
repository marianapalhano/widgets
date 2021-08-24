import React, { useState } from 'react';
import axios from 'axios';

export default function Search() {
    const [term, setTerm] = useState('');

    function searchWiki(input) {
        console.log(input);
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