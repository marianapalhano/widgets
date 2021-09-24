import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translator from './components/Translator';
import Route from './components/Route';
import Tabbar from './components/Tabbar';

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
    // const [showDropdown, setShowDropdown] = useState(true);

    return(
        <div>
            <Tabbar />
            <Route path='/'>
                <Accordion items={items} />
            </Route>
            <Route path='/search'>
                <Search />
            </Route>
            <Route path='/dropdown'>
                <Dropdown label="Select a color" options={options} selected={selected} onSelectedChange={setSelected} />
            </Route>
            <Route path='/translator'>
                <Translator />
            </Route>
        </div>
    )
};

export default App;