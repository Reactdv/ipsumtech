import "./App.css";
import {
	About,
	Home,
	Contact,
	Nav,
	Services,
	Testimonials,
} from "./components";

function App() {
	return (
		<div>
			<Nav />
			<Home />
			<About />
			<Services />
			<Testimonials />
			<Contact />
		</div>
	);
}

export default App;
