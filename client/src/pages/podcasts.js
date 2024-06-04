import { IoOptions } from "react-icons/io5";
import Header from "../components/header";
import { useEffect, useState } from "react";
import { axiosInstance } from "../axiosInstance";
import { FaTrash } from "react-icons/fa";

const Podcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const response = await axiosInstance.get("/podcasts/");
        setPodcasts(response.data);
      } catch (error) {
        setError("Failed to fetch podcasts", error);
      }
    };
    fetchPodcasts();
  }, []);

  const deletePodcast = async (podcastId) => {
    try {
      await axiosInstance.delete(`/delete/podcast/${podcastId}/`);
      alert("Podcast deleted: " + podcastId);
      setPodcasts(podcasts.filter((podcast) => podcast.id !== podcastId));
    } catch (error) {
      setError("Failed to delete podcast: " + error);
    }
  };

  return (
    <div className="py-5 pt-2">
      <Header />
      <div className="mt-3 border-t-2">
        <div className="p-5">
          <h2 className="font-extrabold font-sans text-5xl">Podcasts</h2>
        </div>
        <div className="p-5">
          {podcasts.length === 0 ? (
            <p>No podcasts found</p>
          ) : (
            <>
              <div class="flex items-center">
                <div className="flex gap-2">
                  <button className="bg-gray-200 p-2 px-4 rounded-full hover:bg-black hover:text-white text-lg">
                    All
                  </button>
                  <button className="bg-gray-200 p-2 px-4 rounded-full hover:bg-black hover:text-white text-lg">
                    Educational
                  </button>
                  <button className="bg-gray-200 p-2 px-4 rounded-full hover:bg-black hover:text-white text-lg">
                    Adult
                  </button>
                  <button className="bg-gray-200 p-2 px-4 rounded-full hover:bg-black hover:text-white text-lg">
                    Property
                  </button>
                </div>
                <button className="p-2 rounded-full hover:bg-black hover:text-white">
                  <IoOptions size={30} />
                </button>
              </div>
              <div className="mt-4 grid grid-cols-4 gap-2 gap-y-4">
                {podcasts.map((podcast) => (
                  <div className="relative">
                    <div
                      key={podcast.id}
                      className="flex flex-col relative bg-cover bg-center w-full h-56"
                      style={{
                        backgroundImage: `url('${process.env.serverURL}${podcast.poster}')`,
                      }}
                    ></div>
                    <h3 className="font-extrabold font-sans text-xl" style={{}}>
                      {podcast.title}
                    </h3>
                    <h4
                      className="font-bold font-sans p-2 absolute top-0"
                      style={{
                        backgroundColor: podcast.color,
                        color: podcast.text,
                      }}
                    >
                      {podcast.day}s {podcast.from}
                    </h4>
                    <button onClick={() => deletePodcast(podcast.id)}>
                      <FaTrash
                        size={40}
                        className="rounded-full p-2 absolute top-2 right-2"
                        style={{
                          color: podcast.text,
                        }}
                      />
                    </button>
                    <h3 className="font-sans text-lg">{podcast.host}</h3>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Podcasts;
