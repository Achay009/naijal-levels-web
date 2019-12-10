import React, { Component } from 'react';
import './layout.css'
import logo from '../../../src/levels.svg'
import Dropdown from '../Dropdown/Dropdown';

class Layout extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }

        
    }
    render(){
        return (
        <div className="App">
            <header className="App-header">
            <div className="nav-head">
            <div className="App-head">
                <img src={logo} className="App-logo" alt="logo" />
                <p className="App-title"> Naija.Levels</p>
            </div>
            <Dropdown/>
            
            </div>

            {/* <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a> */}
            </header>
            <div className='App-body'>
                {this.props.children}
            </div>
            <div className="footer">

            </div>
        </div>   
        
        );
    }
}

export default Layout;