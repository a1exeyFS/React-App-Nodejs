import React, { Component } from "react";
import PageHeader from "./common/pageHeader";
import '../css/about.css'

class About extends Component {
  state = {};
  render() {
    return (
      <div className="about-section paddingTB60 gray-bg mt-2">
                <div className="container">
                    <div className = "row">
						<div className="col-md-7 col-sm-6">
								< PageHeader titleText = "React Project" />
							<div className="about-title clearfix">
								<h1>About <span>React APP</span></h1>
								<h3>Lorem ipsum dolor sit amet </h3>
								<p className="about-paddingB">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet dolor libero, eget venenatis mauris finibus dictum. Vestibulum quis elit eget neque porttitor congue non sit amet dolor. Proin pretium purus a lorem ornare </p>
								<p>sed lobortis pulvinar. Integer laoreet mi id eros porta euismod. Suspendisse potenti. Nulla eros mauris, convallis et sem tempus, viverra hendrerit sapien</p>
						<div className="about-icons"> 
                            <ul >
                                <li><a href="https://www.facebook.com/"><i id="social-fb" className="fab fa-facebook-square fa-3x social"></i></a> </li>
                                <li><a href="https://twitter.com/"><i id="social-tw" className="fab fa-twitter-square fa-3x social"></i></a> </li>
                                <li> <a href="https://plus.google.com/"><i id="social-gp" className="fab fa-google-plus-square fa-3x social"></i></a> </li>
                                <li> <a href="mailto:bootsnipp@gmail.com"><i id="social-em" className="fas fa-envelope-square fa-3x social"></i></a> </li>
                            </ul>       
	   					     </div>
							</div>
						</div>
						<div className="col-md-5 col-sm-6 m-auto">
							<div className="about-img">
								<img width="250px"src="https://www.nicepng.com/png/full/222-2224705_react-js-logo.png" alt=""/>
							</div>
						</div>	
                    </div>
                </div>
            </div>
    );
  }
}

export default About;