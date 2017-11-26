import React, { Component } from 'react';
import jason from '../Images/jason.jpg';

class About extends Component {
	render(){
		return(
		<div>
			<h1 className="route-header">ABOUT</h1>
			<div className="route-container">
				<div className="about-bio-container">
					<img src={jason} className="bio-pic"/>
					<div className="about-bio-text-container">
					<blockquote>
						<p className="bio-quote">"Resourceful, passionate digital professional with a unique blend of problem-solving and creative talent"</p>
					</blockquote>
					</div>
				</div>
				<h1 className="about-header">My Journey</h1> 
				<div className="about-parallax-1">
				</div>
				<div className="about-city"><span>Cleveland, Ohio</span></div>
				<div className="about-text">
				</div>
				<div className="about-parallax-2">
				</div>
				<div className="about-city"><span>Myrtle Beach, South Carolina</span></div>
				<div className="about-text">
				</div>
				<div className="about-parallax-3">
				</div>
				<div className="about-city"><span>Columbia, South Carolina</span></div>
				<div className="about-text">
				</div>
				<div className="about-parallax-4">
				</div>
				<div className="about-city"><span>New York, New York</span></div>
				<div className="about-text">
				</div>
			</div>
		</div>
        );
	}
}

export default About;