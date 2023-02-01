import BrochureImage from '../../images/inverted_brochure.png';

const Section2 = () => {
	return (
		<div className='pb-10 flex flex-col items-center'>
			<div className='text-4xl text-greenColor pb-4'>Our Brochure</div>
			<div className='text-lg'>
				<a
					href='https://drive.google.com/file/d/1xPP_Yfj90VJWwGikbjEa6OB46NbesAfv/view?usp=sharing'
					className='hover:text-greenColor hover:text-greenColorHover'
					target='_blank'
					rel='noreferrer'
				>
					<img
						src={BrochureImage}
						alt='View Online'
						className='inline px-8 w-32'
					/>
				</a>
			</div>
			<div className='text-sm pl-3'>
			{'(View Online)'}
			</div>
		</div>
	);
};

export default Section2;
