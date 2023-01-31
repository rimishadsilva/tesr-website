import Section1 from "../components/home/Section1";
import Section2 from "../components/home/Section2";
import Section3 from "../components/home/Section3";
import Section4 from "../components/home/Section4";
import Logo from "../images/logo.svg";


const Home = () => {
  return (
	  <div className="container mx-auto px-10">
		
      <div id="box"></div>
      <img id="logo" src={Logo} alt="logo" />
      <div id="screen"></div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default Home;
