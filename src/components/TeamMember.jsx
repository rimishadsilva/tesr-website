const TeamMember = ({ name, imagePath, designation }) => {
  return (
    <>
      <img src={imagePath} alt="Team Member" />
      <p>{name}</p>
      <p>{designation}</p>
    </>
  );
};

export default TeamMember;

TeamMember.defaultProps = {
  designation: "",
}