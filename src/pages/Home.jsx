import Section1 from '../components/home/Section1';
import Section2 from '../components/home/Section2';
import Section3 from '../components/home/Section3';
import Section4 from '../components/home/Section4';

const Home = () => {
	return (
		<div className='container mx-auto px-10'>
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
		</div>
	);
};

export default Home;
