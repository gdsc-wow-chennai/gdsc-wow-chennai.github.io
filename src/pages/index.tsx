import React from "react";
import HeroComponent from "./../components/hero";
import { SEO } from "./../components/seo";
import SideBar from "./../components/sidebar";
import GifComponent from "./../components/gifComponent";
import "../styles/global.css";

const Home = (): JSX.Element => {
  return (
    <>
      <SEO
        image_url="../images/iconism.png"
        icon="../images/icon.png"
        name="GDSC WoW Chennai 2023"
      />
      <section className="min-h-screen grid grid-cols-11">
        <section className="col-start-1 col-span-1">
          <SideBar />
        </section>
        <section className="col-start-2 col-span-5 flex flex-col justify-center">
          <HeroComponent />
        </section>
        <section className="col-start-7 col-span-5">
          <GifComponent />
        </section>
      </section>
    </>
  );
};

export default Home;
export const Head = () => {
  return (
    <>
      <SEO
        image_url="../images/iconism.png"
        icon="../images/icon.png"
        name="GDSC WoW Chennai 2023"
      />
    </>
  );
};
