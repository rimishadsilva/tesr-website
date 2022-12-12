import { Outlet } from 'react-router-dom';

// Header and footer
import Footer from './components/Footer';
import Header from './components/Header';

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
