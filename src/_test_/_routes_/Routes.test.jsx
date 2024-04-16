import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { render, screen, userEvent } from '../../utils/test-utils';
import Home from '../../pages/Home';

describe('Home Link:', () => {
	it('Link should redirect to home page', () => {
		render(<Home />, { wrapper: BrowserRouter });

		const homeLink = screen.getByLabelText('News');
		userEvent.click(homeLink);
		expect(homeLink).toBeInTheDocument();
	});
});

describe('About Us Link:', () => {
	it('Link should redirect to about page', () => {
		render(<Home />, { wrapper: BrowserRouter });

		const headerAboutUsLink = screen.getAllByText('About Us')[0];
		userEvent.click(headerAboutUsLink);
		expect(headerAboutUsLink).toBeInTheDocument();
	});
});

describe('Contact Us Link:', () => {
	it('Link should redirect to contact page', () => {
		render(<Home />, { wrapper: BrowserRouter });

		const headerContactUsLink = screen.getAllByText('Contact Us')[0];
		userEvent.click(headerContactUsLink);
		expect(headerContactUsLink).toBeInTheDocument();
	});
});

describe('Send Tips Link:', () => {
	it('Link should redirect to tip page', () => {
		render(<Home />, { wrapper: BrowserRouter });

		const headerSendTipsLink = screen.getAllByText('Send Us a Tip')[0];
		userEvent.click(headerSendTipsLink);
		expect(headerSendTipsLink).toBeInTheDocument();
	});
});

describe('Policy Link:', () => {
	it('Link should redirect to policy page', () => {
		render(<Home />, { wrapper: BrowserRouter });

		const headerPolicyLink = screen.getAllByText('Privacy Policy')[0];
		userEvent.click(headerPolicyLink);
		expect(headerPolicyLink).toBeInTheDocument();
	});
});

describe('Terms Link:', () => {
	it('Link should redirect to terms page', () => {
		render(<Home />, { wrapper: BrowserRouter });

		const headerTermsLink = screen.getAllByText('Terms & Conditions')[0];
		userEvent.click(headerTermsLink);
		expect(headerTermsLink).toBeInTheDocument();
	});
});

describe('Disclosure Link:', () => {
	it('Link should redirect to Disclosure page', () => {
		render(<Home />, { wrapper: BrowserRouter });

		const headerDisclosureLink = screen.getAllByText(
			'Vulnerability Disclosure'
		)[0];
		userEvent.click(headerDisclosureLink);
		expect(headerDisclosureLink).toBeInTheDocument();
	});
});
