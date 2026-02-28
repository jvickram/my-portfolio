import { useEffect, useState } from 'react'
import {
  FiActivity,
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCode,
  FiCompass,
  FiCpu,
  FiFlag,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMap,
  FiSettings,
  FiShield,
  FiStar,
  FiTarget,
  FiUsers,
} from 'react-icons/fi'
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
    icon: FiTarget,
    title: 'Product-Driven Engineering',
    text: 'I map business goals to technical architecture and ship features that are measurable, maintainable, and fast to iterate.',
  },
  {
    icon: FiShield,
    title: 'Reliable Platform Delivery',
    text: 'From CI/CD to secure SDLC and fault tolerance, I focus on resilient systems that stay stable under pressure.',
  },
  {
    icon: FiUsers,
    title: 'Leadership & Mentorship',
    text: 'I mentor teams, raise code quality standards, and create execution rhythm that improves delivery consistency.',
  },
]

const domainFocus = ['Legal Tech', 'Education / LMS', 'Marketplace & E-commerce', 'Enterprise Platform Modernization']

const experience = [
  {
    role: 'Tech Lead',
    company: 'Tech Mahindra',
    logo: '/company-techmahindra.svg',
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
    logo: '/company-brillio.svg',
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
    logo: '/company-saltside.svg',
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
    logo: '/company-abhcs.svg',
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
    logo: '/company-semonics.svg',
    period: 'Jan 2018 - Dec 2018',
    highlights: [
      'Delivered secure React e-commerce UI integrated with Node/Express services.',
      'Maintained and customized WordPress implementations for business continuity.',
    ],
  },
  {
    role: 'Software Engineer Trainee',
    company: 'Percoyo Pvt Ltd',
    logo: '/company-percoyo.svg',
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
  {
    title: 'Frontend Expert',
    provider: 'AlgoExpert',
    logo: '/logo-algoexpert.svg',
    link: 'https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fcertificate.algoexpert.io%2FFrontendExpert%2520Certificate%2520FE-59043b15f3&urlhash=IAQE&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BYoBO7QobR4a4X9r5S2igzg%3D%3D',
  },
  {
    title: 'Front-end Development with React',
    provider: 'Coursera',
    logo: '/logo-coursera.svg',
    link: 'https://www.coursera.org/account/accomplishments/certificate/CX6K6KQK6TK9',
  },
  {
    title: 'Interactivity with JavaScript',
    provider: 'Coursera',
    logo: '/logo-coursera.svg',
    link: 'https://www.coursera.org/account/accomplishments/certificate/2UR6UPYDFXLT',
  },
  {
    title: 'Advanced Styling with Responsive Design',
    provider: 'Coursera',
    logo: '/logo-coursera.svg',
    link: 'https://www.coursera.org/account/accomplishments/certificate/646M8Q2VFM8Q',
  },
  {
    title: 'The Complete Node.js Developer Course',
    provider: 'Udemy',
    logo: '/logo-udemy.svg',
    link: 'https://www.udemy.com/certificate/UC-2NLRJROI/',
  },
  {
    title: 'The Complete SQL Master Class',
    provider: 'Udemy',
    logo: '/logo-udemy.svg',
    link: 'https://www.udemy.com/certificate/UC-b288be6e-b63b-4d39-8e9b-340081b4eda2/',
  },
  {
    title: 'Introduction to CSS3',
    provider: 'Coursera',
    logo: '/logo-coursera.svg',
    link: 'https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fwww.coursera.org%2Faccount%2Faccomplishments%2Fverify%2F4R3AMGSK77B9&urlhash=-IRT&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BYoBO7QobR4a4X9r5S2igzg%3D%3D',
  },
  {
    title: 'Introduction to HTML5',
    provider: 'Coursera',
    logo: '/logo-coursera.svg',
    link: 'https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fwww.coursera.org%2Faccount%2Faccomplishments%2Fverify%2FL4DGUVFBMA65&urlhash=Oys-&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BYoBO7QobR4a4X9r5S2igzg%3D%3D',
  },
  {
    title: 'JavaScript ES6 Certified',
    provider: 'LinkedIn',
    logo: '/logo-linkedin.svg',
    link: 'https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fskillvalue.com%2Fen%2Fcertificate%2Fs5qRast0eSbpUB8Oz6i0J5qAtVb6G7clKOr7zTuDEMfB4fft7FF0gBbS08ms&urlhash=JLRq&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BYoBO7QobR4a4X9r5S2igzg%3D%3D',
  },
]

const education = [
  {
    title: 'Information Science and Engineering',
    school: 'Vemana Institute of Technologies',
    year: '2017',
    description: 'Focused on software engineering fundamentals, data structures, databases, and web application development.',
  },
  {
    title: 'Intermediate in Science',
    school: 'Orchid Public Higher Secondary School',
    year: '2012',
    description: 'Built a strong base in mathematics and analytical reasoning that shaped my engineering approach.',
  },
  {
    title: 'SSLC',
    school: 'Everest English Boarding School',
    year: '2010',
    description: 'Established early academic discipline, communication skills, and problem-solving mindset.',
  },
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

const sectionIcons = {
  about: FiCompass,
  collaborate: FiUsers,
  strengths: FiStar,
  skills: FiCpu,
  experience: FiBriefcase,
  projects: FiLayers,
  education: FiBookOpen,
  certifications: FiAward,
  contact: FiMail,
}

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
        <a
          className="social-link"
          href="https://github.com/jvickram"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
        >
          <FiGithub />
        </a>
        <a
          className="social-link"
          href="https://www.linkedin.com/in/bickey-jaisawal-850a8782/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
        >
          <FiLinkedin />
        </a>
      </nav>

      <section className="hero">
        <article className="hero-card">
          <img className="profile-image" src="/MeOnBeach.jpeg" alt="Bickey Jaisawal" />
          <div>
            <p className="eyebrow">Portfolio</p>
            <div className="hero-badges">
              <span className="hero-badge">
                <FiMap /> Bengaluru
              </span>
              <span className="hero-badge">
                <FiFlag /> Open to Roles
              </span>
            </div>
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
              <a className="btn btn-secondary" href="https://github.com/jvickram" target="_blank" rel="noreferrer">
                <FiGithub /> GitHub
              </a>
              <a
                className="btn btn-secondary"
                href="https://www.linkedin.com/in/bickey-jaisawal-850a8782/"
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </article>

        <article className="stats-card">
          {impactStats.map((stat) => (
            <div className="stat" key={stat.label}>
              <FiActivity className="stat-icon" />
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </article>
      </section>

      <section className="spotlight-grid" id="about">
        <article className="card intro-band">
          <div>
            <p className="group-title section-kicker">
              <sectionIcons.about /> About Me
            </p>
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
            <img className="spotlight-visual" src="/flow-architecture.svg" alt="Architecture and delivery illustration" />
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
        <h2 className="with-icon">
          <sectionIcons.collaborate /> How I Collaborate
        </h2>
        <ul className="offer-list">
          {collaborationStyle.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2 className="with-icon">
          <sectionIcons.strengths /> What I Bring
        </h2>
        <div className="strength-grid">
          {strengths.map((item) => (
            <article key={item.title} className="strength-card">
              <item.icon className="strength-icon" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2 className="with-icon">
          <FiSettings /> How I Can Help
        </h2>
        <ul className="offer-list">
          {offerings.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="card" id="skills">
        <h2 className="with-icon">
          <sectionIcons.skills /> Tech Stack & Capabilities
        </h2>
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
        <h2 className="with-icon">
          <sectionIcons.experience /> Career Journey
        </h2>
        <img className="career-banner" src="/career-path.svg" alt="Career progression visual" />
        <div className="timeline">
          {experience.map((job) => (
            <article className="timeline-item" key={`${job.role}-${job.company}`}>
              <div className="timeline-top">
                <img className="company-logo" src={job.logo} alt={`${job.company} logo mark`} />
                <div>
                  <h3>
                    {job.role} <span>@ {job.company}</span>
                  </h3>
                  <p className="meta period">{job.period}</p>
                </div>
              </div>
              <ul className="highlights">
                {job.highlights.slice(0, 2).map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="card" id="projects">
        <h2 className="with-icon">
          <sectionIcons.projects /> Selected Case Studies
        </h2>
        <img className="projects-banner" src="/case-study-art.svg" alt="Case studies visual banner" />
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

      <section className="card education-section" id="education">
        <h2 className="with-icon">
          <sectionIcons.education /> Education
        </h2>
        <div className="edu-header-row">
          <p className="panel-note">Academic Foundation</p>
          <p className="edu-count">3 Milestones</p>
        </div>
        <ul className="edu-list">
          {education.map((item) => (
            <li className="edu-item" key={item.title}>
              <div className="edu-top">
                <strong className="edu-degree">{item.title}</strong>
                <span className="edu-year">{item.year}</span>
              </div>
              <p className="edu-school">{item.school}</p>
              <p className="edu-desc">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="card certification-section" id="certifications">
        <h2 className="with-icon">
          <sectionIcons.certifications /> Certifications
        </h2>
        <p className="panel-note">Professional learning and verified credentials</p>
        <ul className="cert-list">
          {certifications.map((item) => (
            <li key={item.title} className="cert-item">
              <img src={item.logo} alt={`${item.provider} logo`} className="cert-logo" />
              <div>
                <p className="cert-title">{item.title}</p>
                <p className="cert-provider">{item.provider}</p>
                <a className="cert-link" href={item.link} target="_blank" rel="noreferrer">
                  View Certificate
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="card edu-meta">
        <p className="edu-meta-title">Languages & Interests</p>
        <p>English, Hindi • Kick Boxing • Music • Science Fiction</p>
      </section>

      <section className="footer-note" id="contact">
        <div className="cta-card">
          <img className="contact-illustration" src="/contact-illustration.svg" alt="Contact illustration" />
          <h2 className="with-icon cta-title">
            <sectionIcons.contact /> Let&apos;s build something impactful
          </h2>
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
