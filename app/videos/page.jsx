import React from "react";
import VideoBar from "@/src/components/VideoBar";
import styles from "../../styles/Videos.module.css";

const videos = () => {
  const featuredVideos = [
    {
      id: "tNwHYh5YbZo",
      title: "Period Table: The Elements Dance",
      desc: `Zafra Lerman, the head of the Science Institute, along with several faculty members, taught science to students through dance. Heidi Baumann Renteria, the students' dance teacher, was also a former student of the Science Institute. As a result of this colaboration, many of the dancers pursued higher education, with one even obtaining a PhD in biochemistry.  <br />Our hero falls in love with Solid, but "When she warms to him, through his fingers she runs," and when his love heats up with Liquid, "Her love escaped from him just like a vapor."`,
      studentInfo:
        "Performed by low-income and homeless middle school students from Stairway of the Stars Dance Studio in Maywood, Il.",
    },
    {
      id: "6wLCKkr_yQk",
      title: "The Bondfather",
      desc: `Following the storyline and music from the "Godfather" movie, a distraught mother beseeches Don Mendeleev (The Bondfather) for his help, explaining that her daughter, Chlorina, has fallen in love with Sodium and that, together, they have formed a crystal: ordinary table salt. She says the chemists explained that it was just a matter of time before they were "sprinkled on someone's French fries or dissolved in water." She would instead prefer her daughter to have the same relationship as she has with her husband: a covalent bond -- they share electrons, and it is a strong relationship that cannot be easily broken.`,
      studentInfo:
        "A drama written, acted, and filmed by Columbia College theatre students from Professor Zafra Lerman's class.",
    },
    {
      id: "4SiPnGJcI4A",
      title: "Love Story: Sodium & Chlorine",
      desc: `A mock Shakespearean tragedy ala Romeo and Juliet, with apologies to W. Shakespeare ("For never was a story more dark and glum, than that of Chlorine and her Sodium"). The students cast Sodium in the role of Romeo and Chlorine as Juliet. They become a couple (bonded) by Sodium giving his extra electron to Chlorine through a kiss, making her his "sweetest wife" and forming salt. The students wanted to follow Shakespeare's tragedy. Thus, Mendeleev enters the scene and orders the couple to go into the water, which breaks their bond/marriage. The dramatic presentation ends with all actors holding placards stating, "Learn to take every tragedy with a grain of ...SALT," with the couple appearing one final time together behind the word "SALT." The students who wrote and performed this play reported that they recalled this subject stronger than any other because they internalized it when writing and acting.`,
      studentInfo:
        "A drama written, acted, and filmed by Columbia College theatre students from Professor Zafra Lerman's class.",
    },
  ];

  const addVideos = [
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
      title: "Stratosphere Wars: Chlorine Strikes Back",
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
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <span className={styles.badge}>Student Productions</span>
          <h1 className={styles.pageTitle}>Science Through Creativity</h1>
          <p className={styles.pageSubtitle}>
            Watch students bring scientific concepts to life through dance, drama, and visual storytelling
          </p>
        </div>
      </section>

      {/* Featured Videos */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Featured Videos</h2>
            <p>Our most impactful student productions</p>
          </div>
          <VideoBar videos={featuredVideos} featured={true} />
        </div>
      </section>

      {/* More Projects */}
      <section className={styles.moreSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>More Student Projects</h2>
            <p>Explore the creative work of our students</p>
          </div>
          <VideoBar videos={addVideos} compact={true} />
        </div>
      </section>

      {/* Disclaimer */}
      <section className={styles.disclaimerSection}>
        <div className={styles.container}>
          <div className={styles.disclaimer}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="16" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
            <p>
              All videos were produced by students from Professor Lerman&apos;s class
              at the Science Institute, Columbia College Chicago
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default videos;
