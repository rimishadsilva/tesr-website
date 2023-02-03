import Section1 from '../components/sponsors/Section1';
import Section2 from '../components/sponsors/Section2';
import Section3 from '../components/sponsors/Section3';

const Sponsors = () => {
	return (
		<div className='container mx-auto px-10 pb-20'>
			<h1 className='text-6xl text-center py-10'  style={{ fontFamily: 'Audiowide'}}>Sponsors</h1>
			<Section1 />
			<Section2 />
			<Section3 />
		</div>
	);
};

export default Sponsors;
