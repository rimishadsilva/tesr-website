import Section3Image from '../../images/home-section3.png';

const Section3 = () => {
	return (
		<div className='flex flex-col md:flex-row justify-between items-center py-10 gap-10 mb-20'>
			<img src={Section3Image} alt='tesr' className='md:w-2/5 sm:w-1/2' />
			<div className='md:w-3/5 sm:w-1/2'>
				<div className='md:text-5xl text-4xl font-bold pb-8'>
					Electric All Terrain Vehicle
				</div>
				<div className='text-gray-200 text-xl'>
					Mother nature being the perfect engineer of all biological life forms
					, the vehicle has been built deriving immense inspiration from the
					qualities of a reptile. Like the Turtle, Our Car is built in such a
					way that it can adapt to any terrain. Both the reptile and our car
					have an exoskeleton which is hard and Endures almost anything. Both
					are Fast and Tough.
				</div>
			</div>
		</div>
	);
};

export default Section3;
