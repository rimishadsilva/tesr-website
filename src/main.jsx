import { createBrowserRouter } from 'react-router-dom';

// Page imports
import Home from './pages/Home';
import Achievements from './pages/Achievements';
import Sponsors from './pages/Sponsors';
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Gallery';

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
  	{
		path: '/contact-us',
		element: <ContactUs />,
	},
	{
		path: '/gallery',
		element: <Gallery />
	}
]);
