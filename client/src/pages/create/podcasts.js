import { useState } from "react";
import Header from "../../components/header";
import { axiosInstance } from "../../axiosInstance";
import { Crop } from "./crop";

const CreatePodcast = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    poster: null,
    host: "",
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
  });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    if (e.target.name === "poster") {
      setFormData({ ...formData, poster: e.target.files[0] });
      setCrop(true);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const onCropComplete = (croppedImage) => {
    setCroppedImg(croppedImage);
    setCrop(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({
      general: "",
      title: "",
      description: "",
      poster: "",
      host: "",
    });
    setSuccess("");

    const data = new FormData();
    data.append("title", formData.title);
    data.append("host", formData.host);
    data.append("description", formData.description);
    if (croppedImg) {
      data.append("poster", croppedImg, formData.poster.name); // Add cropped image to formData
    } else {
      data.append("poster", formData.poster);
    }

    try {
      await axiosInstance.post("/podcast/create/", data, {
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
      setErrors({
        ...errors,
        general: `An error occurred, could not post your podcast`,
      });
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
                className="w-full rounded p-3 border text-lg placeholder:text-lg text-black font-bold"
                required
                isInvalid={errors.title}
                value={formData.title}
                onChange={onChange}
              />
              <textarea
                name="description"
                placeholder="A little description about your podcast"
                className="w-full rounded p-3 border text-black"
                rows={3}
                required
                isInvalid={errors.description}
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
                className="w-full rounded p-3 border text-black font-bold"
                onChange={onChange}
              />
              <input
                name="host"
                placeholder="Host"
                required
                isInvalid={errors.host}
                className="w-full rounded p-3 border text-black font-bold"
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
            <div className="relative">
              {crop && formData.poster ? (
                <Crop img={formData.poster} onCropComplete={onCropComplete} />
              ) : (
                formData.poster && (
                  <img
                    src={URL.createObjectURL(formData.poster)}
                    alt="Poster Preview"
                    className="w-full h-auto"
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePodcast;
