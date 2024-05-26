import programmes from "../components/programmes.json";

const Programmes = () => {
  return (
    <div>
      <div className="mt-8">
        <h2 className="font-extrabold font-sans text-3xl">Programmes</h2>
      </div>
      <div className="mt-4 grid grid-cols-5 gap-2">
        {programmes.map((programme, index) => (
          <div>
            <div
              key={index}
              className={`flex flex-col relative bg-cover bg-center w-full h-48`}
              style={{
                backgroundImage: `url('${programme.poster}')`,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="absolute top-0"
              >
                <path
                  fill={programme.color}
                  fill-opacity="1"
                  d="M0,32L80,74.7C160,117,320,203,480,208C640,213,800,139,960,101.3C1120,64,1280,64,1360,64L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="absolute bottom-0"
              >
                <path
                  fill={programme.color}
                  fill-opacity="1"
                  d="M0,160L60,133.3C120,107,240,53,360,42.7C480,32,600,64,720,74.7C840,85,960,75,1080,85.3C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                ></path>
              </svg>
              <h3
                className={`bottom-2 left-2 absolute font-extrabold font-sans text-xl`}
                style={{
                  color: programme.text,
                }}
              >
                {programme.title}
              </h3>
            </div>
            <h3 className={`font-bold font-sans text-lg`}>{programme.host}</h3>
            <p className={`font-sans`}>
              {programme.from} - {programme.to}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programmes;
