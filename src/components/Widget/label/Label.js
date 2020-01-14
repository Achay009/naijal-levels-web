import React from 'react';
import './Label.css';
import {Link} from 'react-router-dom';

const Label = (props)=> {

    return(
    <Link to={props.link}> <span className=" btn btn-default label  col-4 col-md-2 mb-3">Apple</span></Link>
    );
}
    


export default Label;