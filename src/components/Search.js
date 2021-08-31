import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Search() {
    const [term, setTerm] = useState('');

    useEffect(() => {
        const search = async () => {
            await axios.get('http://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    format: 'json',
                    origin: '*',
                    srsearch: term
                }
            });
        }
        search();
    }, [term]);

    return(
        <>
            <h1>Search</h1>
            <input type="text" onChange={e => setTerm(e.target.value)} value={term} />
        </>
    );
}