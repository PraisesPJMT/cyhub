import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

import '../styles/pages.css';
import { InputField, MessageField } from '../components/FormComponents';

const initialState = {
	name: '',
	email: '',
	subject: '',
	message: '',
};

const SendUs = () => {
	const [tip, setTip] = useState(initialState);
	const [tipErr, setTipErr] = useState(initialState);
	const [init, setInit] = useState(false);

	const handleChange = (event) => {
		setTipErr(initialState);
		const { name, value } = event.target;
		setTipErr((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};
	return (
		<>
			<Header />
			<main>
				<section className='main'>
					<div className='link'>
						<Link to='/'>Home</Link>
						<span>&#10149;</span>
						<Link to='/tips'>Send Us a Tip</Link>
					</div>
					<h1>Send Us a Tip</h1>
					<section className='content'>
						<p>
							This secure portal is designed to foster open communication
							between NDLEA personnel and the portal team. Your input is crucial
							in ensuring the portal remains relevant and addresses your
							specific cybersecurity needs.
						</p>
						<p>
							<ul>
								<li>
									Utilize the secure contact form below to submit any questions,
									comments, or suggestions you may have regarding the portal's
									content or functionality.
								</li>
								<li>
									If you suspect a security breach or identify a potential
									vulnerability within the NDLEA network, please report it
									immediately through the designated internal channels
									established by the agency's IT department.
								</li>
							</ul>
						</p>
						<p>
							We are committed to responding to all inquiries in a timely and
							professional manner. Please note that due to security protocols,
							responses may require additional verification steps to ensure the
							legitimacy of the sender.
						</p>
					</section>
					<section className='content'>
						<form onSubmit={handleSubmit}>
							<div className='field-row'>
								<div className='field-col full'>
									<InputField
										name='name'
										label='Name'
										value={tip.name}
										error={tipErr.name}
										handleChange={handleChange}
									/>

									<InputField
										type='email'
										label='Email'
										name='email'
										value={tip.email}
										error={tipErr.email}
										handleChange={handleChange}
									/>

									<InputField
										name='subject'
										label='Subject'
										value={tip.subject}
										error={tipErr.subject}
										handleChange={handleChange}
									/>
								</div>
								<div className='field-col full high'>
									<MessageField
										name='message'
										label='Message'
										value={tip.message}
										error={tipErr.message}
										handleChange={handleChange}
									/>
								</div>
							</div>
						</form>
					</section>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default SendUs;
