import React from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';

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
    return(
        <div>
            <Accordion items={items} />
            <hr />
            <Search />
            <hr />
            <Dropdown options={options} />
        </div>
    )
};

export default App;