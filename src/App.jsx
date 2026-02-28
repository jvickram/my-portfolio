import { useEffect, useState } from 'react'
import './App.css'

const impactStats = [
  { value: '8+', label: 'Years Experience' },
  { value: '150%', label: 'Delivery Velocity Gain' },
  { value: '99.98%', label: 'Platform Uptime' },
  { value: '90%', label: 'Security Backlog Reduced' },
]

const skillGroups = {
  Core: ['React', 'Node.js', 'JavaScript', 'TypeScript', 'SQL'],
  Cloud: ['AWS Lambda', 'Step Functions', 'DynamoDB', 'API Gateway', 'S3'],
  Delivery: ['CI/CD', 'TeamCity', 'Chef', 'Git', 'Agile', 'Code Reviews'],
}

const strengths = [
  {
    title: 'Product-Driven Engineering',
    text: 'I map business goals to technical architecture and ship features that are measurable, maintainable, and fast to iterate.',
  },
  {
    title: 'Reliable Platform Delivery',
    text: 'From CI/CD to secure SDLC and fault tolerance, I focus on resilient systems that stay stable under pressure.',
  },
  {
    title: 'Leadership & Mentorship',
    text: 'I mentor teams, raise code quality standards, and create execution rhythm that improves delivery consistency.',
  },
]

const domainFocus = ['Legal Tech', 'Education / LMS', 'Marketplace & E-commerce', 'Enterprise Platform Modernization']

const experience = [
  {
    role: 'Tech Lead',
    company: 'Tech Mahindra',
    period: 'Jun 2022 - Present',
    highlights: [
      'Led and mentored a cross-functional team of 7 engineers and improved delivery velocity by 150%.',
      'Modernized legacy platforms to React/TypeScript and .NET services, improving maintainability and developer productivity.',
      'Established secure SDLC practices and CI/CD pipelines, reducing vulnerability backlog by 90% and lowering rollbacks.',
      'Built scalable services for peak traffic and improved platform reliability with strong uptime outcomes.',
    ],
  },
  {
    role: 'Senior Engineer',
    company: 'Brillio Technologies Pvt Ltd',
    period: 'May 2021 - Jun 2022',
    highlights: [
      'Strengthened deployment security validations for enterprise initiatives.',
      'Expanded LDAP portal access workflows and reduced onboarding time by 40%.',
      'Supported CI/CD and branching practices to reduce deployment failures.',
      'Implemented serverless workflows using AWS Lambda and Step Functions for better scalability.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Saltside Technologies India Pvt Ltd',
    period: 'Feb 2021 - May 2021',
    highlights: [
      'Delivered full-stack features for personalized discovery experiences that increased engagement.',
      'Improved search relevance and ranking to reduce bounce rates.',
      'Collaborated with distributed teams across multiple countries to accelerate releases.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Advanced Business and Health Care Solution Pvt Ltd',
    period: 'Feb 2019 - Feb 2021',
    highlights: [
      'Led migration from desktop systems to web applications with microservice-oriented architecture.',
      'Built modular apps for forms, permissions, and submissions to streamline legal workflows.',
      'Implemented AWS-based architecture and backend data processing with Node.js and Python.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'Semonics Technologies Pvt Ltd',
    period: 'Jan 2018 - Dec 2018',
    highlights: [
      'Delivered secure React e-commerce UI integrated with Node/Express services.',
      'Maintained and customized WordPress implementations for business continuity.',
    ],
  },
  {
    role: 'Software Engineer Trainee',
    company: 'Percoyo Pvt Ltd',
    period: 'Jul 2017 - Dec 2017',
    highlights: [
      'Used CRM systems to improve responsiveness and customer interaction tracking.',
      'Built an internal leave management application using HTML, JavaScript, and PHP.',
    ],
  },
]

const featuredProjects = [
  {
    name: 'Verizon Connect — Hours of Service (HoS)',
    domain: 'Transportation Compliance Platform',
    description:
      'Built and scaled compliance workflows used by transportation companies, drivers, and inspectors across US and Canada.',
    impact: 'Improved throughput and operational reliability for high-volume compliance use cases.',
  },
  {
    name: 'Macmillan — Courseware (LMS)',
    domain: 'Education Technology',
    description:
      'Supported security remediation and modernization across multiple apps used by schools and universities.',
    impact: 'Reduced security risk and improved maintainability in a complex enterprise LMS ecosystem.',
  },
  {
    name: 'LaserForms',
    domain: 'Legal Tech',
    description:
      'Migrated a legacy desktop legal system to a modern web platform with microservices and AWS services.',
    impact: 'Enabled modular delivery and faster evolution of forms, permissions, and submission workflows.',
  },
  {
    name: 'Ikman & Bikroy',
    domain: 'Marketplace / E-commerce',
    description:
      'Delivered personalization, search, and discovery improvements for high-traffic marketplace products.',
    impact: 'Increased engagement and improved feature rollout quality through strong collaboration and reviews.',
  },
]

const certifications = [
  'Front-end Development with React (Coursera)',
  'Interactivity with JavaScript (Coursera)',
  'Advanced Styling with Responsive Design (Coursera)',
  'The Complete Node.js Developer Course (Udemy)',
  'The Complete SQL Master Class (Udemy)',
]

const offerings = [
  'Architecture and modernization of legacy applications',
  'Frontend engineering with React and scalable UI patterns',
  'Backend APIs and service orchestration with Node.js',
  'CI/CD and release reliability improvements',
]

const collaborationStyle = [
  'Translate product goals into clear technical execution plans',
  'Build with measurable outcomes and long-term maintainability',
  'Coach teams through reviews, standards, and architecture decisions',
]

const currentlyFocused = [
  'Platform modernization with React + Node.js',
  'Scalable backend architecture and reliability engineering',
  'Secure SDLC and high-confidence release pipelines',
]

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const storedTheme = localStorage.getItem('portfolio-theme')
    if (storedTheme === 'dark' || storedTheme === 'light') {
      setTheme(storedTheme)
      return
    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme)
    document.body.classList.toggle('dark-mode', theme === 'dark')
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <main className={`portfolio ${theme}`}>
      <nav className="top-nav">
        <a className="brand" href="#about">
          BJ
        </a>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <button className="theme-toggle" onClick={toggleTheme} type="button">
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </nav>

      <section className="hero">
        <article className="hero-card">
          <img className="profile-image" src="/MeOnBeach.jpeg" alt="Bickey Jaisawal" />
          <div>
            <p className="eyebrow">Portfolio</p>
            <h1>Bickey Jaisawal</h1>
            <p className="role">Tech Lead • Full Stack Engineer</p>
            <p className="summary">
              I build reliable products at scale across legal tech, LMS, and e-commerce domains with strong focus on
              architecture, delivery speed, and engineering quality.
            </p>
            <p className="availability">Available for senior engineering and tech leadership opportunities</p>
            <div className="contact-row">
              <a href="mailto:jaisawalbickey231@gmail.com">jaisawalbickey231@gmail.com</a>
              <span>•</span>
              <span>+91 9535375804</span>
              <span>•</span>
              <span>Bengaluru, India</span>
            </div>
            <div className="hero-buttons">
              <a className="btn btn-primary" href="mailto:jaisawalbickey231@gmail.com">
                Let&apos;s Connect
              </a>
              <a className="btn btn-secondary" href="#projects">
                View Work
              </a>
            </div>
          </div>
        </article>

        <article className="stats-card">
          {impactStats.map((stat) => (
            <div className="stat" key={stat.label}>
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </article>
      </section>

      <section className="spotlight-grid" id="about">
        <article className="card intro-band">
          <div>
            <p className="group-title">About Me</p>
            <h2>Building modern platforms that scale with confidence</h2>
            <p className="intro-text">
              With 8+ years in full-stack development and technical leadership, I specialize in transforming complex
              products into secure, performant, and developer-friendly systems.
            </p>
          </div>
          <div className="domain-wrap">
            {domainFocus.map((domain) => (
              <span key={domain} className="domain-pill">
                {domain}
              </span>
            ))}
          </div>
        </article>

        <article className="card mini-panel">
          <p className="group-title">Currently Focused On</p>
          <ul className="offer-list">
            {currentlyFocused.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="card">
        <h2>How I Collaborate</h2>
        <ul className="offer-list">
          {collaborationStyle.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>What I Bring</h2>
        <div className="strength-grid">
          {strengths.map((item) => (
            <article key={item.title} className="strength-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>How I Can Help</h2>
        <ul className="offer-list">
          {offerings.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="card" id="skills">
        <h2>Tech Stack & Capabilities</h2>
        <div className="skill-groups">
          {Object.entries(skillGroups).map(([group, items]) => (
            <div key={group}>
              <p className="group-title">{group}</p>
              <div className="chips">
                {items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card" id="experience">
        <h2>Career Journey</h2>
        <div className="timeline">
          {experience.map((job) => (
            <article className="timeline-item" key={`${job.role}-${job.company}`}>
              <h3>
                {job.role} <span>@ {job.company}</span>
              </h3>
              <p className="meta period">{job.period}</p>
              <ul className="highlights">
                {job.highlights.slice(0, 3).map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="card" id="projects">
        <h2>Selected Case Studies</h2>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.name}>
              <p className="project-domain">{project.domain}</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p className="project-impact">Impact: {project.impact}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card two-col">
        <div>
          <h2>Education</h2>
          <ul className="plain-list">
            <li>
              <strong>Information Science and Engineering</strong>
              <p>Vemana Institute of Technologies • 2017</p>
            </li>
            <li>
              <strong>Intermediate in Science</strong>
              <p>Orchid Public Higher Secondary School • 2012</p>
            </li>
            <li>
              <strong>SSLC</strong>
              <p>Everest English Boarding School • 2010</p>
            </li>
          </ul>
        </div>
        <div>
          <h2>Certifications</h2>
          <ul className="plain-list">
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2 className="section-gap">Languages & Interests</h2>
          <p>English, Hindi</p>
          <p>Kick Boxing • Music • Science Fiction</p>
        </div>
      </section>

      <section className="footer-note" id="contact">
        <div className="cta-card">
          <h2>Let&apos;s build something impactful</h2>
          <p>
            Open to tech leadership and senior full-stack roles focused on scalable product engineering, platform
            modernization, and high-impact delivery.
          </p>
          <a className="btn btn-primary" href="mailto:jaisawalbickey231@gmail.com">
            Contact Me
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
