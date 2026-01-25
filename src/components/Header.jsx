"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import NavBar from "./Nav/NavBar";
import { links } from "./Nav/links";

function Header() {
  return (
    <header className={styles.header}>
      {/* Navigation Bar */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          {/* Logo */}
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/LIASLogoNoText_1K.png"
              alt="LIAS Logo"
              width={48}
              height={48}
              className={styles.logo}
              priority
            />
            <span className={styles.logoText}>Lerman Institute</span>
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {links.map((link) => (
              <Link key={link.id} href={link.path} className={styles.navLink}>
                {link.title}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className={styles.mobileMenu}>
            <NavBar />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
