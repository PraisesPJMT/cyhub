import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Disclosure from './pages/Disclosure';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/disclosure',
		element: <Disclosure />,
	},
]);

export default router;
