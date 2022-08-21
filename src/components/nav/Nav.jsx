import React from "react";
import "./nav.css";

const Nav = () => {
	return (
		<div>
			<div className="nav">
				<ul className="nav__links">
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#services">Our Services</a>
					</li>
					<li>
						<a href="#testimonials">Testimonials</a>
					</li>
					<li>
						<a href="#contact">Contact Us</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Nav;
