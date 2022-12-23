import Section1Image from '../../images/beetle.svg';
import BeetleBg from '../../images/Ellipse.svg';

const Section1 = () => {
	return (
		<div className='container mx-auto'>
			<div
				className='flex flex-col md:flex-row justify-between items-center py-10 gap-4'
				style={{ height: window.innerWidth > 720 && 'calc(100vh - 120px)' }}
			>
				<div className='md:w-3/6  md:text-7xl text-4xl font-bold'>
					MEET THE MEAN
					<br />
					<span className='text-greenColor'>GREEN</span> <br />
					MACHINE
				</div>

				<div>
					{/* <img src={BeetleBg} alt='' className='' /> */}
					<img src={Section1Image} alt='beetle' className='' />
				</div>
			</div>
		</div>
	);
};

export default Section1;
