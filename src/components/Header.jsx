import React, { useState } from 'react';
import '../styles/header.css';
import {
	FaBars,
	FaFacebook,
	FaGithub,
	FaLinkedin,
	FaX,
	FaXTwitter,
	FaYoutube,
} from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

/**
 * Header component containing menu, logo, navigation links, and social media links.
 *
 * @return {JSX.Element} The header JSX element
 */
const Header = () => {
	const [open, setOpen] = useState(false);

	const links = [
		{
			name: 'News',
			link: '/',
		},
		{
			name: 'About Us',
			link: '/about',
		},
		{
			name: 'Contact Us',
			link: '/contact',
		},
		{
			name: 'Send Us a Tip',
			link: '/tips',
		},
		{
			name: 'Privacy Policy',
			link: '/privacy',
		},
		{
			name: 'Terms & Conditions',
			link: '/terms',
		},
		{
			name: 'Vulnerability Disclosure',
			link: '/disclosure',
		},
	];

	return (
		<header>
			<button className='menu-btn' type='button' onClick={() => setOpen(!open)}>
				<FaBars />
				Menu
			</button>

			<Link to='/' className='logo' onClick={() => setOpen(false)}>
				<svg
					height='25'
					width='25'
					version='1.1'
					id='_x32_'
					viewBox='0 0 512 512'
					xml:space='preserve'
					xmlns='http://www.w3.org/2000/svg'
					xmlns:svg='http://www.w3.org/2000/svg'
				>
					<defs id='defs1' />
					<g id='g1'>
						<path
							class='st0'
							d='M 435.209,96.685 415.582,95.608 C 362.353,92.651 316.212,72.218 288.971,39.509 L 255.999,0 223.019,39.509 C 195.779,72.218 149.628,92.651 96.408,95.608 l -40.497,2.24 v 187.094 c 0,26.61 8.059,51.698 20.878,74.642 44.26,79.84 144.978,134.496 159.311,142.02 L 255.999,512 275.89,501.604 C 294.344,491.926 456.088,403.94 456.088,284.942 V 97.848 Z M 98.737,261.106 c 0,-46.326 0,-122.674 0,-122.674 64.333,-3.579 121.509,-28.578 157.263,-71.5 v 194.174 h 157.247 v 23.836 C 413.247,381.443 256,463.61 256,463.61 V 261.106 Z'
							id='path1'
							fill='#f9f9f9'
						/>
					</g>
				</svg>
				NDLEA-CyHub
			</Link>

			<div className={`menu-wrap ${open ? 'open' : ''}`}>
				<div className='menu'>
					<button
						className='close-menu'
						aria-label='close menu'
						type='button'
						onClick={() => setOpen(!open)}
					>
						<FaX />
					</button>
					<nav>
						{links.map((link) => (
							<NavLink
								key={link.name}
								to={link.link}
								onClick={() => setOpen(false)}
								className={({ isActive }) => (isActive ? 'active' : '')}
							>
								{link.name}
							</NavLink>
						))}
					</nav>

					<hr />

					<div className='head-footer'>
						<div className='socials'>
							<a href='https://www.linkedin.com/' target='_blank'>
								<FaLinkedin />
							</a>
							<a href='https://web.facebook.com/' target='_blank'>
								<FaFacebook />
							</a>
							<a href='https://twitter.com/' target='_blank'>
								<FaXTwitter />
							</a>
							<a href='https://github.com/' target='_blank'>
								<FaYoutube />
							</a>
							<a href='https://github.com/' target='_blank'>
								<FaGithub />
							</a>
						</div>

						<p>© 2024 CyHub – Desgined by Ocheje Esther Obiye.</p>
					</div>
				</div>
			</div>

			<div className='search'>
				<FaSearch />
			</div>
		</header>
	);
};

export default Header;
