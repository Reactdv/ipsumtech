import React from "react";
import "./home.css";
import homepage from "../../assets/homepage-bg.svg";
import peoplebg from "../../assets/people-removebg.png";

const Home = () => {
	return (
		<div id="home" className="section__height">
			<div className="home">
				<img src={homepage} alt="home" />
				<img className="peoplebg" src={peoplebg} alt="people" />
				<div className="home-content">
					<h1>
						Lets start something <br />
						big together
					</h1>
					<button>
						<a href="#contact">Contact now!</a>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
