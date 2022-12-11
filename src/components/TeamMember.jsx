const TeamMember = ({ name, imagePath, designation }) => {
  return (
    <>
      <img
        src={imagePath}
        alt="Team Member"
        class="rounded-full resize-image"
      />
      <p class="text-align-center">{name}</p>
      <p>{designation}</p>
    </>
  );
};

export default TeamMember;

TeamMember.defaultProps = {
  designation: '',
};
