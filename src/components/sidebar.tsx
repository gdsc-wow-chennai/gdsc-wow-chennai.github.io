import { Link } from "gatsby";
import React from "react";
import { IoIosHome, IoMdContact, IoIosPeople } from "react-icons/io";
import {
  AiFillDollarCircle,
  AiFillTrophy,
  AiFillQuestionCircle,
} from "react-icons/ai";
import { StaticImage } from "gatsby-plugin-image";

const SidebarItem = ({ isLogo, href, children, label }: any) => {
  return (
    <li
      className={`w-full flex items-center justify-center group ${
        isLogo && "absolute top-0 left-0 hidden tablet:flex"
      }`}
    >
      <Link
        to={href}
        className={`w-full flex items-center justify-center h-14 tablet:h-20 grayscale opacity-70 duration-200 hover:grayscale-0 hover:opacity-100 active:grayscale-0 active:opacity-100 text-4xl ${
          isLogo &&
          "self-start w-3/4 grayscale-0 opacity-100 animate-[spin_3s_linear_infinite]"
        }`}
      >
        {children}
      </Link>
      <span className="absolute -left-full block -z-10 bg-blue-400 text-blue-800 py-2 px-4 text-center duration-200 group-hover:left-full whitespace-nowrap">
        {label}
      </span>
    </li>
  );
};

const Sidebar = () => {
  return (
    <nav className=" bg-secondary-bg w-screen tablet:w-20 h-14 tablet:h-screen fixed bottom-0 left-0 right-0 shadow-[0px_10px_20px_#252525] tablet:shadow-[-10px_0px_17.5px_#252525] z-50 duration-200 flex tablet:flex-col ">
      <ul className="h-full bg-secondary-bg flex tablet:flex-col justify-center items-center outline-none relative py-4 [&>*:nth-child(2)]:hidden tablet:[&>*:nth-child(2)]:flex  ">
        <SidebarItem
          href="/#landing-section"
          label="GDSC WOW"
          key="GDSC WOW"
          isLogo
        >
          <StaticImage
            src="../images/icon.png"
            alt="Wow Logo"
            width={48}
            height={48}
          />
        </SidebarItem>
        <SidebarItem href="/#landing-section" label="Home" key="Home">
          <IoIosHome />
        </SidebarItem>
        <SidebarItem href="/#about-section" label="About" key="About">
          <IoMdContact />
        </SidebarItem>
        <SidebarItem href="/#speakers-section" label="Speakers" key="Speakers">
          <IoIosPeople />
        </SidebarItem>
        <SidebarItem href="/#sponsors-section" label="Sponsors" key="Sponsors">
          <AiFillDollarCircle />
        </SidebarItem>
        <SidebarItem
          href="/leaderboard"
          label="Leader Board"
          key="Leader Board"
        >
          <AiFillTrophy />
        </SidebarItem>
        <SidebarItem href="/#faq-section" label="F.A.Q" key="F.A.Q">
          <AiFillQuestionCircle />
        </SidebarItem>
      </ul>
    </nav>
  );
};

export default Sidebar;
