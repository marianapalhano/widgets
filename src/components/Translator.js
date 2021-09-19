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
    const [language, setLanguage] = useState(options[0])
    return(
        <div>
            <Dropdown options={options} selected={language} onSelectedChange={setLanguage} />
        </div>
    )
}

export default Translator;