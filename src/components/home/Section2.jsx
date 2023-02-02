import Section2Image from '../../images/group-pic.jpeg';

const Section2 = () => {
	return (
		<div className='flex flex-col md:flex-row justify-between items-center py-10 gap-20 mb-20'>
			<div className='md:w-3/4 sm:w-1/2'>
				<div className='md:text-5xl text-4xl pb-8'>About Us</div>
				<div className='text-gray-200 text-lg'>
					We are Team eSJEC Racing from St. Joseph Engineering College .Team
					eSJEC Racing was formed in March, 2019 under the SAEINDIA SJEC
					Collegiate Club. The team comprises of 25 students from the department
					of Mechanical Engineering, Electrical & Electronics Engineering ,
					Electronics & Communications Engineering and Computer science
					engineering. We participate in student level competitions where teams
					across India compete against each other in designing a off road
					all-terrain single seater vehicle.
				</div>
			</div>
			<img src={Section2Image} alt='tesr' className='md:w-1/2 sm:w-5/12' />
		</div>
	);
};

export default Section2;
