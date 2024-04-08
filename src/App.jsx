import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Disclosure from './pages/Disclosure';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
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
