const Section2 = () => {
	return (
		<div className='pb-10'>
			<div className='text-3xl text-greenColor pb-4'>Our Brochure</div>
			<div className='text-xl'>
				<a
					href='VIEW'
					className='hover:text-greenColor hover:text-greenColorHover'
					target='_blank'
					rel='noreferrer'
				>
					View Online
				</a>
			</div>
			<div className='text-xl'>
				<a
					href='DOWNLOAD'
					className='hover:text-greenColor hover:text-greenColorHover'
					target='_blank'
					rel='noreferrer'
				>
					Download
				</a>
			</div>
		</div>
	);
};

export default Section2;
