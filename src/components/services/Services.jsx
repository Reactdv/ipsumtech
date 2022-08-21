import React from "react";
import "./services.css";

const ServicesCard = (props) => {
	return (
		<div
			style={{
				backgroundColor: props.isPremium ? " #8517dc" : null,
			}}
			className="services__card"
		>
			<h1
				style={{
					color: props.isPremium ? "white" : " #8517dc",
				}}
			>
				{props.title}
			</h1>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-start",
					alignItems: "flex-start",
					gap: "0.7rem",
					color: props.isPremium ? "white" : "black",
				}}
			>
				<p>{props.p1}</p>
				<p>{props.p2}</p>
				<p>{props.p3}</p>
				<p>{props.p4}</p>
				<p>{props.p5}</p>
				<p>{props.p6}</p>
				<p>{props.p7}</p>
				<p>{props.p8}</p>
				<p>{props.p9}</p>
				<p>{props.p10}</p>
				<p>{props.p11}</p>
				<p>{props.p12}</p>
			</div>
		</div>
	);
};

const Services = () => {
	return (
		<div id="services" className="section__height">
			<h1 className="our__services">Our Services</h1>
			<div className="services">
				<ServicesCard
					title="Basic"
					p1="1 page"
					p2="1 Landing Page"
					p3="UI/UX Design "
					p4="Database Management"
					isPremium={false}
				/>
				<ServicesCard
					title="Premium"
					p1="Unlimited Pages"
					p2="Unlimited Landing Page"
					p3="UI/UX Design "
					p4="Database Management"
					p5="Monthly Maintainance"
					p6="Technical Services"
					p7="Content Creation"
					p8="Search Engine Optimazation"
					p9="Bussiness Suggestions(Case Study)"
					p10="Fully Functional Web & Mobile Applications"
					p11="Content Revison"
					p12="Trademark/Logo/Brand/Identity Design"
					isPremium={true}
				/>
				<ServicesCard
					title="Standard"
					p1="1 page"
					p2="1 Landing Page"
					p3="UI/UX Design "
					p4="Database Management"
					p5="Monthly Maintainance"
					p6="Technical Services"
					isPremium={false}
				/>
			</div>
		</div>
	);
};

export default Services;
