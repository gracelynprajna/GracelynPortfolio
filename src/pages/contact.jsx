import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import "./styles/contact.css";

const Contact = () => {

	return (

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's stay in touch!
						</div>

						<div className="subtitle contact-subtitle">
							Thank you for your interest in me. I would appreciate any feedback, questions, or
							suggestions. If you would like to message me, please feel free to email me directly at gracelynprajna@gmail.com.
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
	);
};

export default Contact;
