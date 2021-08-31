import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Search() {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    console.log(results);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('http://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    format: 'json',
                    origin: '*',
                    srsearch: term
                }
            });
            setResults(data.query.search);
        }
        if (term) {
            search();
        }
    }, [term]);

    return(
        <>
            <h1>Search</h1>
            <input type="text" onChange={e => setTerm(e.target.value)} value={term} />
        </>
    );
}