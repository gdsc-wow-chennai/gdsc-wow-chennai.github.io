import React from "react";
import { SEO } from "../components/seo";
import "../styles/global.css";

const Home = (): JSX.Element => {
  return (
    <>
      <SEO name="GDSC WoW Chennai 2023" icon="../images/favicon.png" />
      <section className="font-roboto text-red-500 text-6xl">
        Coming Soon
      </section>
    </>
  );
};

export default Home;
