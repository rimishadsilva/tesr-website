import TeamMember from './TeamMember';

const TeamSection = ({ teamName, teamMembers }) => {
  return (
    <section>
      <h2 class="text-3xl">{teamName}</h2>
      <div className="captain">
        <TeamMember
          name={teamMembers.captain.name}
          imagePath={teamMembers.captain.imagePath}
          designation={teamMembers.captain.designation}
        />
      </div>
      <div className="rollcage">
        <h3>Rollcage</h3>
        {teamMembers.rollcage.map((member) => {
          return (
            <TeamMember
              name={member.name}
              imagePath={member.imagePath}
              designation={member.designation}
            />
          );
        })}
      </div>
      <div className="suspension">
        <h3>Suspension</h3>
        {teamMembers.suspension.map((member) => {
          return (
            <TeamMember
              name={member.name}
              imagePath={member.imagePath}
              designation={member.designation}
            />
          );
        })}
      </div>
    </section>
  );
};

export default TeamSection;
