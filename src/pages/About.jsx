import { useScrollReveal } from '../hooks/useScrollReveal'
import './About.css'

const techItems = [
  { name: 'React', symbol: 'Re', color: '#61DAFB' },
  { name: 'Node.js', symbol: 'No', color: '#68A063' },
  { name: 'JavaScript', symbol: 'JS', color: '#F7DF1E' },
  { name: 'TypeScript', symbol: 'TS', color: '#3178C6' },
  { name: 'MongoDB', symbol: 'Mg', color: '#4DB33D' },
  { name: 'Redux', symbol: 'Rx', color: '#9c6dff' },
  { name: 'HTML', symbol: 'Ht', color: '#E34F26' },
  { name: 'CSS', symbol: 'Cs', color: '#2965f1' },
  { name: 'Material UI', symbol: 'MU', color: '#007FFF' },
  { name: 'Next.js', symbol: 'Nx', color: '#94a3b8' },
  { name: 'Vite', symbol: 'Vi', color: '#a78bfa' },
  { name: 'Formik', symbol: 'Fk', color: '#5b8def' },
]

const projects = [
  {
    name: 'Axi Digital',
    url: 'https://dev.axidigital.xyz',
    role: 'React Developer',
    technologies: ['React', 'TypeScript', 'Keycloak Auth', 'Blockchain', 'Java APIs'],
    points: [
      'Developed and maintained scalable frontend components using React.js with TypeScript to build modern and responsive user interfaces.',
      'Implemented secure authentication and authorization using Keycloak to ensure protected user access across the application.',
      'Built blockchain-related UI modules and integrated them with backend services for seamless data interaction.',
      'Collaborated closely with backend developers to integrate REST APIs and ensure smooth data flow between frontend and server.',
      'Developed responsive dashboards and optimized UI performance for better user experience and faster load times.',
      'Followed best practices for clean, maintainable, and reusable code while working in a team-based development environment.',
    ],
  },
  {
    name: 'News Capital',
    url: 'https://newscapital.com/',
    role: 'MERN Stack Developer',
    technologies: ['Next.js', 'Node.js', 'Vite', 'JavaScript'],
    points: [
      'Developed responsive and SEO-friendly web pages using Next.js.',
      'Built dynamic and reusable UI components to ensure maintainable and scalable frontend architecture.',
      'Integrated REST APIs to fetch and display real-time content updates across the platform.',
      'Focused on performance optimization, improving page load speed and overall user experience.',
      'Followed modern UI/UX design principles to create clean and user-friendly interfaces.',
    ],
  },
  {
    name: 'App Work Demo',
    url: 'https://vh25wmf071132.user.appworkdemo.com/',
    role: 'Frontend Developer',
    technologies: ['React', 'Node.js', 'Vite', 'TypeScript'],
    points: [
      'Developed modular React components and implemented TypeScript-based architecture for improved maintainability.',
      'Worked on building responsive user interfaces, API integrations, and improving overall application performance.',
    ],
  },
]

function About() {
  const heroRef = useScrollReveal()
  const techHeadRef = useScrollReveal()
  const projectsHeadRef = useScrollReveal()
  const projectsGridRef = useScrollReveal()

  return (
    <div className="about-page">
      {/* ── Hero ─────────────────────────────── */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content reveal" ref={heroRef}>
            {/* Profile Image */}
            <div className="hero-image-wrap">
              <div className="hero-image-glow" />
              <img
                src="src\assets\images\jpg\dharmik.jpg"
                alt="Dharmik Panchani"
                className="profile-img"
              />
            </div>

            {/* Text */}
            <div className="hero-text">
              <p className="hero-greeting">Hello, I'm</p>
              <h1 className="hero-name gradient-text">Dharmik Panchani</h1>
              <p className="hero-title">MERN Stack Developer</p>
              <p className="hero-description">
                A MERN Stack Developer with 3+ years of experience in building modern, scalable, and high-performance web applications.
              </p>
              <p className="hero-description">
                I specialize in developing full-stack applications using React.js for the frontend and Node.js, Express.js, and MongoDB for the backend and database, ensuring responsive user interfaces and efficient server-side performance.
              </p>
              <div className="hero-actions">
                <a href="/contact" className="btn-primary">
                  Get In Touch
                </a>
                <a href="/resume" className="btn-secondary">
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tech Stack Marquee ───────────────── */}
      <section className="section-bg tech-section">
        <div className="container">
          <div className="reveal" ref={techHeadRef}>
            <h2 className="section-title">Tech Stack</h2>
            <p className="section-subtitle">Technologies I work with</p>
            <div className="divider" />
          </div>
        </div>

        {/* Marquee — full width, no container constraint */}
        <div className="marquee-outer">
          <div className="marquee-track">
            {[...techItems, ...techItems].map((tech, i) => (
              <div key={i} className="tech-slide-card">
                <span
                  className="tech-slide-icon"
                  style={{
                    color: tech.color,
                    backgroundColor: tech.color + '22',
                    border: `1px solid ${tech.color}40`,
                  }}
                >
                  {tech.symbol}
                </span>
                <span className="tech-slide-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ─────────────────────────── */}
      <section className="page-section">
        <div className="container">
          <div className="reveal" ref={projectsHeadRef}>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">Selected work I've contributed to</p>
            <div className="divider" />
          </div>

          <div className="projects-grid reveal" ref={projectsGridRef}>
            {projects.map((project) => (
              <div key={project.name} className="project-card card">
                {/* Top accent line */}
                <div className="project-accent-line" />

                <div className="project-header">
                  <div>
                    <h3 className="project-name">{project.name}</h3>
                    <span className="project-role">{project.role}</span>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live
                  </a>
                </div>

                <ul className="project-points">
                  {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-url-row">
                  <span className="project-url-label">URL</span>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-url-link"
                  >
                    {project.url}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
