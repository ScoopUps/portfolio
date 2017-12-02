import React, { Component } from 'react';
import jason1 from '../Images/jason1.jpg';

class About extends Component {
	render(){
		return(
		<div className="About">
			<div className="route-header">
				<span className="route-header-top">ABOUT</span>
				<div className="route-header-fill">
						<img src={jason1} className="route-header-pic"/>
				<div className="route-header-bottom"></div>
				</div> 
			</div>
			
				<div className="about-parallax about-parallax-1">
					<span className="city">Cleveland</span>
					<span className="about-text">Born.</span>
				</div>
				<div className="about-city"><span>Ohio</span></div>
				<div className="about-parallax about-parallax-2">
					<span className="city">Myrtle Beach</span>
					<span className="about-text">Raised.</span>
				</div>
				<div className="about-city"><span>South Carolina</span></div>
				
				<div className="about-parallax about-parallax-3">
					<span className="city">Columbia</span>
					<span className="about-text">Educated.</span>
				</div>
				<div className="about-city"><span>South Carolina</span></div>
				<div className="about-parallax about-parallax-4">
					<span className="city">New York City</span>
				</div>
				<div className="about-city"><span>New York</span></div>
		</div>
        );
	}
}

export default About;