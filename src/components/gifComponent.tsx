import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const GifComponent = (): JSX.Element => {
  return (
    <>
      <section className="flex flex-auto w-full font-roboto">
        <StaticImage
          width={48}
          src={"../images/image.svg"}
          alt="SVG of an image"
          layout="fixed"
        />
      </section>
    </>
  );
};

export default GifComponent;
