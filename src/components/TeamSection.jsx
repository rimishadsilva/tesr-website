import TeamMember from './TeamMember';

const TeamSection = ({ teamName, teamMembers }) => {
  return (
    <section>
      <h2 class="text-5xl font-normal ml-6 mt-8">{teamName}</h2>
      <div
        className="captain"
        class=" flex flex-col 
      items-center justify-center"
      >
        <TeamMember
          name={teamMembers.captain.name}
          imagePath={teamMembers.captain.imagePath}
          designation={teamMembers.captain.designation}
        />
      </div>
      <div
        className="rollcage"
        class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3  mt-20"
      >
        <div>
          <h3 class="text-3xl font-light ml-6">Rollcage</h3>
        </div>
        <div class="grid grid-cols-4 min-[320px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 col-span-2  sm:col-span-2 md:col-span-2 min-[320px]:mt-10">
          {teamMembers.rollcage.map((member) => {
            return (
              <div>
                <TeamMember
                  name={member.name}
                  imagePath={member.imagePath}
                  designation={member.designation}
                  specialStyle={member.specialStyle}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="suspension"
        class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3  mt-20"
      >
        <div>
          <h3 class="text-3xl font-light ml-6 ">Suspension</h3>
        </div>
        <div class="grid grid-cols-4 min-[320px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 col-span-2  sm:col-span-2 md:col-span-2 min-[320px]:mt-10 ">
          {teamMembers.suspension.map((member) => {
            return (
              <div>
                <TeamMember
                  name={member.name}
                  imagePath={member.imagePath}
                  designation={member.designation}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="steering"
        class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3  mt-20"
      >
        <div>
          <h3 class="text-3xl font-light ml-6 ">Steering</h3>
        </div>
        <div class="grid grid-cols-4 min-[320px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 col-span-2  sm:col-span-2 md:col-span-2 min-[320px]:mt-10 ">
          {teamMembers.steering.map((member) => {
            return (
              <div>
                <TeamMember
                  name={member.name}
                  imagePath={member.imagePath}
                  designation={member.designation}
                  specialStyle={member.specialStyle}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="braking"
        class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3  mt-20"
      >
        <div>
          <h3 class="text-3xl font-light ml-6 ">Braking</h3>
        </div>
        <div class="grid grid-cols-4 min-[320px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 col-span-2  sm:col-span-2 md:col-span-2 min-[320px]:mt-10 ">
          {teamMembers.braking.map((member) => {
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
      <div
        className="power_train"
        class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3  mt-20"
      >
        <div>
          <h3 class="text-3xl font-light ml-6 ">Powertrain</h3>
        </div>
        <div class="grid grid-cols-4 min-[320px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 col-span-2  sm:col-span-2 md:col-span-2 min-[320px]:mt-10 ">
          {teamMembers.power_train.map((member) => {
            return (
              <div>
                <TeamMember
                  name={member.name}
                  imagePath={member.imagePath}
                  designation={member.designation}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
