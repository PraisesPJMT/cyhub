import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

import '../styles/pages.css';

const Terms = () => {
	return (
		<>
			<Header />
			<main>
				<section className='main'>
					<div className='link'>
						<Link to='/'>Home</Link>
						<span>&#10149;</span>
						<Link to='/terms'>Terms & Conditions</Link>
					</div>
					<h1>Terms & Conditions</h1>
					<section className='content'>
						<h2>Use of material appearing on CyHub website</h2>
						<p>
							Our ability to invest in high quality cyber security research and
							journalism depends on our users complying with copyright laws.
							Copyright laws give the copyright owner the exclusive right to
							control the use of copyright protected works. All of the material
							published on our website is protected by copyright law. Use that
							is made without our permission may therefore infringe our
							copyright which can result in personal and corporate liability.
						</p>
						<p>
							By browsing CyHub webpage you acknowledge that, as between
							CyHub and you, except for user content, user comments and
							advertising/sponsorship materials (as discussed below), CyHub
							is the sole owner of all content on the CyHub website,
							including, without limitation, all applicable copyrights, patents,
							trademarks, trade secrets, trade names, logos, and other
							intellectual property rights thereto, as well as text, images,
							graphics, logos, audio, video and other material appearing on the
							CyHub website.
						</p>
						<p>
							CyHub logo is a protected trademark, owned by CyHub and
							you are forbidden from registration, adoption or any other use of
							trade names, symbols or signs that are either identical or
							confusingly similar to any trademarks owned by CyHub.
						</p>
						<p>
							We recognise that users of the Internet want to share information
							with others; thus, as long as you do not create a substitute, you
							may publish online the original CyHub headline and a link to
							the article indicating CyHub as the original source. You may
							also share our content via Facebook, Twitter and other social
							media buttons available on our website.
						</p>
						<p>
							Except as expressly authorised by CyHub, you are not allowed
							to create a database in electronic or paper form comprising all or
							part of the material appearing on the CyHub website.
						</p>
						<p>
							For all inquiries about distribution or reproduction of the
							materials, please get in touch with us via our{' '}
							<Link to='/contact'>Contact form</Link>.
						</p>
					</section>
					<section className='content'>
						<h2>User content</h2>
						<p>
							You can also send us a story for publication on CyHub. When
							you submit a story to us, you agree and represent that you have
							created this content, or you have received permission from, or are
							authorised by, the owner of any part of the content to submit it
							to us. You or the owner of the content still own the copyright in
							the content sent to us, but by submitting content to us, you are
							granting us an unconditional, irrevocable, non-exclusive, fully
							transferable, perpetual, worldwide licence to use, publish or
							transmit, modify, make derivative works, or to authorise
							third-parties to use, publish or transmit your content in any
							format and on any platform. You further acknowledge and agree that
							the views expressed by you and other users in this content do not
							necessarily reflect the views of CyHub, and we do not support
							or endorse any user content. We reserve the right to refuse to
							publish, cut, crop or edit your content at our sole discretion. We
							may remove your content from use at any time. You warrant that the
							content you submit to us is not fraudulent, misleading,
							disrespectful or otherwise illegal. You warrant that the content
							you submit to us does not infringe any patent, trademark, trade
							secret, copyright, or other intellectual or proprietary or privacy
							right of any party or individual and acknowledge the liability for
							infringement of such warranty.
						</p>
						<p>
							If you have any questions regarding user content, please reach us
							via our <Link to='/tips'>Send Us a Tip</Link> or{' '}
							<Link to='/contact'>Contact forms</Link>.
						</p>
					</section>
					<section className='content'>
						<h2>Sources protection</h2>
						<p>
							By submitting a message in our{' '}
							<Link to='/tips'>Send Us a Tip form</Link>, you can send us a
							story or a tip that you think CyHub should cover. We do
							respect the privacy and anonymity of our sources, unless a state
							agency lawfully requires disclosure and we have exploited all the
							possible remedies at our disposal.
						</p>
					</section>
					<section className='content'>
						<h2>Disclaimer of liability</h2>
						<p>
							At CyHub we strive for thorough and ethical research. However,
							to the extent permitted by law, we do not accept any
							responsibility for any statement in the CyHub content. If you
							believe that an actual factual error has been made, please get in
							touch with us via our <Link to='/contact'>Contact form</Link>.
							This way we could sort out the issue together and either correct
							or confirm the facts.
						</p>
						<p>
							CyHub accepts no liability in respect of any content submitted
							by users and published by us or by authorised third-parties.
						</p>
						<p>
							CyHub is only for your general information and entertainment
							purposes and is not intended to address any particular
							requirements. For the avoidance of doubt, we are not liable for
							any loss caused as a result of your doing, or not doing, anything
							as a result of viewing, reading or listening to CyHub content
							or any part of it.
						</p>
						<p>
							Our website may contain links to and from other websites. These
							websites have their own privacy notices and/or terms of service.
							We do not accept any responsibility or liability for these other
							websites.
						</p>
						<p>
							We give no warranties of any kind concerning our website or
							content. We accept no responsibility or liability for any
							interruption or delay in the access of our website.
						</p>
						<p>
							We believe this is fair on the basis that you can view our content
							and services free-of-charge.
						</p>
					</section>
					<section className='content'>
						<h2>Indemnification</h2>
						<p>
							You agree to defend, indemnify, and hold harmless CyHub, its
							parents, subsidiaries, and affiliates, and each of their
							respective officers, directors, and employees from any and all
							claims, liabilities, costs, and expenses, including, but not
							limited to, attorneys’ fees and expenses, arising out of a breach
							of these terms and conditions or privacy policy or arising out of
							a breach of your obligations, representation and warranties under
							these terms and conditions.
						</p>
					</section>
					<section className='content'>
						<h2>Data protection</h2>
						<p>
							Please read our <Link to='/privacy'>Privacy Policy</Link> or
							Privacy Policy for Job Applicants to find out how CyHub deals
							with personal data processing.
						</p>
					</section>
					<section className='content'>
						<h2>Governing law and jurisdiction</h2>
						<p>
							These terms and conditions are governed by the laws of the Federal
							Republic of Nigeria and the parties agree to submit to the
							exclusive jurisdiction of the courts of the Federal Republic of
							Nigeria.
						</p>
					</section>
					<section className='content'>
						<h2>General</h2>
						<p>
							You may not license or transfer any of your rights under these
							terms and conditions.
						</p>
						<p>
							Our failure to insist upon or enforce any provision of these terms
							and conditions shall not be construed as a waiver of any provision
							or right of CyHub.
						</p>
						<p>
							If any provision of these terms and conditions is found to be
							invalid by any court having competent jurisdiction, the invalidity
							of that provision will not affect the validity of the remaining
							provisions of these terms and conditions, which will remain in
							full force and effect.
						</p>
						<p>
							We may update our Terms & Conditions from time to time. This may
							be in relation to changes in the law, best practice or changes in
							our services. Any changes will become effective when we post the
							revised document; thus, you should check here regularly.
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

export default Terms;
