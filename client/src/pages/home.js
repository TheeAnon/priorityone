import React from "react";
import AudioPlayer from "../components/audioPlayer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import images from "../components/slideImages.json";
import Programmes from "../components/programme";
import Featured from "../components/featured";
import Podcasts from "../components/podcasts";
import Header from "../components/header";

const Home = () => {
  return (
    <div
      style={{ height: "100vh" }}
      className="bg-[#F3F5F9] dark:bg-[#020301] py-5 pt-2 overflow-y-auto"
    >
      <Header />
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
          <AudioPlayer src="https://node02-cdn.dl-api.com/dl?hash=RgYdTjyhCDbi1OcGvHEAsikwMf%2FTV9YqvFubsIfhn5rfFkp%2BL9f6OhZBm2PF%2FIgFPCs1LboGzTE6AcxsJYE%2BFzWJGbDS8VL20djcsaxrpMKeFbPYYszm42wf%2FdMpWi6nWIVeBLIH9s5%2FjurKHTMivLeQt%2Bk5Vo1rvwIqwRZ8YlYY6j2wj3sm%2BuYj2b1BVflHy2%2BZbf2Dh4J3SEvqFyPHL%2BkB7wieLr3YyJa94wU7%2FWUwENqAo64KTEReg5IBe3IXjUw51RB1baAzveOucEm6UGlIGP0wbte8oQkUsXB3xxsPShqVZfX3M8VXxIR80V9NxSN8ABt3NYmO8%2B%2FxWRtmPV7EH00iueyl%2BqrUXm4cR6w%3D" />
        </div>
        <Featured />
      </div>
      <div className="px-4 mt-2">
        <Programmes />
      </div>
      <div className="px-4 mt-2">
        <Podcasts />
      </div>
    </div>
  );
};

export default Home;
