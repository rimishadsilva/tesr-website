import Section3Image from '../../images/home-section3.png';

const Section3 = () => {
	return (
		<div className='flex flex-col md:flex-row justify-between items-center py-10 gap-10 mb-20'>
			<img src={Section3Image} alt='tesr' className='md:w-2/5 sm:w-1/2' />
			<div className='md:w-3/5 sm:w-1/2'>
				<div className='md:text-5xl text-4xl pb-8'>
					Electric All Terrain Vehicle
				</div>
				<div className='text-gray-200 text-base'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis esse aspernatur vitae aliquam maiores? Exercitationem, accusantium! Et, quam laboriosam. Quidem, mollitia inventore iste similique quia quod nostrum commodi excepturi labore!
				</div>
			</div>
		</div>
	);
};

export default Section3;
