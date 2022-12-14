import { createBrowserRouter } from 'react-router-dom';

// Layout import
import Layout from './Layout';

// Page imports
import Home from './pages/Home';
import Achievements from './pages/Achievements';
import Sponsors from './pages/Sponsors';
import ContactUs from './pages/ContactUs';
import Teams from './pages/Teams';

export const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
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
			{
				path: '/contact-us',
				element: <ContactUs />,
			},
			{
				path: '/teams',
				element: <Teams />,
			},
		],
	},
]);
