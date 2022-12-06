import { createBrowserRouter } from 'react-router-dom';

// Page imports
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/contact-us',
		element: <ContactUs />,
	}
]);
