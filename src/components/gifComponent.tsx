import React from "react";
import image from "../images/image.svg";

const GifComponent = (): JSX.Element => {
  return (
    <>
      <section className="flex items-center justify-between h-full w-full font-roboto">
        <img src={image} alt="SVG of an image"/>
      </section>
    </>
  );
};

export default GifComponent;
