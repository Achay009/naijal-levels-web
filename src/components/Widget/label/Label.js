import React from 'react';
import './Label.css';
import {Link} from 'react-router-dom';

const Label = (props)=> {

    return(
       <Link to={props.link}> <label className="company-label">Apple</label></Link>
    );
}
    


export default Label;