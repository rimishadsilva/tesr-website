const GalleryElement = ({ imageUrl }) => {
	return <img className='object-cover h-full' src={imageUrl} alt={imageUrl} />;
};

export default GalleryElement;
