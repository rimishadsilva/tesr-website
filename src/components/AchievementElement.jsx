const AchievementElement = ({ date, title, image, description, sides }) => {
	const side =
		sides === 'left'
			? 'mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline'
			: 'mb-8 flex justify-between items-center w-full right-timeline';
	const side2 = `order-1  w-5/12 px-1 py-4 text-${sides}`;
	description = description.map((x) => <li>{x}</li>);

	return (
		<div class={side}>
			<div class='order-1 w-5/12'></div>
			<div class={side2}>
				<p class='mb-3 text-base text-yellow-300'>{date}</p>
				<h4 class='mb-3 font-bold text-lg md:text-3xl'>{title}</h4>
				<img src={image} alt={title} />
				<p class='leading-snug text-opacity-100 text-xl pt-4'>
					<ul class='md:list-disc md:list-inside'>{description}</ul>
				</p>
			</div>
		</div>
	);
};

export default AchievementElement;
