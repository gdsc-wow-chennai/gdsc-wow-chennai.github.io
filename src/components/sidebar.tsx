import React from "react";
import {
  AiFillDollarCircle,
  AiFillQuestionCircle,
  AiFillTrophy,
} from "react-icons/ai";
import { IoIosHome, IoIosPeople, IoMdContact } from "react-icons/io";
import logo from "../images/icon.png";
import "../styles/global.css";

const SidebarItem = ({ children }: any) => {
  return (
    <li className={`w-full flex items-center justify-center group`}>
      <section
        className={`w-full flex items-center justify-center h-14 tablet:h-20 grayscale opacity-70 duration-200 hover:grayscale-0 hover:opacity-100 active:grayscale-0 active:opacity-100 text-4xl`}
      >
        {children}
      </section>
      {/* <span className="absolute -left-full block -z-10 bg-blue-400 text-blue-800 py-2 px-4 text-center duration-200 group-hover:left-full whitespace-nowrap">
        {label}
      </span> */}
    </li>
  );
};

const Sidebar = () => {
  return (
    <nav className=" bg-secondary-bg w-screen tablet:w-20 h-14 tablet:h-screen fixed bottom-0 left-0 right-0 tablet:shadow-[-10px_0px_17.5px_#252525] z-50 flex tablet:flex-col">
      <section className="flex justify-center items-center py-2">
        <img
          src={logo}
          alt="Wow Logo"
          width={56}
          height={56}
          className="animate-[spin_3s_linear_infinite]"
        />
      </section>
      <ul className="h-full bg-secondary-bg flex tablet:flex-col justify-center items-center outline-none relative [&>*:nth-child(2)]:hidden tablet:[&>*:nth-child(2)]:flex">
        <SidebarItem href="/#landing-section" label="Home" key="Home">
          <IoIosHome className="text-zinc-800 text-4xl my-4" />
        </SidebarItem>
        <SidebarItem href="/#about-section" label="About" key="About">
          <IoMdContact className="text-zinc-800 text-4xl my-4" />
        </SidebarItem>
        <SidebarItem href="/#speakers-section" label="Speakers" key="Speakers">
          <IoIosPeople className="text-zinc-800 text-4xl my-4" />
        </SidebarItem>
        <SidebarItem href="/#sponsors-section" label="Sponsors" key="Sponsors">
          <AiFillDollarCircle className="text-zinc-800 text-4xl my-4" />
        </SidebarItem>
        <SidebarItem
          href="/leaderboard"
          label="Leader Board"
          key="Leader Board"
        >
          <AiFillTrophy className="text-zinc-800 text-4xl my-4" />
        </SidebarItem>
        <SidebarItem href="/#faq-section" label="F.A.Q" key="F.A.Q">
          <AiFillQuestionCircle className="text-zinc-800 text-4xl my-4" />
        </SidebarItem>
      </ul>
    </nav>
  );
};

export default Sidebar;
