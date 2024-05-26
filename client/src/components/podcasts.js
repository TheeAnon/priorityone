import podcasts from "../components/podcasts.json";

const Podcasts = () => {
  return (
    <div>
      <div className="mt-8">
        <h2 className="font-extrabold font-sans text-3xl">Podcasts</h2>
      </div>
      <div className="mt-4 grid grid-cols-5 gap-2 gap-y-4">
        {podcasts.map((podcast, index) => (
          <div className="relative">
            <div
              key={index}
              className="flex flex-col relative bg-cover bg-center w-full h-48"
              style={{
                backgroundImage: `url('${podcast.poster}')`,
              }}
            ></div>
            <h3 className="font-extrabold font-sans text-xl" style={{}}>
              {podcast.title}
            </h3>
            <h4
              className="font-bold font-sans p-2 absolute top-0"
              style={{ backgroundColor: podcast.color, color: podcast.text }}
            >
              {podcast.day}s {podcast.from}
            </h4>
            <h3 className="font-sans text-lg">{podcast.host}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Podcasts;
