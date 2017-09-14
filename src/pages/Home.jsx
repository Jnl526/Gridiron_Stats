import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Home.scss";
import { Parallax } from "react-parallax";
import img1 from "assets/images/background1.png";
import img2 from "assets/images/background2.png";
import img3 from "assets/images/background3.png";

class Home extends Component {
	render() {
		return (

			<div className="App">
				<Parallax
					strength={300}
					bgImage= {img1}
					bgWidth="100%"
					bgHeight="100vh"
				>
					<h2 className="GIStatsParHeader">Gridiron Stats</h2>
				</Parallax>
				<Parallax
					strength={300}
					bgImage= {img2}
					bgWidth="100%"
					bgHeight="100vh"
				>
					<h2>Compare the Teams</h2>
				</Parallax>
				<Parallax
					strength={300}
					bgImage= {img3}
					bgWidth="100%"
					bgHeight="100vh"
				>
					<h2>Donate</h2>
				</Parallax>
			</div>


		);
	}
}


export default Home;
