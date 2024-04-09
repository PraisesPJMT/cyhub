import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Terms from './pages/Terms';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';
import Disclosure from './pages/Disclosure';

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
