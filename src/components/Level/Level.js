import React from 'react';
import './Level.css'



const Level = (props)=>{
    var level = (props.title)?props.title : 'Input level';
    return (
    <div className="level"><p>{level}</p></div>
    );
}













export default Level;