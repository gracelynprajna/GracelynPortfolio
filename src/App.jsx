import { Routes, Route } from "react-router-dom";
// import Homepage from "./pages/homepage";
// import Projects from "./pages/projects";
// import Contact from "./pages/contact";
import Homepage from "./pages/homepage.jsx";
import Projects from "./pages/projects.jsx";
import Contact from "./pages/contact.jsx";


import "./App.css";

function App() {

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
