import React from "react";
import HeroComponent from "./../components/hero";
import { SEO } from "./../components/seo";
import SideBar from "./../components/sidebar";
import GifComponent from "./../components/gifComponent";
import "../styles/global.css";

const Home = (): JSX.Element => {
  return (
    <>
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
  <>
    <title>GDSC WoW Chennai 2023</title>
    <meta name="title" content="GDSC WoW Chennai 2023" />
    <meta
      name="description"
      content="India's premier student networking event bringing the brightest future talent together."
    />
    <meta
      name="keywords"
      content="Student Networking, Google Students, GDSC"
    />
    <meta
      name="description"
      content="India's premier student networking event bringing the brightest future talent together"
    />
    <meta name="robots" content="index, follow" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="language" content="English" />
    <meta name="revisit-after" content="1 days" />
    <meta name="author" content="GoogleStudentDevelopersChennai" />
    <link rel="icon" href={"./images/icon.png"} />
    <meta property="og:image" content={"./images/icon.png"} />
  </>;
};
