import React from 'react';
import './Label.css';
import {Link} from 'react-router-dom';

const Label = (props)=> {

    return(
       <Link to={props.link}> <label className="label col-md-2 mb-3">Apple</label></Link>
    );
}
    


export default Label;