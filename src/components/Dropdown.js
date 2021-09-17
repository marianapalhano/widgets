import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const[open, setOpen] = useState(false);

    useEffect(() => {
        document.body.addEventListener('click', () => {
            setOpen(false);
        }, { capture: true });
    }, []);

    const renderedOptions = options.map((option) => {
        if (option == selected) {
            return null;
        }

        return(
            <div key={option.value} className="item" onClick={() => onSelectedChange(option)}>
                {option.label}
            </div>
        )
    });
    return(
        <>
            <h1>Dropdown</h1>
            <div className="ui form">
                <div className="field">
                    <label className="label">Select a color</label>
                    <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${ open? 'visible active' : ''}`}>
                        <i className="dropdown icon"></i>
                        <div className="text">{selected.label}</div>
                        <div className={`menu ${open? 'visible transition' : ''}`}>
                            {renderedOptions}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dropdown;