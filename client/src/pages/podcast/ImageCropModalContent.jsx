import Cropper from "../../components/crop/cropper";
import { Slider } from "../../components/crop/sliders";

const ImageCropModalContent = ({ handleDone, handleClose }) => {
  return (
    <div className="text-center relative">
      <h5 className="text-gray-800 mb-4">Crop photo</h5>
      <div className="border border-dashed border-gray-200 p-6 rounded-lg gap-4 flex flex-col relative">
        <div className="relative w-full">
          <Cropper />
        </div>
        <div className="flex flex-col gap-4">
          <Slider />
          <div className="flex gap-2 font-bold">
            <button
              className="bg-gray-200 p-2 rounded hover:bg-red-100"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              className="w-full bg-blue-400 rounded hover:bg-blue-100"
              onClick={handleDone}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCropModalContent;
