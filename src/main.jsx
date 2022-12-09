import { createBrowserRouter } from 'react-router-dom';

// Page imports
import Home from './pages/Home';
import Achievements from './pages/Achievements';
import Sponsors from './pages/Sponsors';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/achievements',
		element: <Achievements />,
	},
	{
		path: '/sponsors',
		element: <Sponsors />,
	},
]);
