import React from "react";
import "./about.css";
import engineeringTeam from "../../assets/engineering-team.svg";
import irregbg from "../../assets/irreg-bg.svg";
import HowWeWorkCard from "./HowWeWorkCard";
import searching from "../../assets/searching.svg";
import analysis from "../../assets/research-analysis.svg";
import design from "../../assets/design.svg";
import counselling from "../../assets/counselling.svg";

const howWeWorkData = [
	{
		title: "Gathering Data",
		p: "  investigate ,study and collect  data material and sources to reach new conclussion  and provide appropriate proposal that fits into the client’s preferences .Our researchers conduct research and case study to find the most popular and best possible solutions  and potential risk of a project or bussiness proposal  ",
		img: searching,
		isReverse: false,
	},
	{
		title: "Research & Analysis",
		p: "         Do reasearch  & analysis to form up strategy that we will follow up throughout the process building a product This will give us a clear vission of our goals and milestone which will make us easier to deal problem if arrives in the future  ",
		img: analysis,
		isReverse: true,
	},
	{
		title: "Design & Completion",
		p: "      We all work hard  to fullfill our  client expectation and give them the best result that they can get .Our production team work hard and fast to meet the expected time delivery as well as the complete complete product.The product will  undergo several testing to make sure it will works as intended  ",
		img: design,
		isReverse: false,
	},
	{
		title: "Product Counselling & Other Services",
		p: "      After the product has been delivered to the client  we will make monthly maintainance to ensure that the product will function as it is used to be we also have other services like product counsellng where our research team will study to keep you updated with the latest, most popular and trending bussiness ideas  ",
		img: counselling,
		isReverse: true,
	},
];

const About = () => {
	return (
		<div id="about" className="section__height">
			<div className="about">
				<h1>About us</h1>
				<img className="engineeringTeam" src={engineeringTeam} alt="team" />
				<div className="about__card">
					<h2>Who we are?</h2>
					<p>
						{" "}
						We are group of fullstack software engineer professionals that
						are passionate of helping clients to build their next
						bussiness ideas .We provide the best possible solutions to
						make your bussiness plans to succeed, we offers quality
						services and deliver what client needs comes with a
						competetive pricing. We have different pricing and plans
						choose from our services plans base on the competetive
						market,choose the one that fits in your needs and preferences.
						See our pricing section for more details.{" "}
					</p>
				</div>
				<div className="how__we__work">
					<h1>How we work</h1>
					{howWeWorkData.map((card, index) => (
						<HowWeWorkCard
							key={index}
							img={card.img}
							isReverse={card.isReverse}
							title={card.title}
							p={card.p}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default About;
