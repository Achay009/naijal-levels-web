import React, { Component } from 'react';
import './Home.css';
import DataCard from '../../components/Widget/DataWidget/DataCard';
import Label from '../../components/Widget/label/Label';
//const DataCard = ()=> import('../../components/Widget/label/Label');
import Level from '../../components/Level/Level';

class Home extends Component{
    constructor(props){
        super(props);
            this.state = {

            }
        
    }

    render(){
        return(
            <div className='container home-view'>
                <div className="row recent-contributions">
                        <p className="tag">Recent Contribution</p>
                        <div className="row data-tags">
                            <DataCard/>
                            <DataCard/>
                            <DataCard/>
                            <DataCard/>
                            <DataCard/>
                            <DataCard/>
                        </div>
                        <span className="view-all">View All<i  className="fas fa-long-arrow-right"></i></span>
                </div>
                <div className="row company-section">
                    <p className="tag">Companies</p>
                    <div className="row companies">
                        <div className="col-md-6 company-tag1">
                            <Label/>
                            <Label/>
                            <Label/>
                        </div>
                        <div className="col-md-6 company-tag2">
                            <Label/>
                            <Label/>
                        </div>
                    </div>

                </div>
                <div className="row mt-5 level-section">
                    <Level/>
                    <Level/>
                    <Level/>
                </div>
            </div>
        );
    }
}

export default Home;