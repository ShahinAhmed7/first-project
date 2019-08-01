import React, { Component } from 'react'
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';

export default class About extends Component {
    render() {
        return (
            <div>
               <div className="about-area">
                   <div className="container">
                   <div className="row">
                       <div className="col-md-12">
                           <h3>ঢ্যাঁড়শ চাষে আশার আলো দেখছেন কুষ্টিয়া ভেরামারার রাসেল আহমেদ!</h3>
                       </div>
                   </div>
                   <br/>
                       <div className="row">
                           <div className="col-md-8">
                           <img src={img1} alt="Image1" />
                               <br/> <br/>
                           </div>
                           <div className="col-md-4">
                           <img src={img2} alt="Image2" />
                           </div>
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}
