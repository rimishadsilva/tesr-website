import FooterHeartImage from '../images/footer-heart.png';

const Footer = () => {
	return (
		<div className='bg-secondaryBackground py-20'>
			<div className='container mx-auto px-10'>
				<div className='flex items-center justify-end md:text-3xl font-bold'>
					made with{' '}
					<img
						src={FooterHeartImage}
						alt='Footer Heart'
						className='inline px-4 w-20'
					/>{' '}
					by GDSC SJEC
				</div>
			</div>
		</div>
	);
};

export default Footer;
