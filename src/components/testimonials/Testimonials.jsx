import React from "react";
import "./testimonials.css";
import christina from "../../assets/christina.svg";
import emily from "../../assets/emily.svg";
import mars from "../../assets/mars.svg";
import patel from "../../assets/patel.svg";

const testimonialCardData = [
	{
		img: christina,
		p: "     I was once worrying about my bussiness to slowly losing it’s revenue. But when we enga-ged  partnership with Ipsum tech solutions everything has change we doubled our buss-inesses revenue so the results speak for themselves.I’m so amaze .Ipsum tech solutions make it easy definitely worth the money",
		h4: "Zoey",
		h6: "-Entrepreneur",
	},
	{
		img: mars,
		p: " I am losing hope for my small bussiness my customers are slowly fading away.But a friend of mine introduce Ipsum tech solutions  my life has change my customers are getting back and drasticaly grow my sale,amzing how is this happend.I’m so thankfull that i found this company",
		h4: "  Zack",
		h6: "-Bussinessman",
	},
	{
		img: patel,
		p: " I was trying to something unique,something different product that will actually sell out but I’m having a hard time doing so , but thankfully I found this team of professionals.They help me to build my new bussiness ideas that will standout among competetors and eventually generate more revenue.",
		h4: "Mr Wong",
		h6: "-Ceo",
	},
	{
		img: emily,
		p: "   This team helps me grow my fashion clothing shop to manage something that I can’t handle myself they deliver exactly what i need they higher my expectation . I can’t thank them enought they change my life my shop my personality and my way of living",
		h4: "Emily",
		h6: "-Fashion Designer ,Shop owner",
	},
];

const TestimonialCard = (props) => {
	const cardRef = React.useRef();
	console.log(props.i === "0");

	React.useEffect(() => {
		let subscribe = true;

		if (subscribe) {
			if ((props.i + 1) % 2) {
				return (cardRef.current.style.left = "10%");
			}
		}

		// if (props.i === 0) {
		// 	return (cardRef.current.style.transform = "translateY(200%)");
		// }

		// if (props.i === 1) {
		// 	return (cardRef.current.style.transform = "translateY(100%)");
		// }

		// if (props.i === 2) {
		// 	return (cardRef.current.style.transform = "translateY(90%)");
		// }

		// if (props.i === 3) {
		// 	return (cardRef.current.style.transform = "translateY(200%)");
		// }

		// if (props.length === '0') {
		// 	return (cardRef.current.style.transform = "translateY(50%)");
		// }

		return () => (subscribe = false);
	}, [cardRef]);

	return (
		<div
			// style={{
			// 	transform: "translateY(100%)",
			// }}
			ref={cardRef}
			onClick={() => {
				if (props.i === 2) console.log("a");
			}}
			className="testimonialCard"
		>
			<img className="testimonial__img" src={props.img} alt="" />
			<p>{props.p}</p>
			<h4>{props.h4}</h4>
			<h6>-{props.h6}</h6>
		</div>
	);
};

const Testimonials = () => {
	return (
		<div id="testimonials">
			<div className="testimonials">
				{testimonialCardData.map((card, index) => (
					<TestimonialCard
						key={index}
						img={card.img}
						p={card.p}
						h4={card.h4}
						h6={card.h6}
						i={index}
					/>
				))}
			</div>
		</div>
	);
};

export default Testimonials;
