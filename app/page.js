import styles from "../styles/Page.module.css";

const HomePage = () => {
  return (
    <div className={styles.mainContainer}>
      {/* <h1 className={styles.title}>
        Lerman Institute for the Advancement of Science
      </h1> */}
      <h3 className={styles.quote}>
        &quot;I hear and I forget;
        <br /> I see and I remember; <br />I do and I understand.&quot;
      </h3>
      <p className={styles.quoteAuthor}>Chinese proverb</p>
      <p className={styles.description}>
        The Lerman Institute believes strongly in this proverb, that is why we
        incorporate visualization and art in the teaching of science. Students
        remember and understand abstract scientific concepts best by creating
        their own artistic projects. Through this process, students take an
        active role in the learning process, instead of only being passive
        observers. The students can produce visualization projects using the
        media of their choice, from computer animation (High Tech) to dance and
        drama (No Tech). These projects can be used as an alternative assessment
        method. This method has been proven successful with underprivileged
        students around the globe.
      </p>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src="/polution.jpg"
          alt="A Student's art on pollution"
        />
        <p className={styles.imageDesc}>
          Artwork showing a world ruined by pollution <br />
          <span className={styles.imageDescSpan}>
            painted by a student in Professor Zafra Lerman's class at the
            Science Institute, Columbia College
          </span>
        </p>
      </div>
      <p className={styles.description}>
        The 21st Century is truly the century of science and technology. If we
        will not make science and technology accessible to all, we will form a
        two-class society, divided not by royalty or economic status, but by
        knowledge of science and technology. It is my tenet in life that science
        education is a human right that belongs to all. Therefore, it is
        essential that we employ every method possible to make chemistry
        accessible to all in the 21st Century.
      </p>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src="/societyDivided.png"
          alt="Drawing respresenting High tech and no tech societies divided"
        />
        <p className={styles.imageDesc}>
          A two class society
          <br />
          <span className={styles.imageDescSpan}>
            drawn by a student in Professor Zafra Lerman's class at the Science
            Institute, Columbia College
          </span>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
