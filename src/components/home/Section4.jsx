import Section4Image from '../../images/home-section4.jpg';

const Section4 = () => {
	return (
		<div className='container mx-auto px-10  flex flex-col md:flex-row justify-between items-center py-10 gap-20 mb-20'>
			<div className='md:w-3/5 sm:w-1/2'>
				<div className='md:text-5xl text-4xl pb-8'>Promote E - Mobility</div>
				<div className='text-gray-200 text-lg'>
					We all know that the world is moving towards a greener eco friendly
					electrical approach, even this team has taken a step to participate in
					a electrical competition so that we gain knowledge in the development
					of this electrical ATV and are able to give out this knowledge for the
					betterment of this planet.
				</div>
			</div>
			<img src={Section4Image} alt='tesr' className='md:w-2/5 sm:w-1/2' />
		</div>
	);
};

export default Section4;
