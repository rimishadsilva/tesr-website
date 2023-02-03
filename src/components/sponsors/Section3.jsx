import SponsorsImage from '../../images/sponsors.jpg';

const Section3 = () => {
	return (
		<div className='flex flex-col items-center'>
			<div className='text-4xl text-greenColor pb-4'  style={{ fontFamily: 'Audiowide'}}>
				COME BE A PART OF OUR JOURNEY!
			</div>
			{/* <img src={SponsorsImage} alt='tesr' className='' /> */}
			<iframe width="100%" height="600px" src="https://www.youtube.com/embed/hzXPoCMhDRw?start=33" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>		</div>
	);
};

export default Section3;
