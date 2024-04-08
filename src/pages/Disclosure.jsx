import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

import '../styles/pages.css';

const Disclosure = () => {
	return (
		<>
			<Header />
			<main>
				<section className='main'>
					<div className='link'>
						<Link to='/'>Home</Link>
						<span>&#10149;</span>
						<Link to='/disclosure'>Disclosure</Link>
					</div>
					<h1>Coordinated Vulnerability Disclosure Guidelines</h1>
					<div className='content'>
						<p>
							All technologies contain security flaws; therefore, good-faith
							security research, including the right to remit and receive
							information and transparency, is in the public's best interest in
							these cases. With this in mind, we provide you with the following
							information that explains how CyHub handles vulnerability
							disclosure.
						</p>
						<p>
							We care a great deal for the safety of companies and their users
							that heavily rely on technologies containing vulnerabilities. Our
							goal is to make our contribution towards cyber threat prevention
							and to impede potential damage. For this reason, when we have
							information about a new vulnerability, we firstly make our best
							attempts to contact the responsible entity.
						</p>
						<p>
							If we can identify the company/owner of the technology containing
							the vulnerability, we contact them via email and give them at
							least a 30-day grace period to patch the vulnerability (unless a
							shorter period is satisfactory to them). We try to provide all the
							necessary information to help the company and, if requested, we
							give a grace period extension for especially difficult
							vulnerabilities, but no more than 120 days in total from the
							initial disclosure.
						</p>
						<p>
							If the company/owner is not responsive, we contact a local
							computer emergency response team (CERT) office whenever possible
							and ask for their help in contacting the company/owner and helping
							it to patch the vulnerability.
						</p>
						<p>
							We also contact CERT in cases where the company/owner is unknown
							to us and report that we have information about the vulnerability
							and the affected company/owner does not reply to us or is unknown.
						</p>
						<p>
							In any case, if we see that we would have to share some sensitive
							information, we suggest communication via encrypted channels.
						</p>
						<p>
							Usually we publish the story when the issue is fixed. In cases
							where vulnerabilities are not fixed, we still believe that it is
							in the public's best interest to know that technologies, which are
							vulnerable and prone to cyber attacks, are in use. Rest assured
							that before publishing the story we take all the precautionary
							measures to minimize any risks, including not publicizing any
							information that can lead bad actors to replicate or exploit the
							vulnerability, based solely on our research. When possible, we
							also inform the company/owner about our plans to publish the story
							and give them a chance to provide their take on the issue.
						</p>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Disclosure;
