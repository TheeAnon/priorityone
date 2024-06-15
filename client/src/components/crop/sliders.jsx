import { FaMinus, FaPlus, FaRotateRight, FaRotateLeft } from "react-icons/fa6";
import { useImageCropContext } from "./ImageCropProvider";

export const Slider = () => {
  const {
    zoom,
    setZoom,
    handleZoomIn,
    handleZoomOut,
    max_zoom,
    min_zoom,
    zoom_step,
    handleRotateAntiCw,
    handleRotateCw,
  } = useImageCropContext();

  return (
    <div className="flex items-center justify-center gap-2 w-full text-xl">
      <button className="p-2" onClick={handleRotateAntiCw}>
        <FaRotateLeft className="text-gray-400" />
      </button>
      <button className="p-2" onClick={handleZoomOut}>
        <FaMinus className="text-gray-400" />
      </button>
      <input
        type="range"
        name="volju"
        min={min_zoom}
        max={max_zoom}
        step={zoom_step}
        value={zoom}
        onChange={(e) => {
          setZoom(Number(e.target.value));
        }}
      />
      <button className="p-2" onClick={handleZoomIn}>
        <FaPlus className="text-gray-400" />
      </button>
      <button className="p-2" onClick={handleRotateCw}>
        <FaRotateRight className="text-gray-400" />
      </button>
    </div>
  );
};
