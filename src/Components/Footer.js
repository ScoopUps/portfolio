import React, { Component } from 'react';
import '../App.css';
import {FaGithubSquare, FaLinkedinSquare, FaEnvelopeSquare} from 'react-icons/lib/fa/';

class Footer extends Component {
	render(){
		return(
		<footer className="App-footer">
			<div className="App-footer-fill"></div>
			<div className="App-footer-top">
			<p className="contact">CONTACT</p>
			</div>
			<div className="App-footer-bottom">	
	          <div className="contact-container">
		          <a className="link" href="https://github.com/scoopups" target="_blank" rel="noopener noreferrer"><FaGithubSquare size={40}/></a>
		          <a className="link" href="https://www.linkedin.com/in/jasonrsoukup/" target="_blank" rel="noopener noreferrer"><FaLinkedinSquare size={40}/></a>
		          <a className="link" href="mailto:jrsoukup17@gmail.com"><FaEnvelopeSquare size={40}/></a>
	          </div>
	        </div>
        </footer>  
        );
	}
}

export default Footer;