import "./index.css";
import Video from "../src/assets/space.mp4";
import Video2 from "../src/assets/paradise.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faArrowUp,
  faNewspaper,
  faCar,
  faGlobe,
  faTimes,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import ReactLogo from "../src/assets/reactbw.png";
import JavaScriptLogo from "../src/assets/javascriptbw.png";
import JavaLogo from "../src/assets/javabw.png";
import React, { useState, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import { ParallaxLayer, Parallax } from "@react-spring/parallax";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

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
const BackgroundVideo2 = () => {
  return (
    <video
      src={Video2}
      autoPlay
      muted
      loop
      className="w-full h-full absolute top-0 -z-20 object-cover rotate-180	"
    ></video>
  );
};

const Card = (props) => {
  const { icon, title, subtitle, content, link } = props;

  return (
    <a
      href={link}
      target="_blank"
      className="text-white w-60 h-30 px-3 flex justify-center items-center flex-wrap mt-10 border-4 rounded-sm sm:ml-10"
    >
      <div className="flex justify-center items-center p-1 space-x-1">
        {icon ? (
          <FontAwesomeIcon icon={icon} className="font-bold text-2xl" />
        ) : null}
        <h1 className="font-bold text-2xl">{title}</h1>
      </div>
      {subtitle && <h2 className="font-semibold text-xl">{subtitle}</h2>}
      <p className="text-center p-5">{content}</p>
    </a>
  );
};

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuAnimation = useSpring({
    opacity: isMenuOpen ? 1 : 0,
    pointerEvents: isMenuOpen ? "auto" : "none",
  });
  const ref = useRef();
  const handleClick = (page) => {
    if (ref.current) {
      ref.current.scrollTo(page);
    }
    setMenuOpen(false);
  };

  return (
    <>
      <Parallax ref={ref} pages={3} className="bg-blackbg">
        <ParallaxLayer offset={0} speed={0.8} className="h-screen">
          <div className="h-screen">
            {/* Header */}
            <div className="fixed w-full z-20">
              {" "}
              <div className="bg-midnightpurple/60 flex justify-center items-center h-8">
                <FontAwesomeIcon
                  onClick={() => setMenuOpen(!isMenuOpen)}
                  icon={faBars}
                  className="absolute left-0 ml-10 text-white text-sm  transition ease-in-out active:text-black duration-300 cursor-pointer"
                />
                <animated.div
                  className="	fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 backdrop-blur-3xl flex items-center justify-center"
                  id="menu-open"
                  style={menuAnimation}
                >
                  <ul className="text-center text-white text-3xl space-y-4">
                    <li>
                      <a
                        onClick={() => handleClick(1)}
                        className="cursor-pointer"
                      >
                        Projects
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => handleClick(2)}
                        className="cursor-pointer"
                      >
                        About
                      </a>
                    </li>
                    {/* Adicione mais itens do menu conforme necessário */}
                  </ul>
                  <div
                    className="absolute top-4 right-4 cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FontAwesomeIcon
                      icon={faTimes}
                      size="2x"
                      className="text-white"
                    />
                  </div>
                </animated.div>

                <h1 className="z-10 text-white font-thin cursor-pointer">
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/gabriel-lima-9710191b9/ "
                    target="_blank"
                  >
                    Gabi Developer
                  </a>
                </h1>
              </div>
            </div>
            {/* BackgroundVideo and Text */}
            <BackgroundVideo />

            <ParallaxLayer offset={0} speed={0.8} className="h-screen">
              <div className="flex justify-center items-center h-80 flex-col ">
                <h1 className="text-white text-3xl font-extrabold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-default	">
                  The Right Dev for You.
                </h1>
                <h2 className="text-gray-200 cursor-default text-2xl	">
                  {" "}
                  Front-End
                </h2>
              </div>
              <div className=" w-full text-white flex justify-center space-x-4 ">
                <img src={ReactLogo} className="w-8"></img>
                <img src={JavaScriptLogo} className="w-8 rounded-md"></img>
                <img src={JavaLogo} className="w-8 "></img>
              </div>

              <div
                className="text-white flex flex-col justify-center items-center absolute bottom-1 w-full z-20"
                onClick={() => ref.current.scrollTo(1)}
              >
                <FontAwesomeIcon icon={faArrowUp} />
                <h1> Projects </h1>
              </div>
            </ParallaxLayer>
            <div className="bg-gradient-to-t from-blackbg w-full h-full p-44 absolute bottom-0 -z-10 ">
              {" "}
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1} ref={ref}>
          <div className="h-screen bg-gradient-to-b from-blackbg">
            <BackgroundVideo2 />
            <div className="w-full flex justify-center items-center flex-wrap ">
              <Card
                link="https://www.zendit.ng/"
                icon={faGlobe}
                title="Zendit Website"
                subtitle="Courier App"
                content="
                Website in development for Zennit Technologies, during my volunteer.
                "
              />
              <Card
                link="https://github.com/gabi-lima/flow.Journals"
                icon={faNewspaper}
                title="flow.journal"
                subtitle="Journal App"
                content="Diary that asks you every hour what you're doing! Made using Java, JavaFX & SQLite!
                "
              />
              <Card
                link="https://github.com/gabi-lima/controle_estacionamento"
                icon={faCar}
                title="parking_control"
                subtitle="Parking App"
                content="
                Access control software for parking.
                Made with Java, JavaFX and SQLite!
                "
              />
            </div>
          </div>
          <div
            className="text-white flex flex-col justify-center items-center absolute bottom-1 w-full z-20"
            onClick={() => ref.current.scrollTo(2)}
          >
            <FontAwesomeIcon icon={faArrowUp} />
            <h1> About </h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1} ref={ref}>
          <div className="text-white flex w-full flex-col sm:flex-row h-screen bg-blackbg">
            <div className="w-2/5 ml-10 mt-10">
              <hr className="z-0 bg-pink-900 h-1 transition ease-in-out blur hover:blur-md"></hr>
              <hr className=""></hr>
              <h1 className="mt-5">
                {" "}
                Hello! My name is Gabriel, I'm a Brazilian Front-end Developer
                and passionate about technology. I have experience with HTML,
                CSS, JAVA, REACT.JS, & JAVA. I also have a background in SCRUM,
                Clean Code, Git versioning & teamwork
              </h1>{" "}
              <hr className="mt-5"></hr>
              <hr className="z-0 bg-pink-900 h-1 blur transition ease-in-out hover:blur-md"></hr>
            </div>
            <div className=" w-full sm:ml-20 mt-10 sm:w-2/5 h-4/5 sm:bg-darkbg rounded sm:shadow-[0px_0px_40px_5px_rgba(1,1,1,1.1)] sm:shadow-pink-600/30 flex flex-col  text-center ">
              <h1 className="mt-10 "> You can find me at:</h1>
              <div className="">
                <p className="cursor-pointer mt-10">
                  <FontAwesomeIcon icon={faLinkedin} />
                  <a className="">
                    {" "}
                    <b className="text-pink-900">G</b>abriel{" "}
                    <b className="text-pink-900">L</b>ima
                  </a>
                </p>
              </div>
              <div>
                <p className="cursor-pointer">
                  {" "}
                  <FontAwesomeIcon icon={faEnvelope} />{" "}
                  gabriel1277lima@gmail.com
                </p>
              </div>
              <div className="">
                <p>
                  <FontAwesomeIcon icon={faGithub} />{" "}
                  <b className="text-pink-900">G</b>abi{" "}
                  <b className="text-pink-900">D</b>ev
                </p>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <div
          className="text-white flex flex-col justify-center items-center absolute bottom-1 w-full z-20"
          onClick={() => ref.current.scrollTo(0)}
        >
          <FontAwesomeIcon icon={faArrowUp} />
          <h1> Go Up </h1>
        </div>
      </Parallax>
    </>
  );
}

export default App;
