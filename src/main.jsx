import { createBrowserRouter } from 'react-router-dom';

// Page imports
import Home from './pages/Home';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
]);
