import React from "react";
import Link from "next/link";
import styles from "../../styles/Contact.module.css";
import { FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const contactMethods = [
  {
    icon: MdEmail,
    iconClass: "emailIcon",
    label: "Email Us",
    value: "info@lermaninstitute.org",
    href: "mailto:info@lermaninstitute.org",
    external: false,
  },
  {
    icon: FaTwitter,
    iconClass: "twitterIcon",
    label: "Twitter",
    value: "@ZafraLerman",
    href: "https://twitter.com/ZafraLerman",
    external: true,
  },
  {
    icon: FaLinkedinIn,
    iconClass: "linkedinIcon",
    label: "LinkedIn",
    value: "Zafra Lerman",
    href: "https://www.linkedin.com/in/zafralerman/",
    external: true,
  },
  {
    icon: FaYoutube,
    iconClass: "youtubeIcon",
    label: "YouTube",
    value: "Lerman Institute",
    href: "https://www.youtube.com/@lermaninstitute",
    external: true,
  },
];

function ContactPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <span className={styles.badge}>Get In Touch</span>
          <h1 className={styles.pageTitle}>Contact Us</h1>
          <p className={styles.pageSubtitle}>
            Have questions about our programs or want to learn more about our mission?
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {contactMethods.map((method, idx) => {
              const IconComponent = method.icon;
              return (
                <Link
                  key={idx}
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  className={styles.contactCard}
                >
                  <div className={`${styles.iconWrapper} ${styles[method.iconClass]}`}>
                    <IconComponent className={styles.icon} />
                  </div>
                  <div className={styles.contactInfo}>
                    <span className={styles.contactLabel}>{method.label}</span>
                    <span className={styles.contactValue}>{method.value}</span>
                  </div>
                  <div className={styles.arrow}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className={styles.messageSection}>
        <div className={styles.container}>
          <div className={styles.messageCard}>
            <div className={styles.messageIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <h2>We&apos;d Love to Hear From You</h2>
            <p>
              Thank you for visiting our website! If you have any questions or
              comments about our programs, educational methods, or would like to
              collaborate with us, please feel free to reach out via email or any
              of our social media platforms. We look forward to connecting with you!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
