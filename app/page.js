import styles from "../styles/Page.module.css";
import Link from "next/link";

const HomePage = () => {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeIcon}>&#9733;</span>
            Science Education Through Arts
          </div>
          <h1 className={styles.heroTitle}>
            Lerman Institute for the
            <span className={styles.heroTitleAccent}> Advancement of Science</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Making science accessible to all through the integration of art, music, drama, and dance
          </p>
          <div className={styles.heroButtons}>
            <Link href="/videos" className={styles.primaryButton}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              Watch Our Videos
            </Link>
            <Link href="/board" className={styles.secondaryButton}>
              Meet Our Team
            </Link>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel}></div>
          </div>
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* Quote Section */}
      <section className={styles.quoteSection}>
        <div className={styles.container}>
          <div className={styles.quoteCard}>
            <blockquote className={styles.quote}>
              <span className={styles.quoteIcon}>&ldquo;</span>
              I hear and I forget; I see and I remember; I do and I understand.
              <span className={styles.quoteIconEnd}>&rdquo;</span>
            </blockquote>
            <cite className={styles.quoteAuthor}>
              <span className={styles.authorLine}></span>
              Chinese Proverb
            </cite>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Our Mission</span>
            <h2 className={styles.sectionTitle}>
              Science Education Through <span>Creative Expression</span>
            </h2>
          </div>
          <div className={styles.missionContent}>
            <p className={styles.missionText}>
              The Lerman Institute believes strongly in this proverb, which is why we
              incorporate visualization and art in science teaching. Students remember
              and understand abstract scientific concepts best by creating their own
              artistic projects.
            </p>
            <p className={styles.missionText}>
              Through this process, students actively participate in the learning
              process instead of only being passive observers. The students can produce
              visualization projects using the media of their choice, from computer
              animation (High Tech) to dance and drama (No Tech).
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>Multi-Sensory Learning</h3>
              <p>Engaging all senses through art, music, dance, and drama to reinforce scientific concepts</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h3>Global Impact</h3>
              <p>Proven successful with underprivileged students around the globe</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Inclusive Education</h3>
              <p>Making science accessible to all, regardless of background or learning style</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Work Gallery */}
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Student Creativity</span>
            <h2 className={styles.sectionTitle}>
              Art Meets <span>Science</span>
            </h2>
          </div>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryItem}>
              <div className={styles.galleryImageWrapper}>
                <img
                  src="/polution.jpg"
                  alt="Student artwork depicting environmental pollution"
                  className={styles.galleryImage}
                />
                <div className={styles.galleryOverlay}>
                  <span>View Artwork</span>
                </div>
              </div>
              <div className={styles.galleryCaption}>
                <h4>Environmental Awareness</h4>
                <p>A world affected by pollution, painted by a student in Professor Zafra Lerman&apos;s class</p>
              </div>
            </div>
            <div className={styles.galleryItem}>
              <div className={styles.galleryImageWrapper}>
                <img
                  src="/societyDivided.png"
                  alt="Drawing representing technological divide in society"
                  className={styles.galleryImage}
                />
                <div className={styles.galleryOverlay}>
                  <span>View Artwork</span>
                </div>
              </div>
              <div className={styles.galleryCaption}>
                <h4>Digital Divide</h4>
                <p>High-tech vs. no-tech society, drawn by a student at the Science Institute</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className={styles.visionSection}>
        <div className={styles.container}>
          <div className={styles.visionContent}>
            <div className={styles.visionIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <h2 className={styles.visionTitle}>Our Vision for the 21st Century</h2>
            <p className={styles.visionText}>
              The 21st century is indeed the century of science and technology. If we do not
              make science and technology accessible to all, we will form a two-class society,
              divided not by royalty or economic status but by knowledge of science and technology.
            </p>
            <p className={styles.visionHighlight}>
              &ldquo;Science education is a human right that belongs to all.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>See Our Teaching Methods in Action</h2>
            <p>Watch students bring scientific concepts to life through dance, drama, and visual arts</p>
            <Link href="/videos" className={styles.ctaButton}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              Explore Our Videos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
