import React, { Component } from 'react';
import project1 from '../Images/vinyl.png';
import project2 from '../Images/poker.PNG';

class Projects extends Component {
	render(){
		return(
			<div>
				<h1 className="route-header" >PROJECTS</h1>
				<div className="route-container">
					<div className="project-1">
						<a href="https://desolate-mesa-10696.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img className="project-1-photo" src={project1} /></a>
						<div className="project-text">
							<h2>Vinyl Database</h2>
							<p>This is project text</p>
						</div>
					</div>
					<div className="project-2">
						<a href="http://video-poker.bitballoon.com/" target="_blank" rel="noopener noreferrer"><img className="project-2-photo" src={project2} /></a>
						<div className="project-text">
							<h2>Video Poker</h2>
							<p>This is project text</p>
						</div>
					</div>
				</div>
			</div>
        );
	}
}

export default Projects;