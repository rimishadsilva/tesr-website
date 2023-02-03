import Section3Image from '../../images/home-section3.png';

const Section3 = () => {
	return (
		<div className='container mx-auto px-10 flex flex-col md:flex-row justify-between items-center py-10 gap-10 mb-20'>
			<img src={Section3Image} alt='tesr' className='md:w-2/5 sm:w-1/2' />
			<div className='md:w-3/5 sm:w-1/2'>
				<div className='md:text-5xl text-4xl pb-8'  style={{ fontFamily: 'Audiowide'}}>
					Electric All Terrain Vehicle
				</div>
				<div className='text-gray-200 text-lg'>
					BAJA SAE INDIA is a student level competition that has its roots
					outside India. The goal of each team is to design and build a
					prototype of a rugged single seat, off-road four-wheel vehicle that
					has to go through multiple tests and then compete in the endurance
					race. We as a part of SAE INDIA build an Electric All Terrain Vehicle.
				</div>
			</div>
		</div>
	);
};

export default Section3;
