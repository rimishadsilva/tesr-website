import { createBrowserRouter } from 'react-router-dom';

// Layout import
import Layout from './Layout';

// Page imports
import Home from './pages/Home';
import Achievements from './pages/Achievements';
import Sponsors from './pages/Sponsors';
import ContactUs from './pages/ContactUs';
import { DisplayPhotos } from './pages/DisplayPhotos';

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
				path: '/gallery',
				element: <DisplayPhotos />,
			},
		],
	},
	{
		path: '/gallery',
		element: <DisplayPhotos />
	}
]);
