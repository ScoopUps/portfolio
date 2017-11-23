import React, { Component } from 'react';
import '../App.css';
import photo from '../Images/main-photo.jpg';

class Home extends Component {
	render(){
		return(
		<div className="main">
		  <img src={photo} className="main-photo" />
		  <div className="mast">
          	<h1 className="masthead"><span className="retro-effect">J</span><span className="retro-effect">a</span><span className="retro-effect">s</span><span className="retro-effect">o</span><span className="retro-effect">n</span> <span className="retro-effect">S</span><span className="retro-effect">o</span><span className="retro-effect">u</span><span className="retro-effect">k</span><span className="retro-effect">u</span><span className="retro-effect">p</span></h1>
			<br/>	  
		  	<span className="mastsubhead">Web Developer</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span className="mastsubhead">Editor</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span className="mastsubhead">Project Manager</span> 
		  </div>	
		</div>
        );
	}
}

export default Home;