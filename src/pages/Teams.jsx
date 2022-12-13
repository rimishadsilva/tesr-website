import TeamSection from '../components/TeamSection';
import { Beetle1, Beetle2, Beetle3 } from '../components/data/TeamData';

const Teams = () => {
  return (
    <>
      <h1 className="text-6xl font-medium text-center">Teams</h1>
      <TeamSection teamName={"Beetle 1.0"} teamMembers={Beetle1} />
      <TeamSection teamName={"Beetle 2.0"} teamMembers={Beetle2} />
      <TeamSection teamName={"Beetle 3.0"} teamMembers={Beetle3} />
    </>
  );
};

export default Teams;
