import React, { Component } from 'react';
import './layout.css'
import logo from '../../../src/levels.svg'
import Dropdown from '../Dropdown/Dropdown';
import {Link} from 'react-router-dom';

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
            {/* <div className="anchor-div">
                    <div className="circle-btn">
                        <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="sr-only">Toggle Dropdown</span>
                        </button>
                        <div class="dropdown-menu">
                            <Link class="dropdown-item">Action</Link>
                            <Link class="dropdown-item">Another action</Link>
                            <Link class="dropdown-item">Something else here</Link>
                            <div role="separator" class="dropdown-divider"></div>
                            <Link class="dropdown-item">Separated link</Link>
                        </div>
                    </div>
                </div> */}
            </header>
            <div className='App-body'>
                {this.props.children}
            </div>
            <footer className="footer">
                
            </footer>
        </div>   
        
        );
    }
}

export default Layout;