import TeamMember from './TeamMember';

const TeamSection = ({ teamName, teamMembers }) => {
  return (
    <section>
      <h2 className="text-5xl font-normal ml-6 mt-8 max-md:text-4xl">
        {teamName}
      </h2>
      <div className="flex flex-col items-center justify-center">
        <TeamMember
          name={teamMembers['captain'].name}
          imagePath={teamMembers['captain'].imagePath}
          designation={teamMembers['captain'].designation}
        />
      </div>

      {
        // for every team
        Object.keys(teamMembers).map((domain) => {
          return (
            domain !== 'captain' && (
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3  mt-20">
                <div>
                  <h3 className="text-3xl  font-light ml-6 max-md:text-2xl">
                    {domain}
                  </h3>
                </div>
                <div className="grid grid-cols-4 min-[320px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 col-span-2  sm:col-span-2 md:col-span-2">
                  {teamMembers[domain].map((member) => {
                    // for each domain in team
                    return (
                      <div>
                        <TeamMember
                          name={member.name}
                          imagePath={member.imagePath}
                          designation={member.designation}
                          specialStyle={member.specialStyle}
                          specialStyle2={member.specialStyle2}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )
          );
        })
      }
    </section>
  );
};

export default TeamSection;
