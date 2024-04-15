import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

import '../styles/pages.css';
import {
	InputField,
	MessageField,
	SubmitButton,
} from '../components/FormComponents';

const initialState = {
	name: '',
	email: '',
	message: '',
};

/**
 * Renders the Contact component with form fields for name, email, and message.
 *
 * @param {Object} event - The event object triggering the function.
 */
const Contact = () => {
	const [contact, setContact] = useState(initialState);
	const [contactErr, setContactErr] = useState(initialState);
	const [init, setInit] = useState(false);

	const handleChange = (event) => {
		setContactErr(initialState);
		const { name, value } = event.target;
		setContact((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (
			contact.name.length > 0 &&
			contact.email.length > 0 &&
			contact.message.length > 0
		) {
			setInit(true);
			setContact(initialState);
			setContactErr(initialState);
		}
	};

	const handleReset = () => {
		setInit(false);
		setContact(initialState);
		setContactErr(initialState);
	};

	return (
		<>
			<Header />
			<main>
				<section className='main'>
					<div className='link'>
						<Link to='/'>Home</Link>
						<span>&#10149;</span>
						<Link to='/about'>Contact Us</Link>
					</div>
					<h1>Contact Us</h1>
					<section className='content'>
						<p>
							This secure portal is designed to foster open communication
							between NDLEA personnel and the portal team. Your input is crucial
							in ensuring the portal remains relevant and addresses your
							specific cybersecurity needs.
						</p>
						<p>
							Utilize the secure contact form below to submit any questions,
							comments, or suggestions you may have regarding the portal's
							content or functionality. If you suspect a security breach or
							identify a potential vulnerability within the NDLEA network,
							please report it immediately through the designated internal
							channels established by the agency's IT department.
						</p>
						<p>
							We are committed to responding to all inquiries in a timely and
							professional manner. Please note that due to security protocols,
							responses may require additional verification steps to ensure the
							legitimacy of the sender.
						</p>
					</section>
					<section className='content'>
						{init ? (
							<div className='thanks'>
								<p>
									Thank you for reaching out to us. Our team will review your
									message and reach you within 48 hours.
								</p>

								<button type='button' className='submit' onClick={handleReset}>
									Send Another Message
								</button>
							</div>
						) : (
							<form onSubmit={handleSubmit}>
								<div className='field-row'>
									<div className='field-col full'>
										<InputField
											name='name'
											label='Name'
											// required={true}
											value={contact.name}
											error={contactErr.name}
											handleChange={handleChange}
										/>
										<InputField
											type='email'
											label='Email'
											name='email'
											// required={true}
											value={contact.email}
											error={contactErr.email}
											handleChange={handleChange}
										/>
									</div>
									<div className='field-col full high'>
										<MessageField
											name='message'
											label='Message'
											// required={true}
											value={contact.message}
											error={contactErr.message}
											handleChange={handleChange}
										/>
									</div>
								</div>
								<SubmitButton label='Send' />
							</form>
						)}
					</section>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Contact;
