
import React, { Component } from 'react';
import  LargeButton  from "../../components/LargeButton/LargeButton";
import ContentLoader from 'react-content-loader';
import CompModal from '../../components/CompensationModal/CompensationModal';
import './Add_Compensations.css';
import CheckBox from '../../components/CheckBox/CheckBox';
import ContributeModal from '../../components/ContributeModal/ContributeModal'



class AddCompensations extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            displayForm : false
        };
    }

    handleClick = (event) =>{
        console.log(event)
    }



    render() {
        return (
            <div className="add_companaies_section">
                <ContributeModal/>
                <div className="row mt-2 p-2 ">
                    <div className="col-md-6 col-6 mt-1 ">
                        
                        <LargeButton clicked = {this.handleClick} title ="Add Level" float="float-right"/>
                    </div>
                    <div className="col-md-6 col-6 mt-1 ">
                        <LargeButton clicked = {this.handleClick} title ="Add Compensation" float="float-left"/>
                    </div>
                </div>
                <br/>
                <section className="row">
                    <div className="col-md-6 col-12 offset-md-3 text-center p-2">
                        <form >
                            <div className="form-group ">
                                <input type="text" className="form-control form-control-lg" id="inputCompanyName" placeholder="Company Name"/>
                                <small id="inputCompanyName" className="form-text float-left text-muted">Please enter company</small>
                            </div>
                            <br/>
                            <div className="form-group ">
                                <input type="text" className="form-control form-control-lg" id="inputLevelName" placeholder="Level"/>
                                <small id="inputLevelName" className="form-text float-left text-muted">Enter the level for whichever company you are at. Ex. Senior or Junior or Intermediate or Staff or L4 or E3 etc</small>
                            </div>
                            <br/>
                            <div className="form-group">
                                <select className="form-control form-control-lg" id="inputTitle" placeholder="Select Title">
                                <option>Select Title</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </select>
                            </div>
                            <br/>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">&#x20A6;</span>
                                </div>
                                <input type="text" placeholder="Total Salary"className="form-control form-control-lg" aria-label="Amount (to the nearest dollar)"/>
                                <div className="input-group-append">
                                    <span class="input-group-text">.00</span>
                                </div>
                                <small className="form-text">Salary + Bonus + Stock you will make this year in thousands (ex. &#x20A6;125,000 -> 125). Easy way to get this number is look at your W2 and adjust for this year.</small>
                            </div>
                            <br/>
                            <div className="form-group ">
                                <input type="text" className="form-control form-control-lg" id="inputLocation" placeholder="Location"/>
                            </div>
                            <br/>
                            <div className="form-row">
                                <div className="col-md-6 col-6 float-left">
                                    <input type="text" className="form-control form-control-lg" placeholder="Years of experience"/>
                                </div>
                                <div className="col-md-6 col-6">
                                    <input type="text" className="form-control form-control-lg" placeholder="Years at company"/>
                                </div>
                            </div>
                            <br/>
                            <div className="form-group">
                                <select className="form-control form-control-lg" id="inputTitle">
                                <option>Select Tag</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </select>
                            </div>
                            <br/>
                            <center><h4>Compensation Breakdown</h4></center>
                            <br/>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">&#x20A6;</span>
                                </div>
                                <input type="text" className="form-control form-control-lg" placeholder="Base Salary" aria-label="Amount (to the nearest dollar)"/>
                                <div className="input-group-append">
                                    <span class="input-group-text">.00</span>
                                </div>
                            </div>
                            <br/>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">&#x20A6;</span>
                                </div>
                                <input type="text" className="form-control form-control-lg" placeholder=" Yealy Bonus" aria-label="Amount (to the nearest dollar)"/>
                                <div className="input-group-append">
                                    <span class="input-group-text">.00</span>
                                </div>     
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-4"><CheckBox gender="Male"/></div>
                                <div className="col-md-4 col-4"><CheckBox gender="Female"/></div>
                                <div className="col-md-4 col-4"><CheckBox gender="Other"/></div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-4"><CheckBox gender="Bsc"/></div>
                                <div className="col-md-4 col-4"><CheckBox gender="Msc"/></div>
                                <div className="col-md-4 col-4"><CheckBox gender="Phd"/></div>
                            </div>
                            <SubmitButton/>
                           
                        </form>
                        <br/>
                        <br/>
                    </div>
                </section>
            </div>
        );
    }
}



const DataCardLoader = () => (
    <ContentLoader
    height={280}
    width={500}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    >
    <rect x="3" y="3" rx="10" ry="10" width="150" height="100" />
    </ContentLoader>
);

const SubmitButton = (props) =>(
    <button type="submit" style={{width: "100%"}} className="btn btn-success btn-lg">Submit</button>
);

export default AddCompensations;