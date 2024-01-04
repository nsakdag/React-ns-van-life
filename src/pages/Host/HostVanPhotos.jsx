import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { currentVan } = useOutletContext();

  return (
    <img
      src={currentVan.imageUrl}
      alt="error"
      className="host-van-detail-image"
    />
  );
};

export default HostVanPhotos;
