import Section1Image from "../../images/beetle.svg";
import BlobImage from "../../images/blob.svg";
const Section1 = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-between items-center py-10 gap-20 mb-20"
      style={{ height: "calc(100vh - 150px)" }}
    >
      <div className="md:text-7xl sm:text-4xl font-bold pb-8 ml-20">
        MEET THE MEAN<br></br>
        <span className="text-greenColor">GREEN</span> <br />
        MACHINE
      </div>

      <div>
        <img
          src={Section1Image}
          alt="beetle"
          className="md:w-4/6 z-2"
          style={{}}
        />

        {/* <img
          src={BlobImage}
          alt="blob"
          className="md:w-10/12 z-1"
          style={{
            position: "relative",
            top: "-100",
            left: "0",
          }}
        /> */}
      </div>
    </div>
  );
};

export default Section1;
