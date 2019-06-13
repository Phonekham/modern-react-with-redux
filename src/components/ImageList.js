import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = props => {
  //   console.table(props.images);
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
