import React from "react";
import VideoBar from "@/src/components/VideoBar";
import styles from "../../styles/Videos.module.css";

const videos = () => {
  const videos = [
    {
      id: "tNwHYh5YbZo",
      title: "Period Table: The Elements Dance",
      desc: ``,
    },
    {
      id: "6wLCKkr_yQk",
      title: "The Bondfather",
      desc: `1997 Student Project by Rebekah Lewis & Eddie Sircher`,
    },
    {
      id: "boMp0vz_uRk",
      title: "Flatland",
      desc: "Student Project by Todd Ripplinger",
    },
    {
      id: "1dDfRW5v4bI",
      title: "Little Boy",
      desc: "Student Project by Todd Ripplinger",
    },
    {
      id: "6aYn6xjJ3jk",
      title: "The Amazing Story of Becquerel's Strange Discovery",
      desc: "2002 Student Project by Ariel Goldenberg & Omid Keshtkar",
    },
    {
      id: "JQIvWPYkDZM",
      title: "Stratosphere Wars : Chlorine Strikes Back",
      desc: "1999 Student Project by Marcus Jones",
    },
    {
      id: "TdaC5blXZtI",
      title: "Ionic Bondage",
      desc: "1999 Student Project by Joe Nelson.",
    },
    {
      id: "4SiPnGJcI4A",
      title: "Love Story : Sodium & Chlorine",
      desc: "1982 Student Project",
    },
    {
      id: "50cJKmeiRKc",
      title: "The Astounding Madame Curie Chronicles",
      desc: "2003 Student Project by Todd Ripplinger, Omid Keshtkar, Mark Phillips & Ariel Goldenberg",
    },
    {
      id: "7rB_cUls89I",
      title: "Plenty Of Ozone",
      desc: "1995 Student Project",
    },
    {
      id: "UtG9WfKgfks",
      title: "The CFCs (A Band) - A Short History",
      desc: "1993 Student Project by Greg Janssen",
    },
    {
      id: "z05Hn3jO8jI",
      title: "James Bond: Operation Neutrality",
      desc: "1999 Student Project by Ray Bieniasz & Mike Schraut",
    },
  ];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Videos</h1>
      <VideoBar videos={videos} />
    </div>
  );
};

export default videos;
