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

    const renderedResults = results.map((result) => {
        return(
            <div id={result.pageid} className="item">
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
                </div>
            </div>
        );
    });

    return(
        <>
            <div className="ui form">
                <div className="field">
                    <h1>Search</h1>
                    <label>Enter search term</label>
                    <input type="text" onChange={e => setTerm(e.target.value)} value={term} />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
 
        </>
    );
}