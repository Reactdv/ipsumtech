import React from "react";
import "./about.css";
import searching from "../../assets/searching.svg";

const HowWeWorkCard = (props) => {
	const ref = React.useRef();

	React.useEffect(() => {
		const checkIfHoveredOutside = (e) => {
			if (ref.current && !ref.current.contains(e.target)) {
				ref.current.style.transform = "rotateY(0)";
			}
		};
		document.addEventListener("mousemove", checkIfHoveredOutside);

		return () =>
			// Cleanup the event listener
			document.removeEventListener("mousemove", checkIfHoveredOutside);
	}, [ref]);

	const transform = (e) => {
		if (e.nativeEvent.offsetX <= ref.current.clientWidth / 2) {
			ref.current.style.transform = "rotateY(-25deg)";
		} else {
			ref.current.style.transform = "rotateY(25deg)";
		}
	};
	return (
		<div
			style={{
				flexDirection: props.isReverse ? "row-reverse" : "row",
			}}
			className="how__we__work__card__container "
		>
			<div
				ref={ref}
				// onMouseMove={(e) => console.log(ref.current.clientWidth)}
				onMouseMove={transform}
				// onMouseMove={(e) => console.log(e.nativeEvent.offsetX)}
				className="how__we__work__card"
			>
				<h2>{props.title} </h2>
				<p>{props.p}</p>
			</div>
			<img className="searching" src={props.img} alt="" />
		</div>
	);
};

export default HowWeWorkCard;
