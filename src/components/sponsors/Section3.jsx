import SponsorsImage from '../../images/sponsors.jpg';

const Section3 = () => {
	return (
		<div className='flex flex-col items-center'>
			<div className='text-4xl text-greenColor pb-4'>
				COME BE A PART OF OUR JOURNEY!
			</div>
			<img src={SponsorsImage} alt='tesr' className='' />
		</div>
	);
};

export default Section3;
