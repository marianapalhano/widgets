import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translator from './components/Translator';

const items = [
    {
        title: 'What is React?',
        content: 'React is a JavaScript library'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'We use React by creating components'
    }
]

const options = [
    {
        label: 'Red',
        value: 'red'
    },
    {
        label: 'Green',
        value: 'green'
    },
    {
        label: 'Blue',
        value: 'blue'
    }
]

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return(
        <div>
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            <Accordion items={items} />
            <hr />
            <Search />
            <hr />
            { showDropdown ?
                <Dropdown options={options} selected={selected} onSelectedChange={setSelected} />
            : null }
            <Translator />
        </div>
    )
};

export default App;