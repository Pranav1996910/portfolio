
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FaLinkedin } from "react-icons/fa";
import Image from 'next/image'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Pranav Nayak - Full Stack Developer & Software Consultant</title>
        <meta name="description" content="Pranav Nayak - 7 years experienced Full Stack Developer building custom CRMs, SaaS, and enterprise applications" />
        <link rel="icon" href="/developer.png" />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>{'{ }'}</span>
          <span className={styles.logoText}>Pranav Nayak</span>
        </div>
        <div className={styles.navLinks}>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <button className={styles.mobileMenuButton}>
          ☰
        </button>
      </nav>

      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.avatarContainer}>
              <Image
                src="./pranav.png"
                alt="Pranav Nayak"
                className={styles.avatar}
              />
            </div>
            <h1 className={styles.heroTitle}>
              Full Stack Developer
            </h1>
            <div className={styles.heroButtons}>
              <a href="./cv.pdf" target="_blank" className={styles.primaryBtn}>My Resume</a>
              <a href="mailto:pranavjayanayak@gmail.com" className={styles.secondaryBtn}>Get in Touch</a>
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
                <div className={styles.codeLineSpace}>
                  <span className={styles.property}>  name:</span>
                  <span className={styles.string}> &apos;Pranav Nayak&apos;</span>,
                </div>
                <div className={styles.codeLineSpace}>
                  <span className={styles.property}>  experience:</span>
                  <span className={styles.number}> 7</span>,
                </div>
                <div className={styles.codeLineSpace}>
                  <span className={styles.property}>  currentRole:</span>
                  <span className={styles.string}> &apos;Software Engineer&apos;</span>,
                </div>
                <div className={styles.codeLineSpace}>
                  <span className={styles.property}>  specializes:</span>
                  <span className={styles.string}> [&apos;CRM&apos;, &apos;SaaS&apos;, &apos;Full Stack Development&apos;]</span>
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
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <p>
                Specialized in building robust, scalable applications that solve real business problems.
                With a master&apos;s degree in Applied Computer Science.
                Skilled in all stages of the development lifecycle for dynamic web projects.
              </p>
              <p>
                Currently at Zalando SE, I am preparing to launch my own consultancy focused on delivering custom CRMs, SaaS platforms, and enterprise software solutions.
                Custom softwares to help businesses with their day-to-day needs.
              </p>
              <p>Building the future one application at a time.
              </p>
            </div>
            <div className={styles.techStack}>
              <h3>Expertise</h3>
              <div className={styles.techGrid}>
                <span className={styles.techItem}>Node.js</span>
                <span className={styles.techItem}>React</span>
                <span className={styles.techItem}>TypeScript</span>
                <span className={styles.techItem}>Python</span>
                <span className={styles.techItem}>PostgreSQL</span>
                <span className={styles.techItem}>MongoDB</span>
                <span className={styles.techItem}>Docker</span>
                <span className={styles.techItem}>Monitoring</span>
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
                <h3>Software Engineer</h3>
                <h4>Zalando SE - Current</h4>
                <p>Leading development of scalable logistics solutions that help with transport planning and execution of a multi-billion dollar company.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}></div>
              <div className={styles.timelineContent}>
                <h3>Full Stack Developer</h3>
                <h4>SAP</h4>
                <p>Leading development of internal content management tool for SAP Learning Hub</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}></div>
              <div className={styles.timelineContent}>
                <h3>Web Developer</h3>
                <h4>Luxeveda Pvt Ltd</h4>
                <p>Building web and mobile applications</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}></div>
              <div className={styles.timelineContent}>
                <h3>Systems Engineer</h3>
                <h4>Infosys Pvt Ltd</h4>
                <p>Development of invoicing tools for PricewaterhouseCoopers(PwC)</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className={styles.section}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <div className={styles.projectsGrid}>
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <div className={styles.projectPlaceholder}>
                  <Image className={styles.projectgifs} alt="my project" src="./project2.gif" />
                </div>
              </div>
              <div className={styles.projectContent}>
                <h3>Online dating platform</h3>
                <p>Two-Souls is a geo based dating platform with dating categories like blind dates, bffs, new to city etc...</p>
                <div className={styles.projectTech}>
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>Docker</span>
                </div>
              </div>
            </div>

            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <div className={styles.projectPlaceholder}>
                  <Image className={styles.projectgifs} alt="my project" src="./project3.gif" />
                </div>
              </div>
              <div className={styles.projectContent}>
                <h3>E-Learning Platform</h3>
                <p>E-Shikshan is an online educational platform with the motive that everyone deserves good education.</p>
                <div className={styles.projectTech}>
                  <span>React</span>
                  <span>MySQL</span>
                  <span>Docker</span>
                </div>
              </div>
            </div>

            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <div className={styles.projectPlaceholder}>
                  <Image className={styles.projectgifs} alt="my project" src="./gift-store.gif" />
                </div>
              </div>
              <div className={styles.projectContent}>
                <h3>Physical Gift Store</h3>
                <p>Multi lingual offline gift store application for inventory management and billing</p>
                <div className={styles.projectTech}>
                  <span>.Net</span>
                  <span>WPF</span>
                  <span>XAML</span>
                </div>
              </div>
            </div>

            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <div className={styles.projectPlaceholder}>
                  <Image className={styles.projectgifs} alt="my project" src="./uni.gif" />
                </div>
              </div>
              <div className={styles.projectContent}>
                <h3>Website with built in content management system</h3>
                <p>University website with the ability for an admin to update the content of the website without the need of any development knowledge.</p>
                <div className={styles.projectTech}>
                  <span>React</span>
                  <span>MongoDB</span>
                  <span>Docker</span>
                </div>
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
          <h2 className={styles.sectionTitle}>Let&apos;s Work Together</h2>
          <div className={styles.contactContent}>
            <p className={styles.contactDescription}>
              Ready to transform your business with custom software solutions?
              Let&apos;s discuss your project requirements.
            </p>
            <div className={styles.contactButtons}>
              <a href="https://www.linkedin.com/in/pranav-nayak-b450951a0/" target="_blank" className={styles.primaryBtn}><FaLinkedin className={styles.linkedInLogo}/> Lets Connect</a>
              <a href="mailto:pranavjayanayak@gmail.com" className={styles.secondaryBtn}>Send an Email</a>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Pranav Nayak. Building the future, one application at a time.</p>
      </footer>
    </div >
  );
};

export default Home;
