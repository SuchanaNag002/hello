"use client";
import "@/client/styles/About_Me/aboutme.css";
import Welcome from "../components/AboutMe/Welcome";
import Footer from "../components/common/Footer";
import Nav from "../components/Nav/Nav";
import SampleProjects from "../components/DisplayProjects/SampleProjects";

const HomePage = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden text-white">
      <Nav />
      <div className="relative h-screen w-screen flex items-end justify-center">
        <video
          autoPlay
          muted
          loop={true}
          controls={false}
          src="HomeVideo.mp4"
          alt="Background"
          className="BACKGROUND_IMAGE absolute h-full w-full object-cover"
        />
        <div className="relative z-[30] my-32">
          <h1 className="text-3xl md:text-6xl text-center my-2 p-4">
            Capturing Moments, Creating Memories
          </h1>
          <h1 className=" text-2xl md:text-4xl text-center my-2 p-4">
            A Visual Symphony of Life Through the Lens
          </h1>
        </div>
      </div>
      <div id="about_me" className="py-2 w-screen overflow-hidden p-4">
        <Welcome />
      </div>
      <div
        id="sample_projects"
        className="bg-white min-h-screen flex flex-col items-center justify-center text-black p-4"
      >
        <h2 className="font-bold md:text-2xl text-3xl mb-4 md:mb-2 text-center">
          Showcased Splendors: A Glimpse into My Artistry
        </h2>
        <hr className="border-black w-full md:max-w-[65%] mx-auto border-t-2" />
        <SampleProjects />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
