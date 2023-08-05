import React from "react";
import VideoBar from "@/src/components/VideoBar";
import styles from "../../styles/Videos.module.css";

const videos = () => {
  const videos = [
    {
      id: "tNwHYh5YbZo",
      title: "Period Table: The Elements Dance",
      desc: `Our hero falls in love with Solid, but “When she warms to him, through his fingers she runs,” and when his love heats up with Liquid, “Her love escaped from him just like a vapor.”`,
      studentInfo:
        "Performed by low-income and homeless middle school students from Stairway of the Stars Dance Studio in Maywood, Il. Their dance teacher, Heidi Baumann Renteria, was a student of Professor Zafra Lerman's. Many of the dancers continued to college and one even went for a PhD in biochemistry.",
    },
    {
      id: "6wLCKkr_yQk",
      title: "The Bondfather",
      desc: `Following the storyline and music from the “Godfather” movie, a distraught mother beseeches Don Mendeleev (The Bondfather) for his help, explaining that her daughter, Chlorina, has fallen in love with Sodium and that, together, they have formed a crystal: ordinary table salt. She says the chemists explained that it was just a matter of time before they were “sprinkled on someone’s French fries or dissolved in water.” She would instead prefer her daughter to have the same relationship as she has with her husband: a covalent bond -- they share electrons, and it is a strong relationship that cannot be easily broken.`,
      studentInfo:
        "A drama written, acted, and filmed by Columbia College theatre students from Professor Zafra Lerman’s class.",
    },
    {
      id: "4SiPnGJcI4A",
      title: "Love Story: Sodium & Chlorine",
      desc: "A mock Shakespearean tragedy ala Romeo and Juliet, with apologies to W. Shakespeare (“For never was a story more dark and glum, than that of Chlorine and her Sodium”). The students cast Sodium in the role of Romeo and Chlorine as Juliet. They become a couple (bonded) by Sodium giving his extra electron to Chlorine through a kiss, making her his “sweetest wife” and forming salt. The students wanted to follow Shakespeare’s tragedy. Thus, Mendeleev enters the scene and orders the couple to go into the water, which breaks their bond/marriage. The dramatic presentation ends with all actors holding placards stating, “Learn to take every tragedy with a grain of ...SALT,” with the couple appearing one final time together behind the word “SALT.” The students who wrote and performed this play reported that they recalled this subject stronger than any other because they internalized it when writing and acting.",
      studentInfo:
        "A drama written, acted, and filmed by Columbia College theatre students from Professor Zafra Lerman’s class.",
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
