import React, { Component } from 'react';
import './Home.css';
import DataCard from '../../components/Widget/DataWidget/DataCard';
import Label from '../../components/Widget/label/Label';
//const DataCard = ()=> import('../../components/Widget/label/Label');

class Home extends Component{
    constructor(props){
        super(props);
            this.state = {

            }
        
    }

    render(){
        return(
            <div className='container'>
                <div className="row recent-contributions">
                        <p className="tag">Recent Contribution</p>
                        <div className="row">
                            <DataCard/>
                            <DataCard/>
                            <DataCard/>
                            <DataCard/>
                            <DataCard/>
                            <DataCard/>
                        </div>
                        <span className="view-all">View All<i  className="fas fa-long-arrow-right"></i></span>
                </div>
            </div>
        );
    }
}

export default Home;