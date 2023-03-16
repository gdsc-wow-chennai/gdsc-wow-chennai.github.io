/* eslint-disable no-undef */
import React from "react";

export interface ISEOProps {
  name: string;
  image_url?: string;
  icon: string;
  children?: JSX.Element;
}

const SEO = (props: ISEOProps): JSX.Element => {
  return (
    <>
      <title>{props?.name}</title>
      <meta name="title" content="GDSC WoW Chennai 2023" />
      <meta
        name="description"
        content="India's premier student networking event bringing the brightest future talent together."
      />
      <meta
        name="keywords"
        content="Student Networking, GoogleStudents, CampusConnect"
      />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="1 days" />
      <meta name="author" content="GoogleStudentDevelopersChennai" />
      <link rel="icon" href={props?.icon} />
      <meta property="og:image" content={props?.image_url} />
      {props?.children}
    </>
  );
};

export { SEO };
