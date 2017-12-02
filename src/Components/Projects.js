import React, { Component } from 'react';
import project1 from '../Images/vinyl.png';
import project2 from '../Images/poker.PNG';
import project3 from '../Images/portfolio.PNG';
import {FaGithubSquare} from 'react-icons/lib/fa/';
import jason1 from '../Images/jason1.jpg';


class Projects extends Component {
	render(){
		return(
			<div className="Projects">
				<div className="route-header">
				<span className="route-header-top">PROJECTS</span>
				<div className="route-header-fill">
						<img src={jason1} className="route-header-pic"/>
				<div className="route-header-bottom"></div>
				</div> 
			</div>
					<div className="project-1">
						<a href="https://desolate-mesa-10696.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img className="project-photo" src={project1} /></a>
						<div className="project-text">
							<h2>Vinyl Database</h2>
							<p className="project-text-right">A RESTful CRUD application deployed on Heroku that I created to keep tabs on my growing vinyl music collection. The back end was built in the Model-View-Controller design pattern with Node.js, Express routing and a PostgreSQL database. The front end is HTML5/CSS3 using an EJS view engine. Completed over the span of six days, this was my second project for General Assembly's Web Development Immersive program.</p>
							<p className="project-tech-used">Technologies Used: Node, Express, EJS, Javascript ES6, HTML5, CSS3, PostgreSQL</p> 
							<a className="link" href="https://github.com/ScoopUps/Vinyl-DB" target="_blank" rel="noopener noreferrer"><FaGithubSquare size={40}/></a>
						</div>
					</div>
					<div className="project-2">
						<a href="http://video-poker.bitballoon.com/" target="_blank" rel="noopener noreferrer"><img className="project-photo" src={project2} /></a>
						<div className="project-text">
							<h2>Video Poker</h2>
							<p className="project-text-left">An elegant, self-contained video poker machine in vanilla Javascript. I used the jQuery library for the event listeners and a good bit of CSS Flexbox for the overall layout. It incorporates HTML5 audio tags for the music and sound effects. I composed the game logic algorithms for all the winning conditions and designed the playing cards and animations from scratch in CSS. Completed in four days, this was my first project for General Assembly's Web Development Immersive program. Give it a whirl.</p>
							<p className="project-tech-used">Technologies Used: Javascript ES6, HTML5, CSS3, jQuery</p>
							<a className="link" href="https://github.com/ScoopUps/Video-Poker" target="_blank" rel="noopener noreferrer"><FaGithubSquare size={40}/></a>
						</div>
					</div>
					<div className="project-1">
						<a href="http://www.jasonsoukup.com/" target="_blank" rel="noopener noreferrer"><img className="project-photo" src={project3} /></a>
						<div className="project-text">
							<h2>Portfolio Site</h2>
							<p className="project-text-right">Not to get too meta but this portfolio site itself is an exercise in modern front-end web development. It is a single-page application in React.js using a component design with React-Router and React-Responsive-Carousel NPM libraries. It is built with a responsive design using CSS media queries for desktop, tablet and smartphone breakpoints. The logo created using GIMP. More than just an interactive resume, it was intended to be a showcase of popular front-end techniques, including carousel/parallax imaging, Font Awesome svg icons, and pseudo-classes.</p>
							<p className="project-tech-used">Technologies Used: Node, React, React-Router, React-Responsive-Carousel, Font Awesome, Javascript ES6, HTML5, CSS3</p>
							<a className="link" href="https://github.com/ScoopUps/portfolio" target="_blank" rel="noopener noreferrer"><FaGithubSquare size={40}/></a>
						</div>
					</div>
				
			</div>
        );
	}
}

export default Projects;