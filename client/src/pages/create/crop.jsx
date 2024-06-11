import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "./cropImage"; // Helper function to crop the image

export const Crop = ({ img, onCropComplete }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onCropCompleteInternal = useCallback(
    async (croppedArea, croppedAreaPixels) => {
      try {
        const croppedImage = await getCroppedImg(img, croppedAreaPixels);
        onCropComplete(croppedImage);
      } catch (e) {
        console.error(e);
      }
    },
    [img, onCropComplete]
  );

  return (
    <Cropper
      image={URL.createObjectURL(img)}
      crop={crop}
      zoom={zoom}
      aspect={1 / 1}
      onCropChange={setCrop}
      onCropComplete={onCropCompleteInternal}
      onZoomChange={setZoom}
    />
  );
};
