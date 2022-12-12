import TeamSection from '../components/TeamSection';
import Beetle1 from '../components/data/TeamData';

const Teams = () => {
  return (
    <>
      <h1 class="text-6xl font-medium text-center">Teams</h1>
      <TeamSection teamName={'Beetle 1.0'} teamMembers={Beetle1} />
    </>
  );
};

export default Teams;
