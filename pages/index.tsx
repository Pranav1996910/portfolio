
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Pranav Nayak - Full Stack Developer & Software Consultant</title>
        <meta name="description" content="Pranav Nayak - 7 years experienced Full Stack Developer building custom CRMs, SaaS, and enterprise applications" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>{'{ }'}</span>
          <span className={styles.logoText}>Pranav Nayak</span>
        </div>
        <div className={styles.navLinks}>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.avatarContainer}>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&auto=format"
                alt="Pranav Nayak"
                className={styles.avatar}
              />
              <div className={styles.avatarGlow}></div>
            </div>
            <h1 className={styles.heroTitle}>
              Full Stack Developer<span className={styles.accent}>.</span>
            </h1>
            <p className={styles.heroDescription}>
              7 years of experience building scalable applications. Currently at Zalando SE, 
              launching custom software solutions for businesses worldwide.
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.primaryBtn}>View My Work</button>
              <button className={styles.secondaryBtn}>Get in Touch</button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.codeBlock}>
              <div className={styles.codeHeader}>
                <div className={styles.codeDots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className={styles.codeTitle}>portfolio.js</span>
              </div>
              <div className={styles.codeContent}>
                <div className={styles.codeLine}>
                  <span className={styles.keyword}>const</span> 
                  <span className={styles.variable}> developer</span> 
                  <span className={styles.operator}> = </span>
                  <span className={styles.string}>{'{'}</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.property}>  name:</span> 
                  <span className={styles.string}>'Pranav Nayak'</span>,
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.property}>  experience:</span> 
                  <span className={styles.number}>7</span>,
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.property}>  currentRole:</span> 
                  <span className={styles.string}>'Zalando SE'</span>,
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.property}>  specializes:</span> 
                  <span className={styles.string}>['CRM', 'SaaS']</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.string}>{'}'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="about" className={styles.section}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <p>
                With 7 years of full-stack development experience across 4 companies, 
                I specialize in building robust, scalable applications that solve real business problems.
              </p>
              <p>
                Currently at Zalando SE, I'm preparing to launch my own consultancy focused on 
                delivering custom CRMs, SaaS platforms, and enterprise software solutions.
              </p>
            </div>
            <div className={styles.techStack}>
              <h3>Tech Stack</h3>
              <div className={styles.techGrid}>
                <span className={styles.techItem}>React</span>
                <span className={styles.techItem}>Node.js</span>
                <span className={styles.techItem}>TypeScript</span>
                <span className={styles.techItem}>Python</span>
                <span className={styles.techItem}>PostgreSQL</span>
                <span className={styles.techItem}>AWS</span>
                <span className={styles.techItem}>Docker</span>
                <span className={styles.techItem}>Next.js</span>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <div className={styles.experienceTimeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}></div>
              <div className={styles.timelineContent}>
                <h3>Senior Full Stack Developer</h3>
                <h4>Zalando SE - Current</h4>
                <p>Leading development of scalable e-commerce solutions serving millions of users across Europe.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}></div>
              <div className={styles.timelineContent}>
                <h3>Full Stack Developer</h3>
                <h4>Previous Companies (3 roles)</h4>
                <p>Built enterprise applications, APIs, and user interfaces for various industries including fintech and healthcare.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className={styles.section}>
          <h2 className={styles.sectionTitle}>Services</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🔧</div>
              <h3>Custom CRM Development</h3>
              <p>Tailored customer relationship management systems designed for your specific business needs.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>☁️</div>
              <h3>SaaS Applications</h3>
              <p>End-to-end SaaS platform development with modern architecture and scalable infrastructure.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>💻</div>
              <h3>Full Stack Development</h3>
              <p>Complete web application development from database design to responsive frontend interfaces.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>⚡</div>
              <h3>Legacy System Modernization</h3>
              <p>Transform outdated systems into modern, efficient applications with improved performance.</p>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <h2 className={styles.sectionTitle}>Let's Work Together</h2>
          <div className={styles.contactContent}>
            <p className={styles.contactDescription}>
              Ready to transform your business with custom software solutions? 
              Let's discuss your project requirements.
            </p>
            <div className={styles.contactButtons}>
              <button className={styles.primaryBtn}>Schedule a Call</button>
              <button className={styles.secondaryBtn}>Send Message</button>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Pranav Nayak. Building the future, one application at a time.</p>
      </footer>
    </div>
  );
};

export default Home;
