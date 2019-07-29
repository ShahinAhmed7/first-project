import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Photos from './components/Photos';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content-block">
        <div className="container">
          <div className="row">
            <div className="col">
             <Photos/>
            
            </div>
          </div>
        </div>
      </div>


      <Footer/>
    </div>
  );
}

export default App;