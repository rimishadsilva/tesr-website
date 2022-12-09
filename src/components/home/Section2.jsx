import Section2Image from '../../images/home-section2.jpeg';

const Section2 = () => {
	return (
		<div className='flex flex-col md:flex-row justify-between items-center py-10 gap-20 mb-20'>
			<div className='md:w-3/4 sm:w-1/2'>
				<div className='md:text-5xl sm:text-2xl font-bold pb-8'>About Us</div>
				<div className='text-gray-200 md:text-xl'>
					We are Team eSJEC Racing from St. Joseph Engineering College .Team
					eSJEC Racing was formed in March, 2019 under the SAEINDIA SJEC
					Collegiate Club. The team comprises of 25 students from the department
					of Mechanical Engineering, Electrical & Electronics Engineering ,
					Electronics & Communications Engineering and Computer science
					engineering. We participate in student level competitions where teams
					across India compete against each other in designing a off road
					all-terrain single seater vehicle with restrictions imposed on the
					different components such as motor and battery. We Design,
					Manufacture, Test and validate the all terrain vehicle abiding by the
					SAE rulebook.
				</div>
			</div>
			<img src={Section2Image} alt='tesr' className='md:w-1/4 sm:w-1/2' />
		</div>
	);
};

export default Section2;
