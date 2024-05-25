import React from "react";
import logo from "../assets/images/logo.svg";
import { FaCirclePlay, FaCircleDot } from "react-icons/fa6";
import episodes from "../components/episodes.json";
import AudioPlayer from "../components/audioPlayer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import images from "../components/slideImages.json";
import Programmes from "../components/programme";

const Home = () => {
  return (
    <div
      style={{ height: "100vh" }}
      className="bg-[#F3F5F9] dark:bg-[#020301] py-5 overflow-y-auto"
    >
      <div className="w-full flex h-16 px-5">
        <div className="flex gap-2 align-center cursor-pointer">
          <div className="flex flex-col items-center">
            <h1 className="font-extrabold font-sans text-5xl">Priority</h1>
            <p className="font-bold font-brotherhood text-xl scale-150">
              Radio
            </p>
          </div>
          <img
            src={logo}
            alt="Priority 1"
            className="hover:opacity-90 h-full"
          />
        </div>
        <button className="border flex items-center space-x-2 p-4 rounded-full place-self-center ml-auto text-[#DB1F48] font-bold border-[#DB1F48] hover:bg-[#DB1F48] hover:text-[#E5DDC8]">
          <span>Listen live</span> <FaCircleDot className="animate-pulse" />
        </button>
      </div>
      <div className="grid md:grid-cols-2 mt-4 px-4 gap-3">
        <div>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            interval={4000}
          >
            {images.map((image, index) => (
              <div key={index}>
                <div className="flex-shrink-0 w-full justify-center relative flex h-3/4 items-center">
                  <img
                    className="object-cover h-full w-full"
                    src={image}
                    alt="Alt"
                  />
                </div>
              </div>
            ))}
          </Carousel>
          <AudioPlayer src="https://node02-cdn.dl-api.com/dl?hash=8f9ezq1dFAEk4CQtB07xvdSykc6Y2fSf9NOnEfIYEo890u3nn2KDfOfGIQe4hVhQpnlOq2ceB1PhpibUupJY4fHjdgqJaL4DQwD3osUBXnkO9X2eX5tgMoVk%2B9HRnJsS2Cjkc8MsN%2Fl%2BoFwlHuHwpSCeSOH4Qf4aJni1%2BBbiwCY3IS2oHq1H2lbQxjRdOST6IJw2ywcVhq02LKiWMefoyfE%2BYcY596Ld55wj3CS01lmMAkVPMVV%2BuDcyzkvLTs7DIEerSyY0g1zO9fKIvTaTZWW7xYlNE8rT01rTi0fedlrPpxqjvbNfuwYAG5qlC%2BdX" />
        </div>
        <div className="flex flex-col">
          <div
            className="bg-cover bg-center h-40 p-4 flex"
            style={{
              backgroundImage:
                "url('https://unblast.com/wp-content/uploads/2019/08/Square-Poster-Mockup.jpg')",
            }}
          >
            <h2 className="font-extrabold font-sans text-6xl mt-auto text-[#FFDB15]">
              Title
            </h2>
          </div>
          <div className="flex flex-col space-y-4 mt-2">
            {episodes.map((episode) => (
              <div
                key={episode.id}
                className="flex space-x-2 items-center w-full h-14"
              >
                <img
                  src={episode.poster}
                  alt={episode.title}
                  className="h-full"
                />
                <div className="flex-grow text-[#020301]">
                  <h3 className="font-bold text-xl flex-grow hover:text-[#4444]">
                    {episode.title}
                  </h3>
                  <p className="text-sm flex-grow text-gray-400">
                    {episode.description}
                  </p>
                  <span className="text-xs">{episode.duration}</span>
                </div>
                <FaCirclePlay
                  size={32}
                  className="flex place-self-center hover:text-[#444444]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 mt-2">
        <Programmes />
      </div>
    </div>
  );
};

export default Home;
