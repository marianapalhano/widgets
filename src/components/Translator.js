import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convertion from './Convertion';

const options = [
    {
        label: 'Portuguese',
        value: 'pt'
    },
    {
        label: 'English',
        value: 'en'
    },
    {
        label: 'French',
        value: 'fr'
    }
]

const Translator = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
                    <input value={text} onChange={evt => setText(evt.target.value)} />
                </div>            
            </div>            
            <Dropdown label="Select a language" options={options} selected={language} onSelectedChange={setLanguage} />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convertion language={language} text={text} />
        </div>
    )
}

export default Translator;