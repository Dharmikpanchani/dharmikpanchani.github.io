import { useScrollReveal } from '../hooks/useScrollReveal'
import './Profile.css'
import myImg from '../assets/images/jpg/dharmik.jpg'

const techStack = [
  { name: 'React.js', symbol: 'Re' },
  { name: 'Next.js', symbol: 'Nx' },
  { name: 'TypeScript', symbol: 'TS' },
  { name: 'JavaScript', symbol: 'JS' },
  { name: 'Node.js', symbol: 'No' },
  { name: 'MongoDB', symbol: 'Mg' },
  { name: 'Redux', symbol: 'Rx' },
  { name: 'Material UI', symbol: 'MU' },
  { name: 'HTML5', symbol: 'Ht' },
  { name: 'CSS3', symbol: 'Cs' },
  { name: 'Vite', symbol: 'Vi' },
  { name: 'Formik', symbol: 'Fk' },
]

const skillBars = [
  { name: 'JavaScript', level: 92 },
  { name: 'React.js', level: 90 },
  { name: 'Material UI', level: 88 },
  { name: 'TypeScript', level: 85 },
  { name: 'Redux', level: 90 },
  { name: 'Next.js', level: 60 },
  { name: 'Node.js', level: 75 },
  { name: 'MongoDB', level: 70 },
]

function Profile() {
  const profileCardRef = useScrollReveal()
  const summaryRef = useScrollReveal({ threshold: 0.08 })
  const skillsRef = useScrollReveal({ threshold: 0.08 })
  const techRef = useScrollReveal({ threshold: 0.08 })

  return (
    <div className="profile-page page-section">
      <div className="container">
        <div className="profile-layout">
          {/* Left — sticky card */}
          <div className="profile-left">
            <div className="profile-card card reveal" ref={profileCardRef}>
              <img
                src={myImg}
                alt="Dharmik Panchani"
                className="profile-avatar-img"
              />
              <h2 className="profile-name gradient-text">Dharmik Panchani</h2>
              <p className="profile-title">React.js Developer</p>
              <div className="profile-exp-badge">~3+ Years Experience</div>
              <div className="profile-divider" />
              <div className="profile-links">
                <a
                  href="https://github.com/Dharmikpanchani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/dharmik-panchani-b29067219/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="profile-right">
            <div className="card reveal" ref={summaryRef}>
              <h2 className="profile-block-title">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                Profile Summary
              </h2>
              <p className="summary-text">
                I am a passionate React.js Developer with over 3+ years of experience building scalable, responsive, and high-performance web applications. I specialize in modern front-end development using React, JavaScript, Redux, and UI frameworks.
              </p>
              <p className="summary-text">
                I am a dedicated and results-driven React.js Developer with more than 3+ years of professional experience in front-end development. I specialize in developing modern web applications using JavaScript, React.js, Redux, and advanced UI frameworks including Material UI. I focus on creating user-friendly interfaces, clean code architecture, and high-quality digital experiences.
              </p>
            </div>

            <div className="card reveal" ref={skillsRef} style={{ transitionDelay: '0.1s' }}>
              <h2 className="profile-block-title">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
                Skill Proficiency
              </h2>
              <div className="skill-bars">
                {skillBars.map((skill) => (
                  <div key={skill.name} className="skill-bar-item">
                    <div className="skill-bar-header">
                      <span className="skill-bar-name">{skill.name}</span>
                      <span className="skill-bar-pct">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div className="skill-bar-fill" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card reveal" ref={techRef} style={{ transitionDelay: '0.2s' }}>
              <h2 className="profile-block-title">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                Technology Stack
              </h2>
              <div className="tech-grid">
                {techStack.map((tech) => (
                  <div key={tech.name} className="tech-badge">
                    <span className="tech-symbol">{tech.symbol}</span>
                    <span className="tech-name">{tech.name}</span>
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

export default Profile
