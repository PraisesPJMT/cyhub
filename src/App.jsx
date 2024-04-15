import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Terms from './pages/Terms';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';
import Disclosure from './pages/Disclosure';
import SendUs from './pages/SendUs';

/**
 * Represents the router configuration for the application.
 * @typedef {Object} RouterConfig
 * @property {string} path - The path at which the component should be rendered.
 * @property {JSX.Element} element - The JSX element to render at the specified path.
 */

/**
 * Creates a router using the specified configuration.
 * @param {RouterConfig[]} routes - An array of route configurations.
 * @returns {Router} The created router.
 */
const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/about',
		element: <About />,
	},
	{
		path: '/contact',
		element: <Contact />,
	},
	{
		path: '/tips',
		element: <SendUs />,
	},
	{
		path: '/disclosure',
		element: <Disclosure />,
	},
	{
		path: '/terms',
		element: <Terms />,
	},
	{
		path: '/privacy',
		element: <Privacy />,
	},
]);

export default router;
