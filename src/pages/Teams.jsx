import TeamSection from "../components/TeamSection";
import Beetle1 from "../components/data/TeamData";

const Teams = () => {
    return <>
        <h1>Teams</h1>
        <TeamSection teamName={"Beetle 1.0"} teamMembers={ Beetle1 } />
    </>;
};

export default Teams;
