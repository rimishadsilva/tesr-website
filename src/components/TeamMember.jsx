const TeamMember = ({
  name,
  imagePath,
  designation,
  specialStyle,
  specialStyle2,
}) => {
  return (
    <>
      <img
        src={imagePath}
        alt="Team Member"
        className="rounded-full resize-image max-md:text-center"
      />
      <p className={`text-align-center ${specialStyle2}`}>{name}</p>
      <p className={`text-align-center ${specialStyle}`}>{designation}</p>
    </>
  );
};

export default TeamMember;
