import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

import '../styles/pages.css';

const About = () => {
	return (
		<>
			<Header />
			<main>
				<section className='main'>
					<div className='link'>
						<Link to='/'>Home</Link>
						<span>&#10149;</span>
						<Link to='/about'>About Us</Link>
					</div>
					<h1>About Us</h1>
					<section className='content'>
						<p>
							This secure news portal is designed and developed specifically for
							the National Drug Law Enforcement Agency (NDLEA). It serves as a
							centralized hub for cybersecurity news and information, keeping
							the agency informed about the latest threats and vulnerabilities
							in the digital landscape.
						</p>
					</section>
					<section className='content'>
						<h2>Our Mission</h2>
						<ul>
							<li>
								To empower the NDLEA with the knowledge and resources needed to
								navigate the ever-evolving cybersecurity landscape.
							</li>
							<li>
								To provide timely and insightful news, analysis, and best
								practices to enhance the agency's ability to protect its
								operations and data.
							</li>
						</ul>
					</section>
					<section className='content'>
						<h2>Our Team</h2>
						<p>
							This portal is maintained by a dedicated team of security
							professionals with expertise in:
						</p>
						<ul>
							<li>Curating and analyzing relevant cybersecurity news.</li>
							<li>
								Presenting complex information in a clear and concise format for
								easy consumption.
							</li>
							<li>Staying current on emerging threats and attack vectors.</li>
						</ul>
					</section>
					<section className='content'>
						<h2>Our Commitment</h2>
						<p>
							We are committed to providing the NDLEA with reliable and accurate
							information to support informed decision-making when it comes to
							cybersecurity. This portal operates with the highest security
							standards to ensure the confidentiality and integrity of all data.
						</p>
					</section>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default About;
