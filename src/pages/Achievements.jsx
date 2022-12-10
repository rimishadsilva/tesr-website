import AchievementElement from '../components/AchievementElement';

import Achievement1Image from '../images/achievements-1.jpg';
import Achievement2Image from '../images/achievements-2.jpg';

const Achievements = () => {
	const achievements = [
		{
			title: 'Season 2019 (ATVC-Gujarat)',
			image: Achievement1Image,
			description: [
				'Acceleration AIR 5',
				'Sledge pull AIR 6',
				'Endurance AIR 5',
				'Overall Performance AIR 5',
			],
			sides: 'left',
		},
		{
			title: 'Season 2020 (SAE Baja)',
			image: Achievement2Image,
			description: [
				'Overall Dynamic AIR 2',
				'All terrain performance AIR 1',
				'Maneuverability AIR 2',
				'Best Brake performance AIR 2',
				'Acceleration AIR 4',
				'Suspension & Traction AIR 4',
				'CAE Evaluation AIR 4',
				'Sales presentation AIR 5',
				'Overall ranking  AIR 8 ',
			],
			sides: 'right',
		},
	];
	return (
		<section>
			<div class='container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24'>
				<div class='flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8'>
					<p class='ml-2 text-greenColor uppercase tracking-loose'>
						Achievements
					</p>
					<p class='text-3xl md:text-4xl mb-4'>
						Achievements of Team eSJEC Racing
					</p>
					<a
						href='/achievements'
						class='hover:text-greenColor bg-transparent mr-auto rounded shadow hover:shadow-lg py-2 px-4 border border-300'
					>
						Explore Now
					</a>
				</div>

				<div class='ml-0 md:ml-12 lg:w-2/3 sticky'>
					<div class='container mx-auto w-full h-full'>
						<div class='relative wrap overflow-hidden p-10 h-full'>
							<div
								class='border-2-2 absolute h-full border'
								style={{
									right: '50%',
									width: '1px',
									background: '#00D400',
									border: '2px solid #00D400',
									borderRadius: '1%',
								}}
							></div>

							<div
								class='border-2-2 absolute h-full border'
								style={{
									left: '50%',
									width: '1px',
									background: '#00D400',
									border: '2px solid #00D400',
									borderRadius: '1%',
								}}
							></div>
							{achievements.map((achievement) => (
								<AchievementElement {...achievement} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Achievements;
