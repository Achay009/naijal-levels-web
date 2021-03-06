import React, { Component } from 'react';
import './Home.css';
import DataCard from '../../components/Widget/DataWidget/DataCard';
import Label from '../../components/Widget/label/Label';
import CompModal from '../../components/CompensationModal/CompensationModal'

import Level from '../../components/Level/Level';
import populateHomePage from '../../Api/HomePage'
import ContentLoader from 'react-content-loader'



class Home extends Component{
    constructor(props){
        super(props);
            this.state = {
                compensationData :[],
                recentCompensation :[],
                companies :[],
                titles :[],
                loading : false,
                showModal : false,
                modalInformation : {}
            }
            this.toggleDisplay = this.toggleDisplay.bind(this)
        
    }

    toggleDisplay = (e)=> {
        
        this.setState({showModal : !this.state.showModal});
        
    }

    

    componentDidMount(){
        this.setState({loading : !this.state.loading});
        populateHomePage().then(response =>{
            this.setState({
                compensationData : response.data.data.compensation_data,
                titles : response.data.data.titles,
                companies : response.data.data.companies,
                recentCompensation : response.data.data.recent_compensations
            })
        }).catch(err =>{
            console.log(err);
        })
    }

    render(){

        let recentComp = this.state.recentCompensation;
        const listRecentComp = recentComp.map((comp) =>
            <DataCard Compensation={comp} key={comp.id}/>
        );

        let Companies = this.state.companies.map((company)=>
            <Label company={company}/>
        );

        
        return(
            <div className='container home-view'>
                <div className="row recent-contributions">
                        <p className="tag">Recent Contribution</p>
            
                        <div className="row data-tags">
                            {listRecentComp}
                        </div>
                        <span className="view-all">View All<i className="fas fa-long-arrow-right"></i></span>
                </div>
                <div className="row company-section">
                    <p className="tag">Companies</p>
                    <div className="row companies">
                        <div className="col-md-6 company-tag1">
                            {Companies}
                        </div>
                        <div className="col-md-6 company-tag2">
                            <Label/>
                            <Label/>
                        </div>
                    </div>

                </div>
                <div className="row mt-5 level-section">
                    <CompModal showModal={this.state.showModal} closeModal={this.toggleDisplay} modalInformation={this.state.modalInformation}/>
                        <Level toggleModal={this.toggleDisplay}/>
                        <Level toggleModal={this.toggleDisplay}/>
                        <Level toggleModal={this.toggleDisplay}/>
                </div>
            </div>
        );
    }
}


const DataCardLoader = () => (
    <ContentLoader
    height={280}
    width={500}
    speed={1}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    >
    <rect x="3" y="3" rx="10" ry="10" width="90" height="50" />
    </ContentLoader>
);

export default Home;


