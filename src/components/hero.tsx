import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const HeroComponent = (): JSX.Element => {
  return (
    <>
      <section className="w-full font-roboto">
        <StaticImage
          src="../images/iconism.png"
          alt="Our Logo"
          className="m-8"
        />
        <section className="font-portamento font-medium text-xl">
          GDSC (Wonder Of Wonders), aka GDSC WOW 2021 is a 3-day long virtual
          event consisting of a 3 days of Speaker Sessions / Live Coding / Open
          Source Projects webinars covering various topics of latest
          technologies and a Treasure Hunt game throughout the three days.
          “Treasure to WOW”. To us developers and tech enthusiasts, this is much
          more than a few workshops, it is a place where imagination meets the
          technology of tomorrow.
        </section>
      </section>
    </>
  );
};

export default HeroComponent;
