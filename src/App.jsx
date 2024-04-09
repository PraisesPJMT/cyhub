import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Disclosure from './pages/Disclosure';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import About from './pages/About';

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
