import { NavLink } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './About.css'
import myImg from '../assets/images/jpg/dharmik.jpg'
import { projects, techItems } from '../common/StaticData'



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
                src={myImg}
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
                I am a passionate MERN Stack Developer with 3+ years of experience building scalable, responsive, and high-performance web applications. I specialize in modern frontend development using React.js, JavaScript, and Redux, along with backend technologies like Node.js and MongoDB.
              </p>
              <p className="hero-description">
                I enjoy creating intuitive user interfaces, writing clean and maintainable code, and delivering high-quality digital products that provide excellent user experiences.
              </p>
              <div className="hero-actions">
                <NavLink to="/contact" className="btn-primary">
                  Get In Touch
                </NavLink>
                <NavLink to="/resume" className="btn-secondary">
                  View Resume
                </NavLink>
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
              <div key={i} className="tech-slide-card" onClick={() => window.open(tech.doc, "_blank")}>
                {
                  tech?.logo ?
                    <img src={tech.logo} alt={tech.name} className='slide-logo' /> :
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
                }
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
                  {project.url && (
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
                  )}
                </div>

                <ul className="project-points">
                  {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {projects.features && (
                  <>
                    <p className="project-features-label">Features</p>
                    <ul className="project-features">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </>
                )}

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.url && (
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
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
