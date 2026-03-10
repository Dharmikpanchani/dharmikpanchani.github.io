import { useScrollReveal } from '../hooks/useScrollReveal'
import './Resume.css'
import resumePDF from '../assets/pdf/dharmik-panchani-resume.pdf'

const skillCategories = {
  Frontend: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Redux'],
  'UI Libraries': ['Material UI (MUI)', 'Formik', 'Vite', 'Bootstrap'],
  Backend: ['Node.js', 'MongoDB'],
  'Tools & Others': ['Git', 'Keycloak', 'REST APIs', 'Blockchain UI'],
}

const softSkills = ['Problem Solving', 'Leadership', 'Management']

const interests = ['Sports', 'Traveling', 'Reading']

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

const operatingSystems = ['Windows', 'Ubuntu']

const experience = [
  {
    role: 'React Developer',
    company: 'Virtual Height',
    url: 'https://www.virtualheight.com/',
    period: 'Aug 2023 – Present',
    description: 'I am currently working as a React Developer at Virtual Height, where I develop modern and scalable web applications. My role focuses on building responsive user interfaces, creating reusable components, and maintaining high-performance frontend applications using modern technologies.',
    points: [
      'Develop modern web applications using React.js',
      'Build reusable and scalable UI components',
      'Implement responsive user interfaces',
      'Manage application state using Redux',
      'Optimize application performance and code quality',
      'Collaborate with designers and backend developers to deliver high-quality solutions',
    ],
    projects: [
      {
        name: 'NewsCapital (OTT Platform)',
        url: 'https://newscapital.com/',
        description: 'NewsCapital is a digital OTT platform designed to deliver news content through a modern and responsive web interface.',
        contributions: [
          'Developed frontend UI using React.js',
          'Implemented responsive layouts and reusable components',
          'Integrated APIs to display dynamic news content',
          'Improved overall user experience and application performance',
        ],
      },
      {
        name: 'AXI Digital',
        url: 'https://dev.axidigital.xyz/',
        description: 'AXI Digital is a digital platform designed to provide modern digital services and solutions.',
        contributions: [
          'Developed frontend modules using React.js',
          'Built dynamic and reusable UI components',
          'Improved application responsiveness and performance',
          'Worked on UI improvements and feature implementation',
        ],
      },
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'AIMS Infosoft',
    url: 'https://www.aimsinfosoft.com/',
    period: 'July 2022 – July 2023',
    description: 'I worked as a Frontend Developer at AIMS Infosoft, where I developed responsive web applications and user interfaces using modern frontend technologies.',
    points: [
      'Developed responsive web pages using HTML, CSS, and Bootstrap',
      'Built dynamic user interfaces using React.js',
      'Implemented state management using Redux',
      'Collaborated with team members to deliver high-quality web applications',
      'Maintained clean, structured, and maintainable code',
    ],
    projects: [
      {
        name: 'Real Estate Platform',
        url: 'https://vh25wmf071132.user.appworkdemo.com/',
        description: 'A real estate platform designed to manage property listings and provide users with a responsive interface for browsing property information.',
        contributions: [
          'Developed frontend UI using HTML, CSS, and Bootstrap',
          'Implemented interactive components using React.js',
          'Built responsive layouts for better user experience',
          'Improved user interface structure and usability',
        ],
      },
    ],
  },
]

const internshipProject = {
  name: 'School Management System (Database Project)',
  description: 'During my internship, I worked on designing and developing a database structure for a School Management System to efficiently manage school-related operations. Designed and developed a structured and normalized relational database system to manage school data such as students, teachers, classes, and administrative records.',
  contributions: [
    'Designed normalized relational database schema for school operations',
    'Structured data management for students, teachers, and classes',
    'Implemented efficient table relationships and data integrity constraints',
    'Developed organized database system for administrative records',
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
                React.js Developer with 3+ years of experience building scalable web applications.
                Passionate about clean code, great user experiences, and modern front-end development.
              </p>
              <div className="info-rows">
                <div className="info-row">
                  <span className="info-label">Name</span>
                  <span>Dharmik Panchani</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Role</span>
                  <span>React.js Developer</span>
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
                              <p className="exp-project-desc">{proj.description}</p>
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
                <p className="exp-project-desc" style={{ marginTop: '8px' }}>{internshipProject.description}</p>
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
