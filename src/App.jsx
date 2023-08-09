import "./index.css";
import Video from "../src/assets/space.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import ReactLogo from "../src/assets/reactbw.png";
import JavaScriptLogo from "../src/assets/javascriptbw.png";
import JavaLogo from "../src/assets/javabw.png";
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
      <div className="h-screen">
        {/* Header */}
        <div className="fixed w-full h-screen">
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

        <div className="flex justify-center items-center h-80 flex-col ">
          <h1 className="text-white text-3xl font-extrabold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-default	">
            The Right Dev for You.
          </h1>
          <h2 className="text-gray-200 cursor-default text-2xl	"> Front-End</h2>
        </div>
        <div className="bg-gradient-to-t from-black w-full h-full p-44 absolute bottom-0 -z-10 ">
          {" "}
        </div>
        <div className=" w-full text-white flex justify-center space-x-4 ">
          <img src={ReactLogo} className="w-8"></img>
          <img src={JavaScriptLogo} className="w-8 rounded-md"></img>
          <img src={JavaLogo} className="w-8 "></img>
        </div>
        <div className="text-white flex flex-col justify-center items-center absolute bottom-1 w-full">
          <FontAwesomeIcon icon={faArrowUp} />
          <h1> Projects </h1>
          <div> </div>
        </div>
      </div>
      <div className="h-screen bg-gradient-to-b from-black">
        {" "}
        <h1> Olá ! </h1>
      </div>
    </>
  );
}

export default App;
