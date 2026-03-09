import { useScrollReveal } from '../hooks/useScrollReveal'
import './Resume.css'

const skillCategories = {
  Frontend: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Redux'],
  'UI Libraries': ['Material UI (MUI)', 'Formik', 'Vite'],
  Backend: ['Node.js', 'MongoDB'],
  'Tools & Others': ['Git', 'Keycloak', 'REST APIs', 'Blockchain UI'],
}

const experience = [
  {
    role: 'Frontend Developer',
    company: 'Axi Digital',
    url: 'https://dev.axidigital.xyz',
    period: '2023 – Present',
    points: [
      'Developed modern UI components using React with TypeScript.',
      'Integrated Keycloak authentication into frontend applications.',
      'Implemented blockchain-related UI flows and scalable frontend architecture.',
      'Collaborated with backend teams to integrate REST APIs.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'News Capital',
    url: 'https://newscapital.com/',
    period: '2022 – 2023',
    points: [
      'Built and optimized responsive frontend pages using Next.js.',
      'Worked on performance optimization for content-heavy pages.',
      'Integrated backend APIs and implemented modern UI features.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'App Work Demo',
    url: 'https://vh25wmf071132.user.appworkdemo.com/',
    period: '2022',
    points: [
      'Built reusable React components with TypeScript.',
      'Implemented modern UI features and performance optimizations.',
      'Focused on maintainable component architecture.',
    ],
  },
]

function Resume() {
  const leftRef = useScrollReveal()
  const rightRef = useScrollReveal({ threshold: 0.08 })

  return (
    <div className="resume-page page-section">
      <div className="container">
        <div className="resume-top-bar">
          <div>
            <h1 className="section-title">Resume</h1>
            <p className="section-subtitle">My professional background and skills</p>
            <div className="divider" />
          </div>
          <a href="/resume.pdf" download className="download-btn">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
        </div>

        <div className="resume-layout">
          {/* Left */}
          <div className="resume-left reveal" ref={leftRef}>
            <div className="resume-block card">
              <h2 className="resume-block-title">
                <span className="block-icon">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </span>
                Skills
              </h2>
              {Object.entries(skillCategories).map(([category, items]) => (
                <div key={category} className="skill-category">
                  <h4 className="skill-category-name">{category}</h4>
                  <div className="skill-tags">
                    {items.map((skill) => (
                      <span key={skill} className="resume-skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="resume-block card">
              <h2 className="resume-block-title">
                <span className="block-icon">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </span>
                About
              </h2>
              <p className="resume-about-text">
                MERN Stack Developer with ~3+ years of experience building scalable web applications.
                Passionate about clean code and great user experiences.
              </p>
              <div className="info-rows">
                <div className="info-row">
                  <span className="info-label">Name</span>
                  <span>Dharmik Panchani</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Role</span>
                  <span>MERN Stack Developer</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Experience</span>
                  <span>~3+ Years</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="resume-right reveal" ref={rightRef} style={{ transitionDelay: '0.15s' }}>
            <div className="resume-block card">
              <h2 className="resume-block-title">
                <span className="block-icon">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </span>
                Work Experience
              </h2>
              <div className="timeline">
                {experience.map((exp, i) => (
                  <div key={i} className="timeline-item">
                    <div className="timeline-dot" />
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h3 className="timeline-role">{exp.role}</h3>
                        <span className="timeline-period">{exp.period}</span>
                      </div>
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="timeline-company"
                      >
                        {exp.company}
                      </a>
                      <ul className="timeline-points">
                        {exp.points.map((point, j) => (
                          <li key={j}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
