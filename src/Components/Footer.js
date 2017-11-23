import React, { Component } from 'react';
import '../App.css';
import {FaGithubSquare, FaLinkedinSquare, FaEnvelopeSquare} from 'react-icons/lib/fa/';

class Footer extends Component {
	render(){
		return(
		<footer className="App-footer">
			<p className="contact">Contact Me</p>
			<div>	
	          <a className="link" href="https://github.com/scoopups" target="_blank" rel="noopener noreferrer"><FaGithubSquare size={56}/></a>
	          <a className="link" href="https://www.linkedin.com/in/jasonrsoukup/" target="_blank" rel="noopener noreferrer"><FaLinkedinSquare size={56}/></a>
	          <a className="link" href="mailto:jrsoukup17@gmail.com"><FaEnvelopeSquare size={56}/></a>
	        </div>
        </footer>  
        );
	}
}

export default Footer;