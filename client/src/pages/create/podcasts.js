import Header from "../../components/header";

const CreatePodcast = () => {
  return (
    <div className="py-5 pt-2">
      <Header />
      <div className="mt-3 border-t-2">
        <div className="p-5">
          <h2 className="font-extrabold font-sans text-5xl">Create Podcasts</h2>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-2 gap-y-4 p-5"></div>
      </div>
    </div>
  );
};

export default CreatePodcast;
