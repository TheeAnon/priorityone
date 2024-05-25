import programmes from "../components/programmes.json";

const Programmes = () => {
  return (
    <div>
      <div className="mt-8">
        <h2 className="font-extrabold font-sans text-3xl">Programmes</h2>
      </div>
      <div className="mt-4 grid grid-cols-5 gap-2">
        {programmes.map((programme, index) => (
          <div key={index} className={`flex flex-col bg-${programme.color}`}>
            <img
              src={programme.poster}
              alt={programme.title}
              className="rounded-full w-3/4 h-3/4"
            />
            <h3
              className={`font-extrabold font-sans text-xl text-${programme.text}`}
            >
              {programme.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programmes;
