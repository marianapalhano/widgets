import React, { useState } from 'react';
import Dropdown from './Dropdown';

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
            <input />
            <Dropdown label="Select a language" options={options} selected={language} onSelectedChange={setLanguage} />
        </div>
    )
}

export default Translator;