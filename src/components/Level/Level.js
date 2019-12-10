import React from 'react';
import './Level.css';
import Label from '../Widget/label/Label';


const Level = (props)=>{
    let numbers = [2,3,4,5,6,7];

    let listedItems = numbers.map((number) =>
        <tr className="table-info"><td>{number}  </td></tr>  
    );

   // var level = (props.title)?props.title : 'Input level';
    return (
        <div className="col-md-4 col-4 table-div">
            <Label/>
            <table className="table">
                <tbody>
                    {listedItems}
                </tbody>
            </table>
        </div>
    );
}













export default Level;