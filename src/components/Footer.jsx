import Link from "next/link";
import React from "react";
import styles from "./Footer.module.css";
import { links } from "./Nav/links";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top Section */}
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <h3 className={styles.brandName}>Lerman Institute</h3>
            <p className={styles.brandTagline}>
              Making science accessible to all through art, music, drama, and dance.
            </p>
          </div>

          <nav className={styles.footerNav}>
            <h4>Quick Links</h4>
            <ul>
              {links.map((link) => (
                <li key={link.id}>
                  <Link href={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.contact}>
            <h4>Contact</h4>
            <a href="mailto:info@lermaninstitute.org" className={styles.email}>
              info@lermaninstitute.org
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Lerman Institute for the Advancement of Science. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
