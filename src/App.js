import React,{Component} from 'react';
import './App.css';
import  Layout  from '../src/components/layout/layout';
import Routes from '../src/components/Route/Route';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
} from "react-router-dom";


class App extends Component {
  render(){

    return (
      <Router>

          <div className="App">
            <Layout>
              <Routes/> 
            </Layout>
          </div>

      </Router>
     
    );

   
  }
}

export default App;
