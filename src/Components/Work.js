import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Work extends Component {
	render(){
		return(
		<div>
			<h1 className="route-header" >WORK</h1>
			<div className="route-container-work">
				<div className="work-photo-1">
				</div>
				<div className="work-text">
					<span className="work-text-header">Bleacher Report</span>
					<h3 className="work-text-subheader">New York, NY (Remote)</h3>
					<hr/>
					<Link to="/gallery" className="gallery-link">See Gallery</Link>
				</div>
				<div className="work-photo-2">
				</div>
				<div className="work-text">
					<span className="work-text-header">MLB Advanced Media</span>
					<h3 className="work-text-subheader">New York, NY</h3>
					<hr/>
				</div>
				<div className="work-photo-3">
				</div>
				<div className="work-text">
					<span className="work-text-header">National Football League</span>
					<h3 className="work-text-subheader">New York, NY</h3>
					<hr/>
				</div>
				<div className="work-photo-4">
				</div>
				<div className="work-text">
					<span className="work-text-header">Screenvision</span>
					<h3 className="work-text-subheader">New York, NY</h3>
					<hr/>
				</div>
			</div>
		</div>
        );
	}
}

export default Work;