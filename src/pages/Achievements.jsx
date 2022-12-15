import { Link } from 'react-router-dom';
import AchievementElement from '../components/AchievementElement';
import { achievements } from '../data/AchievementData';

const Achievements = () => {
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
					<Link
						to='/achievements'
						class='hover:text-greenColor bg-transparent mr-auto rounded shadow hover:shadow-lg py-2 px-4 border border-300'
					>
						Explore Now
					</Link>
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
