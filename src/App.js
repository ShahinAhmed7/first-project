import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/About';
import Service from './components/pages/Service';
import Photos from './components/Photos';
import Single from './components/Single';

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <div className="content-block">
        <div className="container">
          <div className="row">
            <div className="col">
              <Route exact path="/" render={props => (
                < Photos/>
              )}/>

              <Route path="/about" component={About}/>
              <Route path="/service" component={Service}/>
              <Route path="/single" component={Single}/>

            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
