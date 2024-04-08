import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

import '../styles/pages.css';

const Privacy = () => {
	return (
		<>
			<Header />
			<main>
				<section className='main'>
					<div className='link'>
						<Link to='/'>Home</Link>
						<span>&#10149;</span>
						<Link to='/disclosure'>Privacy Policy</Link>
					</div>
					<h1>Privacy Policy</h1>
					<section className='content'>
						<p>
							By visiting and interacting with our website, you are deemed to
							have accepted to be bound by our Privacy Policy.
						</p>
						<p>
							If you have any questions or comments regarding this Policy,
							please reach out to us via our{' '}
							<Link to='/contact'>Contact form</Link>.
						</p>
					</section>
					<section className='content'>
						<h2>Contact, Send Us a Tip or Leave a Reply forms</h2>
						<p>
							If you use our <Link to='/contact'>Contact</Link>, Send Us a Tip
							or Leave a Reply forms, we will process the name and email address
							you have provided. We would process these pieces of data based on
							our legitimate interest to get in touch with you and/or based on
							some other lawful grounds, when applicable. When you make a
							comment on our stories we process your IP address as well. We do
							that based on our legitimate interest to make sure that a comment
							comes from a legitimate visitor.
						</p>
					</section>
					<section className='content'>
						<h2>Newsletter option</h2>
						<p>
							If you choose to use our Newsletter option, we may process your
							email address so that you can receive our weekly updates directly
							to your inbox. We would do that based on the consent you expressed
							by subscribing to our newsletter. You can withdraw your consent
							via our <Link to='/contact'>Contact form</Link> or the unsubscribe
							button at the bottom of our emails.
						</p>
					</section>
					<section className='content'>
						<h2>Your data protection and privacy rights</h2>
						<p>You have certain data protection and privacy rights.</p>
						<p>
							You have the right to know what kind of your personal data we
							process, ask us to update, delete or stop processing information
							we hold about you. However, please note that there could be
							circumstances in which complete erasure of your information or
							ceasing to process your information would not be possible due to
							operational, legal and business reasons. Where you have provided
							us with consent to use your personal data, you can withdraw this
							at any time. You may also have the right to ask us to send you the
							data we hold about you.
						</p>
						<p>
							If you wish to make a request with regards to your data protection
							rights, please get in touch with us via our{' '}
							<Link to='/contact'>Contact form</Link>. You may have a right to
							contact your local data protection authority as well. However, we
							would ask you to reach out to us first, since we believe that
							together we could solve any issues.
						</p>
					</section>
					<section className='content'>
						<h2>Keeping your data safe</h2>
						<p>
							We take information security seriously and put a great effort to
							ensure the information we hold on you remains safe. We limit who
							has access to your information and ensure that those who do are
							bound by contracts to keep your information availability
							restricted and safe.
						</p>
						<p>
							Unfortunately, the transmission of information via the Internet is
							not completely secure. And even though we will do our best to
							protect your personal data, we cannot guarantee the security of
							your data transmitted through any online means; therefore, any
							transmission remains at your own risk.
						</p>
					</section>
					<section className='content'>
						<h2>External links</h2>
						<p>
							Our website may contain links to and from other websites. These
							websites have their own privacy notices and/or terms of service.
							We do not accept any responsibility or liability for these other
							websites. Please make sure to check the above mentioned documents
							before submitting any personal data to these websites.
						</p>
					</section>
					<section className='content'>
						<h2>Individuals under age of 16</h2>
						<p>
							We do not intentionally, or knowingly, process personal
							information from individuals under the age of 16. We will make
							every effort to delete any details of such individuals where we
							are informed that these details have been collected.
						</p>
					</section>
					<section className='content'>
						<h2>Other terms</h2>
						<p>
							The governing laws shall be the laws of the Federal Republic of
							Nigeria.
						</p>
						<p>
							We may update this Privacy Policy from time to time. This may be
							in relation to changes in the law, best practice or changes in our
							services. Any changes will become effective when we post the
							revised Privacy Policy; thus, you should check here regularly.
						</p>
						<p>
							<em>Last update: 2024 04 10</em>
						</p>
					</section>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Privacy;
