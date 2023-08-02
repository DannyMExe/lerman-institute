import React, { useEffect, useState } from "react";
import Link from "next/link";
import { links } from "./Nav/links";
import Logo from "../../public/LIASLogoNoText_1K.png";
import Image from "next/image";

import styles from "./Header.module.css"; // Import the CSS module
import NavBar from "./Nav/NavBar";
import { useMediaQuery } from "react-responsive";

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const tempMobile = useMediaQuery({ maxWidth: 800 });

  useEffect(() => {
    setIsMobile(tempMobile);
  }, []);

  return (
    <div className={styles.headerContainer}>
      {/* {isMobile && <NavBar />} */}
      <div className={styles.menu}>
        <NavBar />
      </div>
      <div className={styles.headerMainCenter}>
        <div className={styles.logoContainer}>
          <Image src={Logo} height={50} />
        </div>
        <Link href="/" className={styles.titleLink}>
          <h1 className={styles.siteTitle}>
            Lerman Institute for the Advancement of Science
          </h1>
        </Link>
        {/* <div style={{ width: "38px" }}></div> */}
      </div>
      {/* {!isMobile && (
        <div className={styles.linksContainer}>
          {links.map((link, idx) => (
            <Link
              id={link.id}
              key={idx}
              href={link.path}
              target={link.id === "malta" ? "_blank" : ""}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )} */}
      <div className={styles.linksContainer}>
        {links.map((link, idx) => (
          <Link
            id={link.id}
            key={idx}
            href={link.path}
            target={link.id === "malta" ? "_blank" : ""}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
