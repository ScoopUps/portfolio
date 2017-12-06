import React, { Component } from 'react';
import '../App.css';
import {FaGithubSquare, FaLinkedinSquare, FaEnvelopeSquare} from 'react-icons/lib/fa/';
import jason1 from '../Images/jason1.jpg';

class Footer extends Component {
	render(){
		return(
		<footer className="App-footer">
			<div className="App-footer-fill"></div>
			<div className="App-footer-top">
			<p className="contact">CONTACT ME</p>
			</div>
			<div className="App-footer-bottom">	
			<img src={jason1} className="footer-pic"/>
	          <div className="contact-container">
		          <a className="contact-link" href="https://github.com/scoopups" target="_blank" rel="noopener noreferrer"><FaGithubSquare size={28}/>github.com/scoopups</a>
		          <a className="contact-link" href="https://www.linkedin.com/in/jasonrsoukup/" target="_blank" rel="noopener noreferrer"><FaLinkedinSquare size={28}/>linkedin.com/in/jasonrsoukup</a>
		          <a className="contact-link" href="mailto:jrsoukup17@gmail.com"><FaEnvelopeSquare size={28}/>jrsoukup17@gmail.com</a>
	          </div>
	        </div>
        </footer>  
        );
	}
}

export default Footer;