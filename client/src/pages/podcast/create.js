import { useState } from "react";
import Header from "../../components/header";
import { axiosInstance } from "../../axiosInstance";
import Modal from "../../components/modal";
import { readFile } from "../../components/crop/cropImage";
import ImageCropModalContent from "./ImageCropModalContent.jsx";
import { useImageCropContext } from "../../components/crop/ImageCropProvider.jsx";
import { InputComponent } from "../../components/input.jsx";
import { FaMicrophone, FaRegLightbulb } from "react-icons/fa6";
import {
  IoCalendarOutline,
  IoNotificationsOutline,
  IoRocketOutline,
  IoSearch,
} from "react-icons/io5";
import { LuPartyPopper } from "react-icons/lu";
import { Footer } from "../../components/footer.jsx";

const CreatePodcast = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    poster: null,
    host: "",
  });
  const [openModal, setOpenModal] = useState(false);
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState({
    general: "",
    title: "",
    description: "",
    poster: "",
    host: "",
  });
  const [loading, setLoading] = useState(false);

  const { getProcessedImage, setImage, resetStates } = useImageCropContext();

  const onChange = async (e) => {
    if (e.target.name === "poster") {
      setFormData({ ...formData, poster: e.target.files[0] });

      const file = e.target.files && e.target.files[0];
      const imageDataUrl = await readFile(file);
      setImage(imageDataUrl);

      setOpenModal(true);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const [preview, setPreview] = useState();

  const handleDone = async () => {
    const avatar = await getProcessedImage();
    setFormData({ ...formData, poster: avatar });
    setPreview(window.URL.createObjectURL(avatar));
    resetStates();
    setOpenModal(false);
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
    data.append("poster", formData.poster);

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
      setPreview(null);
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
      <div className="mt-3 border-t-2 flex flex-col gap-4">
        <div className="p-5">
          <div className="grid grid-cols-2 gap-2 flex-row-reverse">
            <form
              onSubmit={onSubmit}
              className="bg-gray-50 flex flex-col gap-4 bg-white-opacity-20 border border-white-opacity-30 rounded-lg backdrop-filter backdrop-blur-lg shadow-glass p-5"
            >
              <div className="">
                <h2 className="font-light font-sans lg:text-2xl">
                  Publish Your Podcast
                </h2>
              </div>
              <InputComponent
                name="title"
                placeholder="Podcast title"
                className="bg-gray-200 font-bold"
                required
                isInvalid={errors.title}
                value={formData.title}
                onChange={onChange}
              />
              <textarea
                name="description"
                placeholder="A little description about your podcast"
                className="w-full rounded p-3 border text-black bg-gray-200"
                rows={3}
                required
                isInvalid={errors.description}
                value={formData.description}
                onChange={onChange}
              ></textarea>
              <InputComponent
                type="file"
                name="poster"
                placeholder="Choose a poster for your podcast"
                required
                accept="image/*"
                isInvalid={errors.poster}
                className="w-full rounded p-3 border text-black bg-gray-200"
                onChange={onChange}
              />
              <InputComponent
                name="host"
                placeholder="Host"
                required={true}
                isInvalid={errors.host}
                className="bg-gray-200 font-semibold"
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
            <div className="flex flex-col gap-4 bg-white-opacity-20 border border-white-opacity-30 rounded-lg backdrop-filter backdrop-blur-lg shadow-glass p-5">
              <span className="flex gap-2 p-2 items-center bg-orange-50">
                <FaRegLightbulb size={30} />
                Ensure your poster is high resolution, well-lit, and consistent
                with your podcast branding.
              </span>
              <div className="flex flex-col gap-2">
                <h2 className="font-bold">Wishing You Success</h2>
                <p>
                  We wish you great success with your podcast and look forward
                  to seeing your content inspire and engage listeners. Remember,
                  every great podcast starts with a single idea. Keep pushing
                  your creativity and passion forward!
                </p>
                <p className="italic mt-auto">
                  “Your voice matters. Speak up and let the world hear your
                  story.”
                </p>
              </div>
            </div>
            {openModal && (
              <Modal open={openModal} handleClose={() => setOpenModal(false)}>
                <ImageCropModalContent
                  handleDone={handleDone}
                  handleClose={() => setOpenModal(false)}
                />
              </Modal>
            )}
          </div>
          <hr className="my-8" />
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold flex gap-2 items-center">
              Our Podcast Review Process <FaMicrophone />
            </h1>
            <p>
              All podcasts undergo review before they are aired. this is how we
              do it:
            </p>
            <div className="grid grid-cols-3 gap-2">
              <div className="rounded border">
                <h2 className="text-lg font-semibold bg-gray-200 p-2 flex gap-2 items-center">
                  1. Submission <IoRocketOutline />
                </h2>
                <p className="text-gray-700 p-2">
                  You submit your podcast via our super easy Publish Podcast
                  page. Just fill in the details and upload your files. We can’t
                  wait to hear what you’ve got!
                </p>
              </div>
              <div className="rounded border">
                <h2 className="text-lg font-semibold bg-gray-200 p-2 flex gap-2 items-center">
                  2. Review <IoSearch />
                </h2>
                <p className="text-gray-700 p-2">
                  Our team listens to your podcast and reviews the content.
                  We’re looking to make sure it meets our community guidelines.
                  We'll the audio quality to make sure your listeners get the
                  best experience. We also check that your podcast poster is on
                  point and ready to impress.
                </p>
              </div>
              <div className="rounded border">
                <h2 className="text-lg font-semibold bg-gray-200 p-2 flex gap-2 items-center">
                  3. Feedback <IoNotificationsOutline />
                </h2>
                <p className="text-gray-700 p-2">
                  We will notify you of the outcome through mail and in app. If
                  there are any tweaks needed, we’ll let you know and how to
                  handlle it.
                </p>
              </div>
              <div className="rounded border">
                <h2 className="text-lg font-semibold bg-gray-200 p-2 flex gap-2 items-center">
                  4. Approval and Scheduling <IoCalendarOutline />
                </h2>
                <p className="text-gray-700 p-2">
                  After your podcast gets the green light, we’ll schedule it for
                  publication. You’ll receive a notification with the date and
                  time it’ll go live.
                </p>
              </div>
              <div className="rounded border">
                <h2 className="text-lg font-semibold bg-gray-200 p-2 flex gap-2 items-center">
                  5. Publication <LuPartyPopper />
                </h2>
                <p className="text-gray-700 p-2">
                  Your podcast goes live! We’ll also kick off some promotional
                  activities to help spread the word and get those listeners
                  tuning in.
                </p>
              </div>
              <div className="rounded border">
                <p className="text-gray-700 p-2">
                  We’re here to help make your podcasting journey smooth and
                  enjoyable. Happy podcasting!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreatePodcast;
