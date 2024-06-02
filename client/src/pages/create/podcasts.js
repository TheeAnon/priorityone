import { useState } from "react";
import Header from "../../components/header";
import { axiosInstance } from "../../axiosInstance";

const CreatePodcast = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    poster: "",
    host: "",
    theme: "",
    topics: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/create/podcast/", formData);
      alert("Podcast created successfully");
      // Clear form data after successful submission
      setFormData({
        title: "",
        description: "",
        poster: "",
        host: "",
        theme: "",
        topics: "",
      });
    } catch (error) {
      alert("Failed to create podcast" + error);
    }
  };

  return (
    <div className="py-5 pt-2">
      <Header />
      <div className="mt-3 border-t-2">
        <div className="p-5">
          <h2 className="font-extrabold font-sans text-5xl">
            Publish Your Podcast
          </h2>
        </div>
        <div className="mt-4 p-5">
          <div className="grid grid-cols-2 gap-2">
            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              <input
                name="title"
                placeholder="Podcast title"
                className="p-4 bg-gray-200"
                required
                value={formData.title}
                onChange={onChange}
              />
              <textarea
                name="description"
                placeholder="A little description about your podcast"
                className="p-4 bg-gray-200"
                required
                value={formData.description}
                onChange={onChange}
              ></textarea>
              <input
                name="poster"
                placeholder="Upload a high quality poster"
                className="p-4 bg-gray-200"
                required
                value={formData.poster}
                onChange={onChange}
              />
              <input
                name="host"
                placeholder="Host"
                required
                className="p-4 bg-gray-200"
                value={formData.host}
                onChange={onChange}
              />
              <input
                name="theme"
                placeholder="Color theme"
                className="p-4 bg-gray-200"
                value={formData.theme}
                onChange={onChange}
              />
              <input
                name="topics"
                placeholder="Topics"
                className="p-4 bg-gray-200"
                value={formData.topics}
                onChange={onChange}
              />
              <button className="p-2 rounded font-bold bg-black text-white text-lg hover:bg-gray-600">
                Publish
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePodcast;
