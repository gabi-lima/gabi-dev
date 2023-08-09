import "./index.css";
import Video from "../src/assets/space.mp4";
import Video2 from "../src/assets/paradise.mp4";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faArrowUp,
  faNewspaper,
  faCar,
  faSitemap,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import ReactLogo from "../src/assets/reactbw.png";
import JavaScriptLogo from "../src/assets/javascriptbw.png";
import JavaLogo from "../src/assets/javabw.png";
import { ParallaxLayer, Parallax } from "@react-spring/parallax";
import React, { useState } from "react";

const BackgroundVideo = (mouseX) => {
  return (
    
      <video
        src={Video}
        autoPlay
        muted
        loop
        className="w-full h-full absolute top-0 -z-20 object-cover"
        style={{ transform: `translateX(${xOffset}px)` }}
      ></video>
    </div>
  );
};
const BackgroundVideo2 = () => {
  return (
    <video
      id="parallax"
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
      <div className="flex justify-center items-center  space-x-1  p-1">
        {icon ? (
          <FontAwesomeIcon
            icon={icon}
            className="font-bold text-2xl antialiased"
          />
        ) : null}
        <h1 className="font-bold text-2xl antialiased">{title}</h1>
      </div>
      {subtitle && (
        <h2 className="font-semibold text-xl antialiased">{subtitle}</h2>
      )}
      <p className="text-center p-5 antialiased">{content}</p>
    </a>
  );
};

function App() {
  return (
    <>
      <Parallax pages={2} className="bg-black">
        <ParallaxLayer offset={0} speed={0.8} className="h-screen">
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

              <div className="text-white flex flex-col justify-center items-center absolute bottom-1 w-full">
                <FontAwesomeIcon icon={faArrowUp} />
                <h1> Projects </h1>
              </div>
            </ParallaxLayer>
            <div className="bg-gradient-to-t from-black w-full h-full p-44 absolute bottom-0 -z-10 "></div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <div className="h-screen bg-gradient-to-b from-black">
            <BackgroundVideo2 />
            <div
              className="w-full flex justify-center items-center flex-wrap "
              id="card"
            >
              <Card
                link="https://www.zendit.ng/"
                icon={faGlobe}
                title="Zendit Website"
                subtitle="Journal App"
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
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
