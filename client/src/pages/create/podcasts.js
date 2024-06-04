import { useState } from "react";
import Header from "../../components/header";
import { axiosInstance } from "../../axiosInstance";
import { getColor } from "color-thief-react";

const CreatePodcast = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    poster: null, // null to handle file object
    host: "",
    theme: "",
    topics: "",
  });
  const [success, setSuccess] = useState("");

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    poster: "",
    host: "",
  });

  const onChange = (e) => {
    if (e.target.name === "poster") {
      setFormData({ ...formData, poster: e.target.files[0] }); // Handle file input
      console.log(formData.poster + e.target.files[0]);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    if (formData.poster) {
      data.append("poster", formData.poster); // Append file to FormData
    }
    data.append("host", formData.host);
    data.append("theme", formData.theme);
    data.append("topics", formData.topics);

    try {
      await axiosInstance.post("/create/podcast/", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // Clear form data after successful submission
      setFormData({
        title: "",
        description: "",
        poster: null,
        host: "",
        theme: "",
        topics: "",
      });
      setSuccess("Podcast posted successfully");
    } catch (error) {
      alert("Failed to create podcast: " + error.message);
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
        {success && (
          <span className="text-green-400 place-self-center">{success}</span>
        )}
        <div className="p-5">
          <div className="grid grid-cols-2 gap-2">
            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              <input
                name="title"
                placeholder="Podcast title"
                className="p-4 bg-gray-200"
                required
                isInvalid={errors.title}
                value={formData.title}
                onChange={onChange}
              />
              <textarea
                name="description"
                placeholder="A little description about your podcast"
                className="p-4 bg-gray-200"
                required
                isInvalid={errors.title}
                value={formData.description}
                onChange={onChange}
              ></textarea>
              <input
                type="file"
                accept="image/jpeg,image/png,image/gif"
                name="poster"
                required
                isInvalid={errors.poster}
                onChange={onChange}
              />
              <input
                name="host"
                placeholder="Host"
                required
                isInvalid={errors.host}
                className="p-4 bg-gray-200"
                value={formData.host}
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
