import "./App.css";
import video from "./assets/space.mp4";

const VideoPlayer = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="fixed inset-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-red "></div>
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <h1 className="text-white text-4xl font-semibold">Gabi Dev </h1>{" "}
        <p> </p>
      </div>
    </div>
  );
};
function App() {
  return (
    <div class="">
      <div class="bg-midnightpurple flex justify-center items-center h-10">
        {" "}
        <h1 class="opacity-100">Gabi Developer</h1>
      </div>
      <div class="">
        <VideoPlayer />
      </div>
    </div>
  );
}

export default App;
