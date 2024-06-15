import EasyCropper from "react-easy-crop";
import { useImageCropContext } from "./ImageCropProvider";

const Cropper = () => {
  const {
    image,
    zoom,
    setZoom,
    rotation,
    setRotation,
    crop,
    setCrop,
    onCropComplete,
  } = useImageCropContext();

  return (
    <EasyCropper
      image={image || undefined}
      crop={crop}
      zoom={zoom}
      rotation={rotation}
      aspect={1}
      onCropChange={setCrop}
      onCropComplete={onCropComplete}
      onZoomChange={setZoom}
      setRotation={setRotation}
      showGrid={false}
      objectFit="horizontal-cover"
      cropSize={{ width: 185, height: 185 }}
      style={{
        containerStyle: {
          height: 220,
          width: "100%",
          position: "relative",
        },
      }}
    />
  );
};

export default Cropper;
