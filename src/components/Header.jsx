import React from "react";
import Link from "next/link";
import { links } from "./Nav/links";
import Logo from "../../public/LIASLogoNoText.png";
import Image from "next/image";

import styles from "./Header.module.css"; // Import the CSS module

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerMainCenter}>
        <div className={styles.logoContainer}>
          <Image src={Logo} height={50} />
        </div>
        <Link href="/" style={{ justifySelf: "center" }}>
          <h1 className={styles.siteTitle}>Lerman Institute</h1>
        </Link>
        {/* <div style={{ width: "38px" }}></div> */}
      </div>
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
