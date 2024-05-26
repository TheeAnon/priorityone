import { FaCirclePlay } from "react-icons/fa6";
import episodes from "../components/episodes.json";

const Featured = () => {
  return (
    <div className="flex flex-col">
      <div
        className="bg-cover bg-center h-40 p-4 flex"
        style={{
          backgroundImage:
            "url('https://unblast.com/wp-content/uploads/2019/08/Square-Poster-Mockup.jpg')",
        }}
      >
        <h2 className="font-extrabold font-sans text-6xl mt-auto text-[#FFDB15]">
          Featured
        </h2>
      </div>
      <div className="flex flex-col space-y-4 mt-2">
        {episodes.map((episode) => (
          <div
            key={episode.id}
            className="flex space-x-2 items-center w-full h-14"
          >
            <img src={episode.poster} alt={episode.title} className="h-full" />
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
  );
};

export default Featured;
