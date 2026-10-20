
"use client";

import { useEffect, useRef, useState } from "react";


const skills = [
  "Node.js",
  "TypeScript",
  "JavaScript",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "SQL",
  "REST APIs",
  "Docker",
  "GraphQL",
  "Git",
];

const projects = [
  {
    number: "01",
    title: "E-Commerce Microservices",
    description:
      "A modular backend platform with REST APIs, PostgreSQL, Prisma, Docker, automated tests and a foundation for scalable services.",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Docker"],
    link: "https://github.com/NOORMOHAMMED789/e-commerce",
  },
  {
    number: "02",
    title: "Task Management API",
    description:
      "A backend API for creating, completing and paginating tasks, with structured routes and automated testing.",
    stack: ["Node.js", "Express.js", "TypeScript", "Vitest"],
    link: "https://github.com/NOORMOHAMMED789/e-commerce",
  },
  {
    number: "03",
    title: "Network Management Platform",
    description:
      "Backend engineering for device management, API integrations and network provisioning workflows.",
    stack: ["Node.js", "TypeScript", "MongoDB", "PostgreSQL"],
    link: "https://github.com/NOORMOHAMMED789/e-commerce",
  },
];

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const preferredTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
      ? "dark"
      : "light";

    const initialTheme =
      savedTheme === "dark" || savedTheme === "light"
        ? savedTheme
        : preferredTheme;

    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);


  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const elements = root.querySelectorAll(
      ".about-section, .skills-section, .projects-section, .contact-section"
    );

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (media.matches || !("IntersectionObserver" in window)) {
      return;
    }

    elements.forEach((element) => {
      element.classList.add("reveal-on-scroll");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);


  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("portfolio-theme", nextTheme);
  }

  return (
    <main>
      <header className="navbar">
        <a className="brand" href="#home">
          Noor<span>.</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          title="Toggle theme"
        >
          {theme === "light" ? "☾" : "☀"}
          <span>{theme === "light" ? "Dark" : "Light"}</span>
        </button>
      </header>

      <section className="hero section" id="home">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot" />
            Software Engineer · Open to opportunities · Immediate Joiner
          </div>

          <p className="eyebrow">HELLO, I'M NOOR MOHAMMED</p>

          <h1>
            Building reliable
            <br />
            systems for the <span>real world.</span>
          </h1>


          <p className="hero-description">
            I&apos;m a backend engineer specializing in Node.js and TypeScript,
            building reliable APIs, database-driven applications and
            maintainable backend services. I enjoy solving engineering
            problems and designing systems that scale.
          </p>


          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <span>↗</span>
            </a>
            <a className="button button-secondary" href="#contact">
              Let&apos;s connect
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/NOORMOHAMMED789"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/noor-mohammed-dev"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Backend developer illustration">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="code-card">
            <div className="code-header">
              <div className="window-dots">
                <i />
                <i />
                <i />
              </div>
              <span>developer.ts</span>
            </div>
            <div className="code-content">
              <p><span className="code-purple">const</span> developer = {"{"}</p>
              <p className="indent">name: <span className="code-green">&quot;Noor&quot;</span>,</p>
              <p className="indent">
                role: <span className="code-green">&quot;Backend Engineer&quot;</span>,
              </p>
              <p className="indent">
                builds: <span className="code-green">&quot;Scalable APIs&quot;</span>,
              </p>
              <p className="indent">
                stack: [<span className="code-green">&quot;Node.js&quot;</span>,{" "}
                <span className="code-green">&quot;TypeScript&quot;</span>]
              </p>
              <p>{"}"}</p>
              <p className="code-comment">// Turning ideas into software.</p>
            </div>
          </div>
          <div className="floating-badge badge-top">{"{ }"} TypeScript</div>
          <div className="floating-badge badge-bottom">Node.js</div>
        </div>

        <a className="scroll-hint" href="#about">
          <span>↓</span> Scroll to explore
        </a>
      </section>

      <section className="section about-section" id="about">
        <div className="section-heading">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2>Engineering with purpose.</h2>
        </div>
        <div className="about-content">
          <p>
            I enjoy turning complex problems into clean, maintainable
            solutions. My focus is backend development, API design, database
            systems and building services that are dependable in production.
          </p>
          <p>
            I&apos;m also interested in system design, distributed
            architectures, performance optimization and continuously learning
            better ways to build software.
          </p>
          <a className="text-link" href="#contact">
            More about my work <span>→</span>
          </a>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">MY TOOLKIT</p>
          <h2>Technologies I work with.</h2>
          <p className="section-description">
            Tools I use to build, test and ship backend applications.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={skill}>
              <span className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{skill}</span>
              <span className="skill-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="projects-heading">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Projects I&apos;m building.</h2>
          </div>
          <p className="section-description">
            A selection of backend projects and engineering work.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span className="project-number">{project.number}</span>
                <span className="project-symbol">↗</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                View project <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section section" id="resume">
        <div className="resume-content">
          <p className="eyebrow">MY RESUME</p>
          <h2>Let's talk about what I can bring to your team.</h2>
          <p>
            Explore my experience, technical skills, and backend engineering
            projects in my resume.
          </p>

          <a
            className="button button-primary"
            href="https://drive.google.com/file/d/1jnbWwdFrbIO3E_LupV5_CTOyn9jQxs8z/view?usp=sharing"
            download="Noor-Mohammed-Resume.pdf"
          >
            Download Resume <span>↓</span>
          </a>
        </div>
      </section>


      <section className="section contact-section" id="contact">
        <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
        <h2>Let&apos;s build something great.</h2>
        <p>
          Interested in working together or discussing an engineering
          opportunity? I&apos;d love to hear from you.
        </p>
        <a
          className="button button-primary"
          href="mailto:noormohammedknr2@gmail.com"
        >
          Get in touch <span>↗</span>
        </a>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-intro">
            <a href="#home" className="brand">
              Noor<span>.</span>
            </a>
            <p>Building reliable backend systems and meaningful software.</p>
          </div>

          <div className="footer-contact">
            <h3>Get in touch</h3>

            <a href="mailto:noormohammedknr2@gmail.com">
              <span>Email</span>
              noormohammedknr2@gmail.com
            </a>

            <a href="tel:+918919279010">
              <span>Phone</span>
              +91 8919279010
            </a>
          </div>

          <div className="footer-navigation">
            <h3>Explore</h3>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
