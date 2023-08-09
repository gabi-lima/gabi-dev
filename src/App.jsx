import "./index.css";
import Video from "../src/assets/space.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const BackgroundVideo = () => {
  return (
    <video
      src={Video}
      autoPlay
      muted
      loop
      className="w-full h-full absolute top-0 -z-20 object-cover"
    ></video>
  );
};

function App() {
  return (
    <>
      {/* Header */}
      <div className="fixed w-full">
        {" "}
        <div className="bg-midnightpurple/60 flex justify-center items-center h-8">
          <FontAwesomeIcon
            icon={faBars}
            className="absolute left-0 ml-10 text-white text-sm  transition ease-in-out active:text-black duration-300 cursor-pointer"
          />
          <h1 className="z-10 text-white font-thin cursor-pointer">
            {" "}
            Gabi Developer
          </h1>
        </div>
      </div>

      {/* BackgroundVideo and Text */}
      <BackgroundVideo />
      <div className="flex justify-center items-center h-80 flex-col">
        <h1 className="text-white text-4xl font-extrabold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-default	">
          The Right Dev for You.
        </h1>
        <h2 className="text-gray-200 cursor-default text-2xl	"> Front-End</h2>
      </div>
      <div className="bg-gradient-to-t from-black w-full h-full p-44 absolute bottom-0 -z-10"></div>
      <div className=" w-full text-white flex justify-center mt-80">
        <h1 className="font-bold "> HTML, CSS, JS </h1>
      </div>
    </>
  );
}

export default App;
