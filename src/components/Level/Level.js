import React from 'react';
import './Level.css';
import Label from '../Widget/label/Label';


const Level = (props)=>{
    let numbers = [2,3,4,];

    let listedItems = numbers.map((number) =>
        <tr onClick={props.toggleModal} className="table-info"><td ><span className="span" onClick={props.toggleModal} data-toggle="modal" data-target="#exampleModal">{number}</span></td></tr>  
    );

   // var level = (props.title)?props.title : 'Input level';
    return (
        <div className="col-md-4 col-4 table-div">
            <i className="fa fa-times fa-level-header" style={{position:"relative",color:"#505050",paddingRight:"3px" }} aria-hidden="false"></i><Label/>
            <table className="table">
                <tbody>
                    {listedItems}
                </tbody>
            </table>
        </div>
    );
}













export default Level;