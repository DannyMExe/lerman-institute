import React from "react";
import styles from "./Board.module.css";

const board = [
  {
    name: "Zafra Lerman",
    title: "President",
    bio: "Zafra Lerman is a chemist, educator, and humanitarian. She researched isotope effects at Cornell and Northwestern Universities in the U.S. and the ETH, Zurich, Switzerland. She has received over 40 awards for her work in education, human rights, and science diplomacy, including the 1999 Presidential Award from U.S. President Clinton, and 2005 Nyholm Prize for Education from the Royal Society of Chemistry (U.K.) <br /><br />She was honored four times by the U.S. Congress with speeches about her work in 2002, 2004, 2013, and 2019 and was nominated five times for the Nobel Peace Prize. She developed an innovative way to teach science through art, music, dance, and drama. Her work has been featured on many national and international television and media outlets.",
    image: "ZafraLerman.png",
    zafra: true,
  },
  {
    name: "Glennon Graham",
    title: "Director",
    bio: "Glennon Graham was born in Denmark, South Carolina. From this beginning, he went on to receive a Ph.D. in American History from Northwestern University. He retired from his position at Columbia College Chicago as a professor of American History and history program director. Glennon is a two-time Fulbright Scholar who spent a year in Sierra Leone and another year in Malawi. He was a member of the Westside Black History Project. Glennon devoted his life to education and especially to the underprivileged.",
    image: "GlennonGraham.jpg",
    zafra: false,
  },
  {
    name: "Lee Oberlander",
    title: "Director",
    bio: "After 40 years in the construction business, at the drafting table and on construction sites, Lee became an artist, converting his warehouse to a studio and letting the paint fly. “When I am working at my easel, I succumb to a magical mix of right-brain abstraction and heady emotions, a full-body process that is pure joy for me to experience.” Lee draws inspiration from the world around him, whether it’s the curve of a mannequin’s arm in a store window or the geometric whorl of a desert succulent. Lee’s work is rooted in a deep appreciation of the true colors of nature, Eastern philosophies, and his artist idol, David Hockney.",
    image: "LeeOberlander.jpg",
    zafra: false,
  },
  {
    name: "Benjamin Margolin",
    title: "Director",
    bio: "Ben has nearly a decade of experience improving corporate operations and working with non-profits. He began his career on Capitol Hill working for Congressman Jim Renacci, who served on the Ways & Means and Budget Committees. From there, he transitioned to being a consultant in the financial services industry and working for a Registered Investment Advisor. Finally, Ben has worked for multiple early-stage startups, scaling operations and improving efficiency. Ben and his family currently live in Boston, MA.",
    image: "BenMargolin.jpg",
    zafra: false,
  },
];

const Board = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Board of Directors</h1>
      <div className={styles.boardContainer}>
        {board.map((member, idx) => {
          return (
            <div className={styles.memberContainer} key={idx}>
              <img className={styles.image} src={`/${member.image}`} />
              <div className={styles.bioContainer}>
                <h3 className={styles.name}>{member.name}</h3>
                <h4>{member.title}</h4>
                {/* <p className={member.zafra ? styles.zafraBio : styles.bio}>
                  {member.bio}
                </p> */}
                {member.zafra ? (
                  <p
                    className={styles.zafraBio}
                    dangerouslySetInnerHTML={{ __html: member.bio }}
                  />
                ) : (
                  <p className={styles.bio}>{member.bio}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
