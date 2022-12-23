import BrochureImage from '../../images/brochure.png';

const Section2 = () => {
	return (
		<div className='pb-10'>
			<div className='text-3xl text-greenColor pb-4'>Our Brochure</div>
			<div className='text-xl'>
				<a
					href='https://drive.google.com/file/d/1xPP_Yfj90VJWwGikbjEa6OB46NbesAfv/view?usp=sharing'
					className='hover:text-greenColor hover:text-greenColorHover'
					target='_blank'
					rel='noreferrer'
				>
					<img
						src={BrochureImage}
						alt='View Online'
						className='inline px-4 w-16'
					/>{' '}
				</a>
			</div>
		</div>
	);
};

export default Section2;
