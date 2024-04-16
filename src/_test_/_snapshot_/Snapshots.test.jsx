import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { render } from '../../utils/test-utils';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import SendUs from '../../pages/SendUs';
import Privacy from '../../pages/Privacy';
import Disclosure from '../../pages/Disclosure';
import Terms from '../../pages/Terms';

describe('Home Page:', () => {
	it('Should match snapshot', () => {
		const homePage = render(<Home />, { wrapper: BrowserRouter });
		expect(homePage).toMatchSnapshot();
	});
});

describe('About Page:', () => {
	it('Should match snapshot', () => {
		const aboutPage = render(<About />, { wrapper: BrowserRouter });
		expect(aboutPage).toMatchSnapshot();
	});
});

describe('Contact Page:', () => {
	it('Should match snapshot', () => {
		const contactPage = render(<Contact />, { wrapper: BrowserRouter });
		expect(contactPage).toMatchSnapshot();
	});
});

describe('Send Tps Page:', () => {
	it('Should match snapshot', () => {
		const tipsPage = render(<SendUs />, { wrapper: BrowserRouter });
		expect(tipsPage).toMatchSnapshot();
	});
});

describe('Privacy Page:', () => {
	it('Should match snapshot', () => {
		const privacyPage = render(<Privacy />, { wrapper: BrowserRouter });
		expect(privacyPage).toMatchSnapshot();
	});
});

describe('Disclosure Page:', () => {
	it('Should match snapshot', () => {
		const disclosurePage = render(<Disclosure />, { wrapper: BrowserRouter });
		expect(disclosurePage).toMatchSnapshot();
	});
});

describe('Terms Page:', () => {
	it('Should match snapshot', () => {
		const termsPage = render(<Terms />, { wrapper: BrowserRouter });
		expect(termsPage).toMatchSnapshot();
	});
});
