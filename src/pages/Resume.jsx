import { useScrollReveal } from '../hooks/useScrollReveal'
import './Resume.css'
import resumePDF from '../assets/pdf/dharmik-panchani-resume.pdf'

const skillCategories = {
  Frontend: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Redux Toolkit', 'Context API'],
  'Backend & APIs': ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'JWT Auth', 'Firebase'],
  'UI & Styling': ['Material UI (MUI)', 'Tailwind CSS', 'Bootstrap', 'Responsive Web Design'],
  'Tools & Architecture': ['Git & GitHub', 'Vite', 'Postman', 'Keycloak (OAuth2/OIDC)', 'Formik / Yup'],
}

const softSkills = ['Problem Solving', 'Leadership', 'Team Collaboration', 'Time Management']

const interests = ['Tech Blogging', 'Open Source', 'Traveling', 'Sports']

const languages = [
  { name: 'English', level: 'Professional' },
  { name: 'Hindi', level: 'Native' },
  { name: 'Gujarati', level: 'Native' },
]

const education = [
  {
    degree: 'Bachelor of Science (BSc)',
    institution: 'KK Shastri Government Science College, Ahmedabad',
    year: '2022',
  },
  {
    degree: 'Higher Secondary Education (12th – Science)',
    institution: 'Shree Swaminarayan Gurukul, Rajkot',
    year: '2017',
  },
  {
    degree: 'Secondary Education (10th)',
    institution: 'Shree Swaminarayan Gurukul, Dhasa',
    year: '2015',
  },
]

const operatingSystems = ['Windows', 'Ubuntu / Linux']

const experience = [
  {
    role: 'MERN Stack / React Developer',
    company: 'Virtual Height',
    url: 'https://www.virtualheight.com/',
    period: 'Aug 2023 – Present',
    description: 'Working as a MERN Stack Developer at Virtual Height, architecting and building modern, scalable web applications. Specializing in high-performance frontend interfaces with React & Next.js, API integration with Node.js/Express, and robust state management.',
    points: [
      'Architect and maintain scalable frontend architectures using React.js, Next.js, and TypeScript',
      'Implement global state management and client-side caching utilizing Redux Toolkit',
      'Integrate RESTful microservices, WebSocket/polling feeds, and third-party APIs',
      'Enforce authentication & authorization workflows with Keycloak (OAuth2 / OIDC) and JWT',
      'Optimize application performance, Core Web Vitals, and responsive UI across devices',
      'Collaborate in Agile teams with UI/UX designers and backend developers for rapid feature delivery',
    ],
    projects: [
      {
        name: 'NewsCapital (Digital OTT & News Platform)',
        url: 'https://newscapital.com/',
        role: 'MERN Stack Developer',
        technologies: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Redux Toolkit'],
        description: 'NewsCapital is a high-traffic digital OTT & news streaming platform providing real-time news, personalized recommendations, and editorial workflows.',
        contributions: [
          'Developed responsive frontend UI and SSR pages using Next.js for high SEO ranking and fast load speeds',
          'Integrated Firebase Cloud Messaging for real-time breaking news notifications and live updates',
          'Implemented centralized state management using Redux Toolkit for seamless multi-category navigation',
          'Optimized asset loading and caching strategies, reducing page load latency by over 35%',
        ],
      },
      {
        name: 'AXI Digital (Decentralized & Enterprise Platform)',
        url: 'https://dev.axidigital.xyz/',
        role: 'Frontend & UI Integration Developer',
        technologies: ['React.js', 'TypeScript', 'Keycloak (OAuth2/OIDC)', 'Redux Toolkit', 'Material UI', 'Java APIs'],
        description: 'AXI Digital is an enterprise digital services platform delivering secure decentralized asset management and analytical dashboards.',
        contributions: [
          'Engineered enterprise-grade UI modules using React 18, TypeScript, and Material UI',
          'Implemented secure SSO authentication and Role-Based Access Control (RBAC) via Keycloak',
          'Built interactive data visualization dashboards for real-time transaction and metrics monitoring',
          'Configured resilient API integration with Axios interceptors for automated token refreshing and error handling',
        ],
      },
    ],
  },
  {
    role: 'Frontend / Web Developer',
    company: 'AIMS Infosoft',
    url: 'https://www.aimsinfosoft.com/',
    period: 'July 2022 – July 2023',
    description: 'Developed responsive web applications, user interfaces, and modular components utilizing modern frontend technologies and clean coding practices.',
    points: [
      'Developed responsive, pixel-perfect web pages using React.js, HTML5, CSS3, and Bootstrap',
      'Built reusable dynamic UI components and handled complex client-side form validations',
      'Integrated RESTful APIs and managed application state using Redux',
      'Participated in code reviews, bug fixing, and continuous performance improvements',
      'Maintained clean, modular, and well-documented codebase adhering to frontend standards',
    ],
    projects: [
      {
        name: 'Real Estate Platform',
        url: 'https://vh25wmf071132.user.appworkdemo.com/',
        role: 'Full Stack MERN Developer',
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'JWT'],
        description: 'A comprehensive property listing and management platform featuring dynamic search, multi-attribute filtering, and map discovery.',
        contributions: [
          'Built responsive property listing layouts and interactive search filters using React & TypeScript',
          'Implemented secure authentication with JWT and protected administrative route guards',
          'Integrated Google Maps API for interactive location-based property discovery',
          'Collaborated on designing MongoDB schemas for optimized listing query performance',
        ],
      },
    ],
  },
]

const internshipProject = {
  name: 'School Management System (Database & Backend Project)',
  technologies: ['Node.js', 'MongoDB', 'Relational Database Design', 'REST APIs'],
  description: 'Designed and implemented a structured and normalized database architecture for a School Management System to efficiently handle student enrollment, academic records, faculty allocation, and administrative workflows.',
  contributions: [
    'Designed normalized database schemas ensuring high data integrity and minimal redundancy',
    'Structured relational models for students, instructors, courses, and examination grading',
    'Implemented table relationships, primary/foreign indexing, and data constraint rules',
    'Documented comprehensive Entity-Relationship (ER) diagrams and SQL/NoSQL schema specifications',
  ],
}

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
          <a href={resumePDF} download="Dharmik-Panchani-Resume.pdf" className="download-btn">
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
                MERN Stack Developer with 3+ years of experience building scalable web applications.
                Passionate about clean code, great user experiences, and modern front-end development.
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
                  <span>3+ Years</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Email</span>
                  <span>dharmikpanchani96@<wbr />gmail.com</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Phone</span>
                  <span>+91 9712872793</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Location</span>
                  <span>Nikol, Ahmedabad – 382350</span>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="resume-block card">
              <h2 className="resume-block-title">
                <span className="block-icon">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </span>
                Soft Skills
              </h2>
              <div className="skill-tags">
                {softSkills.map((skill) => (
                  <span key={skill} className="resume-skill-tag resume-skill-tag--soft">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="resume-block card">
              <h2 className="resume-block-title">
                <span className="block-icon">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </span>
                Interests
              </h2>
              <div className="skill-tags">
                {interests.map((item) => (
                  <span key={item} className="resume-skill-tag resume-skill-tag--interest">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="resume-block card">
              <h2 className="resume-block-title">
                <span className="block-icon">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </span>
                Languages
              </h2>
              <div className="language-list">
                {languages.map((lang) => (
                  <div key={lang.name} className="language-item">
                    <span className="language-name">{lang.name}</span>
                    <span className="language-level">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Operating Systems */}
            <div className="resume-block card">
              <h2 className="resume-block-title">
                <span className="block-icon">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </span>
                Operating Systems
              </h2>
              <div className="skill-tags">
                {operatingSystems.map((os) => (
                  <span key={os} className="resume-skill-tag resume-skill-tag--os">
                    {os}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="resume-right reveal" ref={rightRef} style={{ transitionDelay: '0.15s' }}>
            {/* Work Experience */}
            <div className="resume-block card">
              <h2 className="resume-block-title">
                <span className="block-icon">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </span>
                Professional Experience
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
                      {exp.description && (
                        <p className="timeline-desc">{exp.description}</p>
                      )}
                      <p className="timeline-sub-label">Key Responsibilities</p>
                      <ul className="timeline-points">
                        {exp.points.map((point, j) => (
                          <li key={j}>{point}</li>
                        ))}
                      </ul>

                      {/* Nested Projects */}
                      {exp.projects && exp.projects.length > 0 && (
                        <div className="exp-projects">
                          <p className="timeline-sub-label">Projects</p>
                          {exp.projects.map((proj, k) => (
                            <div key={k} className="exp-project-card">
                              <div className="exp-project-header">
                                <span className="exp-project-name">{proj.name}</span>
                                <a
                                  href={proj.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="exp-project-link"
                                >
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                  </svg>
                                  Visit
                                </a>
                              </div>
                              {proj.role && (
                                <span className="project-role-badge">{proj.role}</span>
                              )}
                              <p className="exp-project-desc">{proj.description}</p>
                              {proj.technologies && proj.technologies.length > 0 && (
                                <div className="exp-project-tech">
                                  {proj.technologies.map((tech) => (
                                    <span key={tech} className="resume-skill-tag resume-skill-tag--tech">{tech}</span>
                                  ))}
                                </div>
                              )}
                              <ul className="timeline-points">
                                {proj.contributions.map((c, m) => (
                                  <li key={m}>{c}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Internship */}
            <div className="resume-block card">
              <h2 className="resume-block-title">
                <span className="block-icon">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </span>
                Internship Project
              </h2>
              <div className="exp-project-card exp-project-card--standalone">
                <span className="exp-project-name">{internshipProject.name}</span>
                {internshipProject.role && (
                  <span className="project-role-badge">{internshipProject.role}</span>
                )}
                <p className="exp-project-desc" style={{ marginTop: '8px' }}>{internshipProject.description}</p>
                {internshipProject.technologies && internshipProject.technologies.length > 0 && (
                  <div className="exp-project-tech">
                    {internshipProject.technologies.map((tech) => (
                      <span key={tech} className="resume-skill-tag resume-skill-tag--tech">{tech}</span>
                    ))}
                  </div>
                )}
                <p className="timeline-sub-label" style={{ marginTop: '10px' }}>Key Contributions</p>
                <ul className="timeline-points">
                  {internshipProject.contributions.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="resume-block card">
              <h2 className="resume-block-title">
                <span className="block-icon">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </span>
                Education
              </h2>
              <div className="timeline">
                {education.map((edu, i) => (
                  <div key={i} className="timeline-item">
                    <div className="timeline-dot" />
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h3 className="timeline-role" style={{ fontSize: '0.92rem' }}>{edu.degree}</h3>
                        <span className="timeline-period">{edu.year}</span>
                      </div>
                      <span className="timeline-company">{edu.institution}</span>
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
