
import React, { Component } from 'react';
import  LargeButton  from "../../components/LargeButton/LargeButton";


class AddCompensations extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            displayForm : false
        };
    }

    handleClick = (event) =>{
        alert('I have arrived')
        console.log(event)
    }



    render() {
        return (
            <div className="add_companaies_section">
                <div className="row">
                    <div className="col-md-6  mt-1 ">
                        <LargeButton clicked = {this.handleClick} title ="Add Level"/>
                    </div>
                    <div className="col-md-6 mt-1 ">
                        <LargeButton clicked = {this.handleClick} title ="Add Compensation"/>
                    </div>
                </div>
                <div className="row">
                    <div className="add_form col-md-12">
                        <form className="mt-5 col-md-12">
                            <div class="input-group input-group-lg">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
                                </div>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                            </div>
                        </form>   
                    </div>

                </div>
            </div>
        );
    }
}

export default AddCompensations;