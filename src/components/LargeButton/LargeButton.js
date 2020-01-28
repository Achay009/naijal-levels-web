import React from 'react';
import './Large_Button.css';


const LargeButton = (props) =>(
<button onClick={props.clicked} className={`btn btn-primary ${props.float} large_button`} data-toggle="modal" data-target="#exampleModal">{props.title}</button>

);

export default LargeButton;