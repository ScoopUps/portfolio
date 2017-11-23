import React, { Component } from 'react';
import '../App.css';
import logo from '../Images/Logo.png';
import {Link} from 'react-router-dom'

class Header extends Component {
	render(){
		return(
			<header className="App-header">
			    <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
				    <ul className="nav">
				    	<li><Link to="/About">ABOUT ME</Link></li>
				    	<li><Link to="/Work">MY WORK</Link></li>
				    	<li><Link to="/Projects">PROJECTS</Link></li>
				    </ul>
			</header>
		);
	}
}

export default Header;