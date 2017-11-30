import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import Miller1 from '../Images/BRCImages/Miller1.PNG';
import Miller2 from '../Images/BRCImages/Miller2.PNG';
import Miller3 from '../Images/BRCImages/Miller3.PNG';
import Miller4 from '../Images/BRCImages/Miller4.PNG';
import Miller5 from '../Images/BRCImages/Miller5.PNG';
import Knobler1 from '../Images/BRCImages/Knobler1.PNG';
import Knobler2 from '../Images/BRCImages/Knobler2.PNG';
import Knobler3 from '../Images/BRCImages/Knobler3.PNG';
import MLB1 from '../Images/BRCImages/MLB1.PNG';
import MLB2 from '../Images/BRCImages/MLB2.PNG';
import MLB3 from '../Images/BRCImages/MLB3.PNG';
import MLB4 from '../Images/BRCImages/MLB4.PNG';
import MLB5 from '../Images/BRCImages/MLB5.PNG';
import MLB6 from '../Images/BRCImages/MLB6.PNG';
import MLB7 from '../Images/BRCImages/MLB7.PNG';
import MLB8 from '../Images/BRCImages/MLB8.PNG';
import MLB9 from '../Images/BRCImages/MLB9.PNG';
import MLB10 from '../Images/BRCImages/MLB10.PNG';



class BRCarousel extends Component {
    render() {
    	return(
    	<div className="Gallery">
    		<span className="route-header" >EDITORIAL GALLERY</span>
	    	<div className="gallery-container">	
		    	<div className="carousel-intro">
		    		<p>Scott Miller has always been one of my favorite baseball writers, and I was fortunate to be able to work with him on several pieces for Bleacher Report. The first three stories were executed on ideas I researched and pitched to our high-impact content group. The final two are real-time reactions I worked with Scott directly on critical breaking news.</p>
		    	</div> 
		    	<div className="carousel-container">
			    	<Carousel width={"50%"} useKeyboardArrows={true} showThumbs={false}>
			                <div >
			                    <img src={Miller1} />
			                    <p className="legend">
			                    	<a className="legend-link" href="http://bleacherreport.com/articles/2546421-how-a-childhood-idol-and-a-scouting-guru-landed-felix-hernandez-in-seattle" target="_blank" rel="noopener noreferrer">Click for full article</a>
			                    </p>
			                </div>
			                <div>
			                    <img src={Miller2} />
			                    <p className="legend">
									<a className="legend-link" href="http://bleacherreport.com/articles/2650764-stephen-strasburgs-father-son-bond-with-tony-gwynn-made-him-an-mlb-star" target="_blank" rel="noopener noreferrer">Click for full article</a>
			                    </p>
			                </div>
			                <div>
			                    <img src={Miller3} />
			                    <p className="legend">
									<a className="legend-link" href="http://bleacherreport.com/articles/2652714-david-price-and-sonny-gray-building-a-bromance-that-transcends-the-game" target="_blank" rel="noopener noreferrer">Click for full article</a> 
			                    </p>
			                </div>
			                <div>
			                    <img src={Miller4} />
			                    <p className="legend">
									<a className="legend-link" href="http://bleacherreport.com/articles/2656348-alex-rodriguez-yankee-tripper-took-more-from-baseball-than-he-ever-gave" target="_blank" rel="noopener noreferrer">Click for full article</a> 
			                    </p>
			                </div>
			                <div>
			                    <img src={Miller5} />
			                    <p className="legend">
									<a className="legend-link" href="http://bleacherreport.com/articles/2665746-jose-fernandezs-joy-passion-lasting-memories-on-tragic-day" target="_blank" rel="noopener noreferrer">Click for full article</a> 
			                    </p>
			                </div>
			         </Carousel>
			      </div>
			      <div className="carousel-intro">
		    		<p>Danny Knobler is another legendary baseball writer I grew up on that Bleacher Report gave me the wonderful opportunity to work with. We synced up on many real-time reaction stories over two years but the three pieces below I was particularly proud to have researched, pitched and see Danny bring to life.</p>
		    	</div> 
		    	<div className="carousel-container">
			    	<Carousel width={"50%"} useKeyboardArrows={true} showThumbs={false}>
			                <div >
			                    <img src={Knobler1} />
			                    <p className="legend">
			                    	<a className="legend-link" href="http://bleacherreport.com/articles/2663230-from-a-fractured-skull-to-baseballs-best-closer-its-a-real-miracle" target="_blank" rel="noopener noreferrer">Click for full article</a>
			                    </p>
			                </div>
			                <div>
			                    <img src={Knobler2} />
			                    <p className="legend">
									<a className="legend-link" href="http://bleacherreport.com/articles/2539309-bryce-harpers-all-time-2015-stands-alongside-babe-ruth-barry-bonds" target="_blank" rel="noopener noreferrer">Click for full article</a>
			                    </p>
			                </div>
			                <div>
			                    <img src={Knobler3} />
			                    <p className="legend">
									<a className="legend-link" href="http://bleacherreport.com/articles/2540480-whats-it-like-to-be-baseballs-real-life-crash-davis" target="_blank" rel="noopener noreferrer">Click for full article</a> 
			                    </p>
			                </div>
			         </Carousel>
			      </div>
			      <div className="carousel-intro">
		    		<p>B/R's MLB 20 for '20 was the first signature series my deputy editor tossed me the editorial keys to. I hunkered down with an exceptionally talented and knowledgeable baseball writer in Joel Reuter to produce this comprehensive 10-part MLB series that engaged over one million unique readers. (NOTE: Some styling is degraded since B/R overhauled their site)</p>
		    	</div> 
		    	<div className="carousel-container">
			    	<Carousel width={"50%"} useKeyboardArrows={true} showThumbs={false}>
			                <div >
			                    <img src={MLB1} />
			                    <p className="legend">
			                    	<a className="legend-link" href="http://bleacherreport.com/articles/2529420-brs-mlb-20-for-20-projecting-top-20-superstars-in-2020" target="_blank" rel="noopener noreferrer">Click for full article</a>
			                    </p>
			                </div>
			                <div>
			                    <img src={MLB2} />
			                    <p className="legend">
									<a className="legend-link" href="http://bleacherreport.com/articles/2504693-brs-mlb-20-for-20-projecting-top-20-catchers-in-2020" target="_blank" rel="noopener noreferrer">Click for full article</a>
			                    </p>
			                </div>
			                <div>
			                    <img src={MLB3} />
			                    <p className="legend">
									<a className="legend-link" href="http://bleacherreport.com/articles/2513360-brs-mlb-20-for-20-projecting-top-20-first-basemen-in-2020" target="_blank" rel="noopener noreferrer">Click for full article</a> 
			                    </p>
			                </div>
			                <div>
			                    <img src={MLB4} />
			                    <p className="legend">
									<a className="legend-link" href="http://bleacherreport.com/articles/2516830-brs-mlb-20-for-20-projecting-top-20-second-basemen-in-2020" target="_blank" rel="noopener noreferrer">Click for full article</a> 
			                    </p>
			                </div>
			                <div>
			                    <img src={MLB5} />
			                    <p className="legend">
									<a className="legend-link" href="http://bleacherreport.com/articles/2519970-brs-mlb-20-for-20-projecting-top-20-shortstops-in-2020" target="_blank" rel="noopener noreferrer">Click for full article</a> 
			                    </p>
			                </div>
			                <div >
			                    <img src={MLB6} />
			                    <p className="legend">
			                    	<a className="legend-link" href="http://bleacherreport.com/articles/2522256-brs-mlb-20-for-20-projecting-top-20-third-basemen-in-2020" target="_blank" rel="noopener noreferrer">Click for full article</a>
			                    </p>
			                </div>
			                <div>
			                    <img src={MLB7} />
			                    <p className="legend">
									<a className="legend-link" href="http://bleacherreport.com/articles/2523625-brs-mlb-20-for-20-projecting-top-20-center-fielders-in-2020" target="_blank" rel="noopener noreferrer">Click for full article</a>
			                    </p>
			                </div>
			                <div>
			                    <img src={MLB8} />
			                    <p className="legend">
									<a className="legend-link" href="http://bleacherreport.com/articles/2523861-brs-mlb-20-for-20-projecting-top-20-corner-outfielders-in-2020" target="_blank" rel="noopener noreferrer">Click for full article</a> 
			                    </p>
			                </div>
			                <div>
			                    <img src={MLB9} />
			                    <p className="legend">
									<a className="legend-link" href="http://bleacherreport.com/articles/2526812-brs-mlb-20-for-20-projecting-top-20-starting-pitchers-in-2020" target="_blank" rel="noopener noreferrer">Click for full article</a> 
			                    </p>
			                </div>
			                <div>
			                    <img src={MLB10} />
			                    <p className="legend">
									<a className="legend-link" href="http://bleacherreport.com/articles/2527931-brs-mlb-20-for-20-projecting-top-20-relief-pitchers-in-2020" target="_blank" rel="noopener noreferrer">Click for full article</a> 
			                    </p>
			                </div>
			         </Carousel>
			      </div>
	         </div>
        </div>
        );
    }
}

export default BRCarousel;