import { useState } from "react";
import Header from "../../components/header";
import { axiosInstance } from "../../axiosInstance";
import { getColor } from "color-thief-react";
import ImageUploader from "react-image-upload";
import "react-image-upload/dist/index.css";
import { Crop } from "./crop";

const CreatePodcast = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    poster: null,
    host: "",
    theme: "",
  });
  const [crop, setCrop] = useState(false);
  const [croppedImg, setCroppedImg] = useState(null);
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState({
    general: "",
    title: "",
    description: "",
    poster: "",
    host: "",
    theme: "",
  });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setLoading(true);
    if (e.target.name === "poster") {
      setFormData({ ...formData, poster: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    setLoading(false);
  };

  const getTheme = (img) => {
    const reader = new FileReader();
    reader.onload = () => {
      getColor(reader.result, "hex").then((result) => {
        const contrast = require("contrast");
        const text = contrast(result) === "light" ? "#000" : "#fff";
        setFormData({
          ...formData,
          theme: JSON.stringify({ color: result, text: text }),
        });
      });
    };
    reader.readAsDataURL(img);
  };

  const onSubmit = async (e) => {
    setLoading(true);
    setErrors({
      general: "",
      title: "",
      description: "",
      poster: "",
      host: "",
    });

    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("host", formData.host);
    data.append("description", formData.description);
    data.append("poster", formData.poster);
    data.append("theme", formData.theme);

    try {
      await axiosInstance.post("/create/podcast/", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setFormData({
        title: "",
        description: "",
        poster: null,
        host: "",
        theme: "",
      });
      setSuccess("Podcast posted successfully");
    } catch (error) {
      setErrors({ ...errors, general: "An error occured" });
    }
    setLoading(false);
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
        <div className="p-5">
          <div className="grid grid-cols-2 gap-2">
            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              <div className="flex justify-center">
                {errors.general && (
                  <span className="text-red-400">{errors.general}</span>
                )}
                {success && <span className="text-green-400">{success}</span>}
              </div>
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
                name="poster"
                placeholder="Host"
                required
                accept="image/*"
                isInvalid={errors.poster}
                className="p-4 bg-gray-200"
                onChange={(e) => {
                  onChange(e);
                }}
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
              <button
                className="p-2 rounded font-bold bg-black text-white text-lg hover:bg-gray-600 flex justify-center"
                disabled={loading}
              >
                {loading ? (
                  <div className="w-5 h-5 border rounded-full animate-spin border-t-transparent"></div>
                ) : (
                  "Publish"
                )}
              </button>
            </form>
            <div className="relative"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePodcast;
