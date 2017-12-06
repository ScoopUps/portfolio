import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import jason1 from '../Images/jason1.jpg';

class Work extends Component {

// <Link to="/gallery" className="gallery-link">See Gallery</Link>

	render(){
		return(
		<div className="Work">
			<div className="route-header">
				<span className="route-header-top">WORK</span>
				<div className="route-header-fill">
				<div className="route-header-bottom"></div>
				</div> 
			</div>
				<div className="work-container work-container-1">
					<div className="work-photo-container">
						<div onClick={this.handleClick} className="work-photo-1 work-photo"></div>
					</div>
					<div className="work-text">
						<span className="work-text-header">Bleacher Report</span>
						<span className="work-text-subheader">New York, NY (Remote)</span>
						<hr/>
						<span className="title">Associate Editor</span>
						<p className="work-text-body">Served​ ​as​ ​national​ ​editorial​ ​presence​ ​for​ ​several​ ​Bleacher​ ​Report​ ​properties​ ​engaging​ ​millions.​ ​Strategized with​ ​programming,​ ​social​ ​and​ ​analytics​ ​teams​ ​across​ ​the​ ​globe​ ​to​ ​plan​ ​content​ ​budgets,​ ​target​ ​readership and​ ​maximize​ ​impact.​ ​Synced​ ​with​ ​remote​ ​freelance​ ​writing​ ​resources​ ​and​ ​B/R​ ​brand​ ​talent​ ​to​ ​execute original​ ​MLB​ ​content</p>					</div>
				</div>
				
				<div className="work-container work-container-2">
					<div className="work-photo-container">
						<div onClick={this.handleClick} className="work-photo-2 work-photo"></div>
					</div>
					<div className="work-text">
						<span className="work-text-header">MLB Advanced Media</span>
						<span className="work-text-subheader">New York, NY</span>
						<hr/>
						<span className="title">Site Manager</span>
					<p className="work-text-body">Executed​ ​MLB.com​ ​site​ ​operations​ ​on​ ​content​ ​management​ ​systems​ ​for​ ​real-time​ ​web/mobile​ ​distribution. Processed​ ​and​ ​deployed​ ​video​ ​highlight​ ​packages​ ​to​ ​MLBAM’s​ ​international​ ​partner​ ​stakeholders.​ ​Oversaw​ ​copy and​ ​style​ ​standards​ ​as​ ​lead​ ​editor​ ​for​ ​the​ ​multimedia​ ​publishing​ ​group.​ ​Progressed​ ​responsibilities​ ​rapidly​ ​from video​ ​highlight​ ​publishing​ ​to​ ​key​ ​web​ ​management​ ​and​ ​lead​ ​editing​ ​roles​ ​in​ ​the​ ​span​ ​of​ ​weeks​ ​after​ ​initial​ ​hire.</p>
				</div>
				</div>

				<div className="work-container work-container-3">
					<div className="work-photo-container">
						<div onClick={this.handleClick} className="work-photo-3 work-photo"></div>
					</div>
					<div className="work-text">
						<span className="work-text-header">National Football League</span>
						<span className="work-text-subheader">New York, NY</span>
						<hr/>
						<span className="title">Quality Assurance Analyst</span>
						<span className="title">Project Lead</span>
					<p className="work-text-body">Guided​ ​auditing​ ​operations​ ​for​ ​the​ ​NFL’s​ ​Player​ ​Participation​ ​project,​ ​including​ ​logistics,​ ​quality​ ​assurance​ ​and​ ​data management.​ ​Composed internal corporate communications, such as the <a href="http://www.nflgsis.com/pp/Newsletters/Newsletter2012-01.pdf" target="_blank" rel="noopener noreferrer" className="newsletter-link">Player ​Participation​ Newsletter</a>. Supervised​ ​a​ ​team​ ​of​ ​QA​ ​analysts​ ​and​ ​trained​ ​new​ ​hires​ ​on​ ​project​ ​hardware/software.  Administered​ ​video​ ​operations​ ​and​ ​capture​ ​for​ ​the​ ​league’s​ ​internal​ ​video​ ​system.​ ​Chosen​ ​to​ ​serve​ ​as​ ​on-site, live-event​ ​administrator​ ​for​ ​new​ ​player​ ​safety​ ​protocol​ ​implemented​ ​at​ ​the​ ​2011​ ​AFC​ ​Divisional​ ​Playoffs.</p>
				</div>
				</div>

				<div className="work-container work-container-4">
					<div className="work-photo-container">
						<div onClick={this.handleClick} className="work-photo-4 work-photo"></div>
					</div>
					<div className="work-text">
						<span className="work-text-header">Screenvision</span>
						<span className="work-text-subheader">New York, NY</span>
						<hr/>
						<span className="title">Project Management Consultant</span>
						<span className="title">Senior Operations Analyst</span>
						<span className="title">Sales Proposal Coordinator</span>
						<p className="work-text-body">Oversaw​ ​all​ ​aspects​ ​of​ ​national​ ​and​ ​regional​ ​cinema​ ​advertising​ ​campaign​ ​management,​ ​including​ ​scheduling, trafficking​ ​and​ ​inventory.​ ​Projected​ ​sales​ ​impression​ ​levels​ ​and​ ​ensured​ ​campaign​ ​delivery​ ​to​ ​client​ ​fulfillment. Performed​ ​complex​ ​queries​ ​to​ ​optimize​ ​production​ ​costs​ ​and​ ​report​ ​monthly​ ​flight​ ​metrics/trends.​ ​Team​ ​lead​ ​for generating​ ​targeted​ ​client​ ​sales/marketing​ ​proposals​ ​across​ ​all​ ​levels​ ​of​ ​business.​ ​Consulted​ ​senior​ ​management​ ​and systems​ ​developers​ ​on​ ​improving​ ​current​ ​processes​ ​and​ ​integrating​ ​new​ ​hires.​ ​Developed​ ​new​ ​workflows​ ​and​ ​excel tools​ ​to​ ​validate​ ​key​ ​operational​ ​components.​</p>
				</div>
				</div>
			
		</div>
        );
	}
}

export default Work;