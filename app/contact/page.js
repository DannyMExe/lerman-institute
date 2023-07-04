import React from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/Contact.module.css"; // Import the CSS module
import { FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function ContactPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
      </Head>
      <h1>Contact</h1>
      <p>
        Thank you for visiting our website! If you have any questions or
        comments, We'd love to hear from you. Please feel free to reach out via
        email or any of my social media platforms. We look forward to connecting
        with you!
      </p>
      <div className={styles.contactContainer}>
        <Link href="mailto:info@lermaninstitute.org">
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <MdEmail className={styles.emailIcon} />
            </div>
            info@lermaninstitute.org
          </div>
        </Link>
        {/* <Link
          href="https://twitter.com/ZafraLerman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <FaTwitter className={styles.twitterIcon} />
            </div>
            @ZafraLerman
          </div>
        </Link>
        <Link
          href="https://www.linkedin.com/in/zafralerman/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <FaLinkedinIn className={styles.linkedinIcon} />
            </div>
            Zafra Lerman
          </div>
        </Link> */}
        <Link
          href="https://www.youtube.com/@lermaninstitute"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <FaYoutube className={styles.youtubeIcon} />
            </div>
            Lerman Institute
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ContactPage;
