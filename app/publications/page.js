import React from "react";
import Head from "next/head";
import styles from "./publications.module.css";

const publications = [
    {
      id: "1",
      title: "Science Education is a Human Right that Belongs to All",
      author: "Lerman, Z.",
      publisher: "Iraqi Academy Journal, Vol 1 Issue 0 No 10",
      pages: "pp. 97-102",
      url: "",
    },
    {
      id: "2",
      title: "Education, Human Rights, and Peace – Contributions to the Progress of Humanity",
      author: "Lerman, Z.",
      publisher: "Pure and Applied Chemistry, 91(2)",
      pages: "pp. 351-360",
      url: "https://www.degruyter.com/view/j/pac.2019.91.issue-2/pac-2018-0712/pac-2018-0712.xml",
    },
    {
      id: "3",
      title: "From Building Roads To Building Peace: A Woman Chemist’s Odyssey",
      author: "Lerman, Z.M.",
      publisher: "American Chemical Society, Washington, DC In Jobs, Collaborations, and Women Leaders in the Global Chemistry Enterprise; Wu, M.L.; Cheng, H.N.; Miller, B., Eds.",
      pages: "(2015) pp. 209-221",
      url: "",
    },
    {
      id: "4",
      title: "The Challenges for Chemistry Education in Africa",
      author: "Lerman, Z. M.",
      publisher: "African Journal of Chemical Education (AJCE), 4 (2)",
      pages: "(2014) pp 80-90",
      url: "",
    },
    {
      id: "5",
      title: "Human Rights, Education and Peace: A Personal Odyssey",
      author: "Lerman, Z. M.",
      publisher: "J. Chem. Educ. 90 (1)",
      pages: "(2013) pp 5-9",
      url: "",
    },
    {
      id: "6",
      title: "Creative Methods for Teaching and Learning Chemistry",
      author: "Lerman, Z. M.",
      publisher: "Stimulating Reflection and Catalysing Change in Chemistry Education",
      pages: "(Rome, Italy. 2012) pp 196-201",
      url: "",
    },
    {
      id: "7",
      title: "Using Chemistry to Bridge Gaps Between Nations",
      author: "Lerman, Z. M.",
      publisher: "15th ISCB International Conference. ICCM 2011. Published in a book on: “Chemistry for Mankind: Innovative Ideas in the Life Sciences”",
      pages: "(Nagpur, India: 2011)",
      url: "",
    },
    {
      id: "8",
      title: "Chemistry and chemical education as a bridge to peace",
      author: "Lerman, Z. M.",
      publisher: "Chemistry Education in the ICT Age, Gupta-Bhowon, M.; Jhaumeer-Laulloo, S.; Li Kam Wah, H.; Ramasami, P. (Eds.)",
      pages: "(Springer:  2009)",
      url: "",
    },
    {
      id: "9",
      title: "Using the Arts and Computer Animation to Make Chemistry Accessible to All in the 21st Century",
      author: "Lerman, Z. M.",
      publisher: "Chemistry Education in the ICT Age, Gupta-Bhowon, M.; Jhaumeer-Laulloo, S.; Li Kam Wah, H.; Ramasami, P. (Eds.)",
      pages: "(Springer:  2009)",
      url: "",
    },
    {
      id: "10",
      title: "Science Education for Students Gifted in the Arts",
      author: "Lerman, Z. M.",
      publisher: "Excellence in Education 2008: Future Minds and Creativity, T. Subhi-Yamin, editor",
      pages: "(National Library, Jordan: 2009)",
      url: "",
    },
    {
      id: "11",
      title: "Using the Arts to Make Chemistry Accessible to Everybody",
      author: "Lerman, Z. M.",
      publisher: "Studies in Philosophy, Culture & Education, (Institute for Multicultural Research, Arab Academic College for Education)",
      pages: "(Israel: 2007) pp. 149-165",
      url: "",
    },
    {
      id: "12",
      title: "Frontiers of Chemical Sciences II: Research and Education in the Middle East",
      author: "Lerman, Z. M. and Wade, J.",
      publisher: "Chemistry in Israel - Bulletin of the Israel Chemical Society, (21)",
      pages: "(Israel: 2006) pp. 21-23",
      url: "",
    },
    {
      id: "13",
      title: "Chemistry: An Inspiration for Theatre and Dance",
      author: "Lerman, Z. M.",
      publisher: "Chemical Education International, 6, 1",
      pages: "2005",
      url: "",
    },
    {
      id: "14",
      title: "Using the Arts to Make Chemistry Accessible to Everybody",
      author: "Lerman, Z. M.",
      publisher: "J. Chem. Ed., 80 (11)",
      pages: "2003, pp. 1234-1243",
      url: "",
    },
    {
      id: "15",
      title: "Citizen Chemists (book review of Claude, R. P.: Science in the Service of Human Rights)",
      author: "Lerman, Z.",
      publisher: "Chemical and Engineering News, 87 (21)",
      pages: "2003, pp. 42-43",
      url: "",
    },
    {
      id: "16",
      title: "From the Outreach Front! IAC Conference in Cuba",
      author: "Lerman, Z.",
      publisher: "J. Chem. Ed., 80 (4)",
      pages: "2003, 383",
      url: "",
    },
    {
      id: "17",
      title: "Alternative Methods to Teach and Assess Science",
      author: "Lerman, Z. M.",
      publisher: "Chemistry in Israel - Bulletin of the Israel Chemical Society, (8)",
      pages: "(Israel: 2001) pp. 4-7",
      url: "http://www.weizmann.ac.il/ICS/booklet/8/pdf/alternative.pdf",
    },
    {
      id: "18",
      title: "Innovative Methods to Guarantee Science and Technology Education for All",
      author: "Lerman, Z. M., Neul, G. A., Kostecka, K., and Caplan, M.",
      publisher: "Science and Technology Education: Preparing Future Citizens, I",
      pages: "(Paralimni, Cyprus: 2001) 13-21",
      url: "",
    },
    {
      id: "19",
      title: "Visualizing the Chemical Bond",
      author: "Lerman, Z. M.",
      publisher: "Chemical Education International. (2), 1",
      pages: "2001, pp. 6-13",
      url: "",
    },
    {
      id: "20",
      title: "Visualizing the Chemical Bond",
      author: "Lerman, Z. M.",
      publisher: "Chemical Education Journal, 5, (1), Special Issue on Pacifichem 2000",
      pages: "(2001)",
      url: "",
    },
    {
      id: "21",
      title: "Global Chemistry Education",
      author: "Lerman, Z. M.",
      publisher: "CHED Newsletter & Abstracts, American Chemical Society",
      pages: "(Washington, DC: Fall, 2000)",
      url: "",
    },
    {
      id: "22",
      title: "Chemistry for the People who will Shape our Future",
      author: "Lerman, Z.",
      publisher: "Chemical Education Journal, 4, 1, Special Issue on the 8ACC Symposium on Chemical Education",
      pages: "(2000)",
      url: "http://chem.sci.utsunomiya-u.ac.jp/v4n1/lerman/header4.html",
    },
    {
      id: "23",
      title: "Jacket notes for: Giannini, A. J.: Drug Abuse: A Family Guide to Detection, Treatment and Education",
      author: "Lerman, Z.",
      publisher: "Health Information Press",
      pages: "(Los Angeles, CA: 1999)",
      url: "",
    },
    {
      id: "24",
      title: "From Ozone to Oil Spills: Incorporating Technology into the Classroom",
      author: "Lerman, Z. M.",
      publisher: "JISTEC ‘96: Technology Education, Theory, Policy and Practice",
      pages: "(Israel: 1997)",
      url: "",
    },
    {
      id: "25",
      title: "Use of Gas Chromatography/Mass Spectroscopy in Non-Science Major Course Laboratory Experiments",
      author: "Kostecka, K. S., Lerman, Z. M., and Angelos, S. A.",
      publisher: "J. Chem. Ed., 73 (6), ",
      pages: "(1996) pp. 565-566",
      url: "",
    },
    {
      id: "26",
      title: "The Art of Teaching Science: From Textbooks and Test Tubes to Drama and Dance",
      author: "Lerman, Z. M.",
      publisher: "Proceedings from the 14th International Conference on Chemical Education",
      pages: "(Brisbane, Australia: 1996)",
      url: "",
    },
    {
      id: "27",
      title: "Creative Methods of Teaching Chemistry in the Secondary School Level",
      author: "Lerman, Z. M.",
      publisher: "Chemistry: The Key To The Future: Proceedings from the 13th International Conference on Chemical Education",
      pages: "(San Juan, Puerto Rico: 1995)",
      url: "",
    },
    {
      id: "28",
      title: "Cultural Aspects of Chemistry",
      author: "Lerman, Z. M. and Siler, T.",
      publisher: "Chemistry: The Key To The Future: Proceedings from the 13th International Conference on Chemical Education ",
      pages: "(San Juan, Puerto Rico: 1995)",
      url: "",
    },
    {
      id: "29",
      title: "Adequacy of Educational Systems to Meet Occupational Needs",
      author: "Lerman, Z. M.",
      publisher: "Proceedings of Human Resources in Science and Technology; Preparing for the 21st Century",
      pages: "(Washington, DC: 1992)",
      url: "",
    },
    {
      id: "30",
      title: "Science Education to Students with Diverse Cultural Backgrounds and Diverse Academic Interests",
      author: "Lerman, Z. M., Adams, G. E., Papacosta, P., and Wade, J. S.",
      publisher: "Selected Papers of the IOSTE 5th Symposium on World Trends in Science and Technology Education",
      pages: "(Makati, Philippines: 1990)",
      url: "",
    },
    {
      id: "31",
      title: "Chemistry in Dance, Drawing, Drama and Daily Life",
      author: "Lerman, Z. M.",
      publisher: "Science Education International, 1, (2)",
      pages: "1990",
      url: "",
    },
    {
      id: "32",
      title: "Chemistry in Dance, Drawing, Drama and Daily Life",
      author: "Lerman, Z. M.",
      publisher: "1989 ICASE YEARBOOK, Proceedings of the ICASE World Conference: CONASTA 37 on Science Education and the Quality of Life, B. Honeyman, editor: ASTA and ICASE",
      pages: "(Canberra, Australia: 1989)",
      url: "",
    },
    {
      id: "33",
      title: "Chemistry Without Tears: Teaching Chemistry Through Music, Drama, Art and Sports",
      author: "Lerman, Z. M.",
      publisher: "Science Learning in the Informal Setting Symposium Proceedings, P. Heltne and L. Marquardt, editors: The Chicago Academy of Sciences",
      pages: "(Chicago: 1988)",
      url: "",
    },
    {
      id: "34",
      title: "Energy for Art and Communication Students",
      author: "Lerman, Z. M.",
      publisher: "J. Chem. Ed., 63",
      pages: "(1986) pp. 520",
      url: "",
    },
    {
      id: "35",
      title: "Chemistry for Art and Communication Students",
      author: "Lerman, Z.",
      publisher: "J. Chem. Ed., 63, ",
      pages: "(1986) pp. 142",
      url: "",
    },
    {
      id: "36",
      title: "Chemistry for the Arts?",
      author: "Lerman, Z.",
      publisher: "Chemunity '83, 4",
      pages: "(1983) pp. 11",
      url: "",
    },
  ];
  
  

  const Publications = () => {
    return (
      <div className={styles.container}>
        <Head>
          <title>Publications</title>
        </Head>
        <h3>Selected Publications</h3>
        <div className={styles.list}>
          {publications.map((publication) => (
            <div key={publication.id} className={styles.list_item}>
              {publication.url ? (
                <a href={publication.url} target="_blank" rel="noopener noreferrer">
                  <p className={styles.title}>{publication.title}</p>
                </a>
              ) : (
                <p className={styles.title}>{publication.title}</p>
              )}
              <p>{publication.author}</p>
              <p>{publication.publisher}</p>
              <p>{publication.pages}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Publications;
