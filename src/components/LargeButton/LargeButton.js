import React from 'react';
import './Large_Button.css';


const LargeButton = (props) =>(
<button onClick={props.clicked} className="btn btn-primary large_button">{props.title}</button>

);

export default LargeButton;