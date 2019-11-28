import React from 'react';
import './Dropdown.css';

const Dropdown = (props) =>{
    return (
        <div className="select-dropdown">
            <select>
                <option value="0">Select car:</option>
                <option value="1">Audi</option>
                <option value="2">BMW</option>
                <option value="3">Citroen</option>
                <option value="4">Ford</option>
                <option value="5">Honda</option>
            </select>
        </div>
    );
}


export default Dropdown;