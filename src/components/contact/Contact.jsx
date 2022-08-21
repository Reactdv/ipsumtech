import React from "react";
import "./contact.css";
import message from "../../assets/message.svg";

const Contact = () => {
	const formRef = React.useRef();

	const [contactForm, setContactForm] = React.useState({
		name: "",
		email: "",
		message: "",
	});

	// console.log(contactForm);
	React.useEffect(() => {
		const checkIfHoveredOutside = (e) => {
			if (formRef.current && !formRef.current.contains(e.target)) {
				formRef.current.style.transform = "rotateY(0)";
			}
		};
		document.addEventListener("mousemove", checkIfHoveredOutside);

		return () =>
			// Cleanup the event listener
			document.removeEventListener("mousemove", checkIfHoveredOutside);
	}, [formRef]);

	const formHover = (e) => {
		// console.log((e.nativeEvent.offsetX * 0.75) / 2);
		console.log(formRef.current.clientWidth / 14);

		if (
			(e.nativeEvent.offsetX * 0.75) / 2 <=
			formRef.current.clientWidth / 17
		) {
			return (formRef.current.style.transform = `rotateY(-${
				(e.nativeEvent.offsetX * 0.75) / 2
			}deg)`);
		}
		if (contactForm != "") {
			return (formRef.current.style.transform = "rotateY(0deg)");
		}
	};

	return (
		<div id="contact" className="section__height">
			<h1>have a bussiness idea? let's talk about it</h1>
			<div className="contact">
				<form
					ref={formRef}
					onMouseMove={formHover}
					// onMouseMove={(e) =>
					// 	console.log((e.nativeEvent.offsetX * 0.75) / 2)
					// }
					onSubmit={() => {}}
				>
					<span>
						<input
							value={contactForm.name}
							onChange={(e) =>
								setContactForm({
									...contactForm,
									name: e.target.value,
								})
							}
							placeholder="name"
							type="text"
						/>
					</span>
					<span>
						<input
							value={contactForm.email}
							onChange={(e) =>
								setContactForm({
									...contactForm,
									email: e.target.value,
								})
							}
							placeholder="email"
							type="email"
						/>
					</span>
					<span>
						<input
						className="msg__input"
							placeholder="message"
							type="text"
							value={contactForm.message}
							onChange={(e) =>
								setContactForm({
									...contactForm,
									message: e.target.value,
								})
							}
						/>
					</span>
					<button className="contactForm__btn">Submit</button>
				</form>
				<img className="message" src={message} alt="message" />
			</div>
		</div>
	);
};

export default Contact;
