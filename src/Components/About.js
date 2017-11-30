import React, { Component } from 'react';
import jason1 from '../Images/jason1.jpg';

class About extends Component {
	render(){
		return(
		<div className="About">
			<span className="route-header">ABOUT</span>
			<div className="route-container">
				<div className="about-bio-container">
					<img src={jason1} className="bio-pic"/>
					<div className="about-bio-text-container">
					<blockquote>
						<p className="bio-quote">"Resourceful, passionate digital professional with a unique blend of problem-solving and creative talent"</p>
					</blockquote>
					</div>
				</div>
				<h1 className="about-header">My Journey So Far...</h1> 
				<div className="about-parallax-1">
				</div>
				<div className="about-city"><span>Cleveland, Ohio</span></div>
				<div className="about-text">
					<p>Where I was born. Instilled all that classic Rust Belt work ethic, underdog mentality and love for doomed professional sports teams. 
					</p>
				</div>
				<div className="about-parallax-2">
				</div>
				<div className="about-city"><span>Myrtle Beach, South Carolina</span></div>
				<div className="about-text">
					<p>My hometown. A nice place to grow up. Slow-paced life of hermit crabs, beachwear stores and buffets.
					</p>
				</div>
				<div className="about-parallax-3">
				</div>
				<div className="about-city"><span>Columbia, South Carolina</span></div>
				<div className="about-text">
					<p>My alma mater. Go Cocks!
					</p>
				</div>
				<div className="about-parallax-4">
				</div>
				<div className="about-city"><span>New York, New York</span></div>
				<div className="about-text">
					<p>Always wanted to make my way in the Big Apple, and I've been here for nearly a decade. Currently reside in Greenpoint, Brooklyn.
					</p>
				</div>
			</div>
		</div>
        );
	}
}

export default About;