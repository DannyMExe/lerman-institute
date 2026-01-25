import React from "react";
import styles from "./publications.module.css";
import Link from "next/link";

const publications = [
  { id: "0", title: "The Strength To Resist: What gives people the conviction to dissent?", author: "Fagan, A.", publisher: "Psychology Today", pages: "November 2023", url: "https://www.psychologytoday.com/us/articles/202311/the-strength-to-resist" },
  { id: "1", title: "Science Education is a Human Right that Belongs to All", author: "Lerman, Z.", publisher: "Iraqi Academy Journal, Vol 1 Issue 0 No 10", pages: "pp. 97-102", url: "" },
  { id: "2", title: "Education, Human Rights, and Peace – Contributions to the Progress of Humanity", author: "Lerman, Z.", publisher: "Pure and Applied Chemistry, 91(2)", pages: "pp. 351-360", url: "https://www.degruyter.com/view/j/pac.2019.91.issue-2/pac-2018-0712/pac-2018-0712.xml" },
  { id: "3", title: "From Building Roads To Building Peace: A Woman Chemist's Odyssey", author: "Lerman, Z.M.", publisher: "American Chemical Society, Washington, DC", pages: "(2015) pp. 209-221", url: "" },
  { id: "4", title: "The Challenges for Chemistry Education in Africa", author: "Lerman, Z. M.", publisher: "African Journal of Chemical Education (AJCE), 4 (2)", pages: "(2014) pp 80-90", url: "" },
  { id: "5", title: "Human Rights, Education and Peace: A Personal Odyssey", author: "Lerman, Z. M.", publisher: "J. Chem. Educ. 90 (1)", pages: "(2013) pp 5-9", url: "" },
  { id: "6", title: "Creative Methods for Teaching and Learning Chemistry", author: "Lerman, Z. M.", publisher: "Stimulating Reflection and Catalysing Change in Chemistry Education", pages: "(Rome, Italy. 2012) pp 196-201", url: "" },
  { id: "7", title: "Using Chemistry to Bridge Gaps Between Nations", author: "Lerman, Z. M.", publisher: "15th ISCB International Conference", pages: "(Nagpur, India: 2011)", url: "" },
  { id: "8", title: "Chemistry and chemical education as a bridge to peace", author: "Lerman, Z. M.", publisher: "Chemistry Education in the ICT Age", pages: "(Springer: 2009)", url: "" },
  { id: "9", title: "Using the Arts and Computer Animation to Make Chemistry Accessible to All", author: "Lerman, Z. M.", publisher: "Chemistry Education in the ICT Age", pages: "(Springer: 2009)", url: "" },
  { id: "10", title: "Science Education for Students Gifted in the Arts", author: "Lerman, Z. M.", publisher: "Excellence in Education 2008: Future Minds and Creativity", pages: "(National Library, Jordan: 2009)", url: "" },
  { id: "11", title: "Using the Arts to Make Chemistry Accessible to Everybody", author: "Lerman, Z. M.", publisher: "Studies in Philosophy, Culture & Education", pages: "(Israel: 2007) pp. 149-165", url: "" },
  { id: "12", title: "Frontiers of Chemical Sciences II: Research and Education in the Middle East", author: "Lerman, Z. M. and Wade, J.", publisher: "Chemistry in Israel", pages: "(Israel: 2006) pp. 21-23", url: "" },
  { id: "13", title: "Chemistry: An Inspiration for Theatre and Dance", author: "Lerman, Z. M.", publisher: "Chemical Education International, 6, 1", pages: "2005", url: "" },
  { id: "14", title: "Using the Arts to Make Chemistry Accessible to Everybody", author: "Lerman, Z. M.", publisher: "J. Chem. Ed., 80 (11)", pages: "2003, pp. 1234-1243", url: "" },
  { id: "17", title: "Alternative Methods to Teach and Assess Science", author: "Lerman, Z. M.", publisher: "Chemistry in Israel", pages: "(Israel: 2001) pp. 4-7", url: "http://www.weizmann.ac.il/ICS/booklet/8/pdf/alternative.pdf" },
  { id: "19", title: "Visualizing the Chemical Bond", author: "Lerman, Z. M.", publisher: "Chemical Education International. (2), 1", pages: "2001, pp. 6-13", url: "" },
  { id: "21", title: "Global Chemistry Education", author: "Lerman, Z. M.", publisher: "CHED Newsletter & Abstracts, American Chemical Society", pages: "(Washington, DC: Fall, 2000)", url: "" },
  { id: "26", title: "The Art of Teaching Science: From Textbooks and Test Tubes to Drama and Dance", author: "Lerman, Z. M.", publisher: "14th International Conference on Chemical Education", pages: "(Brisbane, Australia: 1996)", url: "" },
  { id: "31", title: "Chemistry in Dance, Drawing, Drama and Daily Life", author: "Lerman, Z. M.", publisher: "Science Education International, 1, (2)", pages: "1990", url: "" },
  { id: "33", title: "Chemistry Without Tears: Teaching Chemistry Through Music, Drama, Art and Sports", author: "Lerman, Z. M.", publisher: "Science Learning in the Informal Setting Symposium", pages: "(Chicago: 1988)", url: "" },
  { id: "35", title: "Chemistry for Art and Communication Students", author: "Lerman, Z.", publisher: "J. Chem. Ed., 63", pages: "(1986) pp. 142", url: "" },
];

const Publications = () => {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <span className={styles.badge}>Research & Writing</span>
          <h1 className={styles.pageTitle}>Selected Publications</h1>
          <p className={styles.pageSubtitle}>
            Decades of research on science education, human rights, and innovative teaching methods
          </p>
        </div>
      </section>

      {/* Publications List */}
      <section className={styles.publicationsSection}>
        <div className={styles.container}>
          <div className={styles.publicationsList}>
            {publications.map((pub, idx) => (
              <article key={pub.id} className={styles.publicationCard}>
                <div className={styles.pubNumber}>{String(idx + 1).padStart(2, '0')}</div>
                <div className={styles.pubContent}>
                  <h3 className={styles.pubTitle}>
                    {pub.url ? (
                      <Link href={pub.url} target="_blank" rel="noopener noreferrer" className={styles.pubLink}>
                        {pub.title}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      </Link>
                    ) : (
                      pub.title
                    )}
                  </h3>
                  <div className={styles.pubMeta}>
                    <span className={styles.pubAuthor}>{pub.author}</span>
                    <span className={styles.pubDivider}>|</span>
                    <span className={styles.pubPublisher}>{pub.publisher}</span>
                    <span className={styles.pubPages}>{pub.pages}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.moreInfo}>
            <p>This is a selection of key publications. The complete bibliography includes over 35 publications spanning from 1983 to 2023.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Publications;
