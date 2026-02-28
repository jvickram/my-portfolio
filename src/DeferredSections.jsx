const IconBase = ({ children, ...props }) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    {children}
  </svg>
)

const FiAward = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="8" r="6" />
    <path d="M8.5 14.5 7 22l5-3 5 3-1.5-7.5" />
  </IconBase>
)

const FiBookOpen = (props) => (
  <IconBase {...props}>
    <path d="M2 6.5A3.5 3.5 0 0 1 5.5 3H11v18H5.5A3.5 3.5 0 0 0 2 24z" />
    <path d="M22 6.5A3.5 3.5 0 0 0 18.5 3H13v18h5.5A3.5 3.5 0 0 1 22 24z" />
  </IconBase>
)

const FiBriefcase = (props) => (
  <IconBase {...props}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M9 7V5a3 3 0 0 1 6 0v2" />
  </IconBase>
)

const FiCpu = (props) => (
  <IconBase {...props}>
    <rect x="8" y="8" width="8" height="8" rx="1" />
    <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
  </IconBase>
)

const FiGlobe = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
  </IconBase>
)

const FiHeadphones = (props) => (
  <IconBase {...props}>
    <path d="M4 13a8 8 0 0 1 16 0" />
    <rect x="3" y="13" width="4" height="7" rx="2" />
    <rect x="17" y="13" width="4" height="7" rx="2" />
  </IconBase>
)

const FiLayers = (props) => (
  <IconBase {...props}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 12 12 17 22 12" />
    <polyline points="2 17 12 22 22 17" />
  </IconBase>
)

const FiMail = (props) => (
  <IconBase {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </IconBase>
)

const FiSettings = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.6 1.6 0 0 0 .3 1.7l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.7-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.2a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.7.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.7 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.2a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.7l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.7.3h.1a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.2a1.6 1.6 0 0 0 1 1.5h.1a1.6 1.6 0 0 0 1.7-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.7v.1a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.2a1.6 1.6 0 0 0-1.4 1Z" />
  </IconBase>
)

const FiShield = (props) => (
  <IconBase {...props}>
    <path d="M12 2 4 5v6c0 5.2 3.4 9.9 8 11 4.6-1.1 8-5.8 8-11V5l-8-3Z" />
  </IconBase>
)

const FiStar = (props) => (
  <IconBase {...props}>
    <polygon points="12 2 15.1 8.3 22 9.3 17 14.2 18.2 21 12 17.7 5.8 21 7 14.2 2 9.3 8.9 8.3 12 2" />
  </IconBase>
)

const FiTarget = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="2" />
  </IconBase>
)

const FiUsers = (props) => (
  <IconBase {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
    <path d="M16 3.1a4 4 0 0 1 0 7.8" />
  </IconBase>
)

const FiZap = (props) => (
  <IconBase {...props}>
    <polygon points="13 2 4 14 11 14 10 22 20 9 13 9 13 2" />
  </IconBase>
)

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

const languages = [
  { name: 'English', level: 'Professional' },
  { name: 'Hindi', level: 'Native / Fluent' },
]

const interests = [
  { label: 'Kick Boxing', icon: FiZap },
  { label: 'Music', icon: FiHeadphones },
  { label: 'Science Fiction', icon: FiGlobe },
]

function DeferredSections({ isMobile }) {
  const visibleExperience = isMobile ? experience.slice(0, 3) : experience
  const visibleProjects = isMobile ? featuredProjects.slice(0, 2) : featuredProjects
  const visibleCertifications = isMobile ? certifications.slice(0, 4) : certifications

  return (
    <>
      <section className="card">
        <h2 className="with-icon">
          <FiUsers /> How I Collaborate
        </h2>
        <ul className="offer-list">
          {collaborationStyle.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2 className="with-icon">
          <FiStar /> What I Bring
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
          <FiCpu /> Tech Stack & Capabilities
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
          <FiBriefcase /> Career Journey
        </h2>
        {!isMobile ? (
          <img
            className="career-banner"
            src="/career-path.svg"
            alt="Career progression visual"
            loading="lazy"
            decoding="async"
          />
        ) : null}
        <div className="timeline">
          {visibleExperience.map((job) => (
            <article className="timeline-item" key={`${job.role}-${job.company}`}>
              <div className="timeline-top">
                <img className="company-logo" src={job.logo} alt={`${job.company} logo mark`} loading="lazy" decoding="async" />
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
          <FiLayers /> Selected Case Studies
        </h2>
        {!isMobile ? (
          <img
            className="projects-banner"
            src="/case-study-art.svg"
            alt="Case studies visual banner"
            loading="lazy"
            decoding="async"
          />
        ) : null}
        <div className="project-grid">
          {visibleProjects.map((project) => (
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
          <FiBookOpen /> Education
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
          <FiAward /> Certifications
        </h2>
        <p className="panel-note">Professional learning and verified credentials</p>
        <ul className="cert-list">
          {visibleCertifications.map((item) => (
            <li key={item.title} className="cert-item">
              <img src={item.logo} alt={`${item.provider} logo`} className="cert-logo" loading="lazy" decoding="async" />
              <div>
                <p className="cert-title">{item.title}</p>
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
        <div className="meta-grid">
          <div className="meta-block">
            <p className="meta-block-title">Languages</p>
            <div className="language-list">
              {languages.map((item) => (
                <div className="language-chip" key={item.name}>
                  <span className="language-dot" />
                  <div>
                    <p className="language-name">{item.name}</p>
                    <p className="language-level">{item.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="meta-block">
            <p className="meta-block-title">Interests</p>
            <div className="interest-list">
              {interests.map((item) => (
                <div className="interest-chip" key={item.label}>
                  <item.icon />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="footer-note" id="contact">
        <div className="cta-card">
          {!isMobile ? (
            <img
              className="contact-illustration"
              src="/contact-illustration.svg"
              alt="Contact illustration"
              loading="lazy"
              decoding="async"
            />
          ) : null}
          <h2 className="with-icon cta-title">
            <FiMail /> Let&apos;s build something impactful
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
    </>
  )
}

export default DeferredSections
