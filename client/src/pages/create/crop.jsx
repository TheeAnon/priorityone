import { useState } from "react";
import Cropper from "react-easy-crop";

export const Crop = (img) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
  };

  return (
    <Cropper
      image={img}
      crop={crop}
      zoom={zoom}
      aspect={1 / 1}
      onCropChange={setCrop}
      onCropComplete={onCropComplete}
      onZoomChange={setZoom}
    />
  );
};
