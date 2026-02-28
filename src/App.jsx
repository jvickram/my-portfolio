import { lazy, Suspense, useEffect, useState } from 'react'
import './App.css'

const DeferredSections = lazy(() => import('./DeferredSections'))
const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

const IconBase = ({ children, ...props }) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    {children}
  </svg>
)

const FiActivity = (props) => (
  <IconBase {...props}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </IconBase>
)

const FiCompass = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 14 14 10 13 13 10 14" />
  </IconBase>
)

const FiCode = (props) => (
  <IconBase {...props}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </IconBase>
)

const FiBriefcase = (props) => (
  <IconBase {...props}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M9 7V5a3 3 0 0 1 6 0v2" />
  </IconBase>
)

const FiLayers = (props) => (
  <IconBase {...props}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 12 12 17 22 12" />
    <polyline points="2 17 12 22 22 17" />
  </IconBase>
)

const FiBookOpen = (props) => (
  <IconBase {...props}>
    <path d="M2 6.5A3.5 3.5 0 0 1 5.5 3H11v18H5.5A3.5 3.5 0 0 0 2 24z" />
    <path d="M22 6.5A3.5 3.5 0 0 0 18.5 3H13v18h5.5A3.5 3.5 0 0 1 22 24z" />
  </IconBase>
)

const FiAward = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="8" r="6" />
    <path d="M8.5 14.5 7 22l5-3 5 3-1.5-7.5" />
  </IconBase>
)

const FiMail = (props) => (
  <IconBase {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </IconBase>
)

const FiFlag = (props) => (
  <IconBase {...props}>
    <path d="M4 22V4" />
    <path d="M4 4h12l-2 4 2 4H4" />
  </IconBase>
)

const FiGithub = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2.2c-3.3.8-4-1.4-4-1.4-.6-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.7-2.7-.3-5.6-1.3-5.6-6A4.7 4.7 0 0 1 6.4 7c-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.6 11.6 0 0 1 6 0c2.2-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.9 1.3 2.1 1.3 3.5 0 4.7-2.9 5.7-5.6 6 .5.4.9 1.1.9 2.3v3.4c0 .4.2.7.8.6A12 12 0 0 0 12 .5Z" />
  </svg>
)

const FiLinkedin = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.7 4.8 6.2V21h-4v-5.4c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9V21h-4V9Z" />
  </svg>
)

const FiMap = (props) => (
  <IconBase {...props}>
    <polygon points="1 6 8 3 16 6 23 3 23 18 16 21 8 18 1 21" />
    <path d="M8 3v15M16 6v15" />
  </IconBase>
)

const impactStats = [
  { value: '8+', label: 'Years Experience' },
  { value: '150%', label: 'Delivery Velocity Gain' },
  { value: '99.98%', label: 'Platform Uptime' },
  { value: '90%', label: 'Security Backlog Reduced' },
]

const domainFocus = ['Legal Tech', 'Education / LMS', 'Marketplace & E-commerce', 'Enterprise Platform Modernization']
const currentlyFocused = [
  'Platform modernization with React + Node.js',
  'Scalable backend architecture and reliability engineering',
  'Secure SDLC and high-confidence release pipelines',
]

const navLinks = [
  { label: 'About', href: '#about', icon: FiCompass },
  { label: 'Skills', href: '#skills', icon: FiCode },
  { label: 'Journey', href: '#experience', icon: FiBriefcase },
  { label: 'Projects', href: '#projects', icon: FiLayers },
  { label: 'Education', href: '#education', icon: FiBookOpen },
  { label: 'Certs', href: '#certifications', icon: FiAward },
  { label: 'Contact', href: '#contact', icon: FiMail },
]

function App() {
  const [theme, setTheme] = useState('light')
  const [isMobile, setIsMobile] = useState(false)
  const [showDeferredSections, setShowDeferredSections] = useState(false)
  const [activeSection, setActiveSection] = useState('#about')

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

  useEffect(() => {
    if (!window.matchMedia) {
      return undefined
    }

    const mediaQuery = window.matchMedia('(max-width: 760px)')
    const updateViewport = () => setIsMobile(mediaQuery.matches)
    updateViewport()

    mediaQuery.addEventListener('change', updateViewport)
    return () => mediaQuery.removeEventListener('change', updateViewport)
  }, [])

  useEffect(() => {
    if (isMobile) {
      return undefined
    }

    const sectionIds = navLinks.map((item) => item.href.replace('#', ''))
    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((sectionElement) => sectionElement !== null)

    if (!sections.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry?.target?.id) {
          setActiveSection(`#${visibleEntry.target.id}`)
        }
      },
      {
        threshold: [0.35, 0.6],
        rootMargin: '-15% 0px -55% 0px',
      },
    )

    sections.forEach((sectionElement) => observer.observe(sectionElement))

    return () => observer.disconnect()
  }, [isMobile])

  useEffect(() => {
    if (!isMobile) {
      setShowDeferredSections(true)
      return undefined
    }

    let timeoutId
    const loadDeferred = () => setShowDeferredSections(true)

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(loadDeferred, { timeout: 2000 })
      return () => window.cancelIdleCallback(idleId)
    }

    timeoutId = window.setTimeout(loadDeferred, 1400)
    return () => window.clearTimeout(timeoutId)
  }, [isMobile])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <main className={`portfolio ${theme} ${isMobile ? 'mobile' : ''}`}>
      <nav className="top-nav">
        <a className="brand" href="#about">
          BJ
        </a>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-label={link.label}
              className={activeSection === link.href ? 'active' : ''}
            >
              <link.icon className="nav-glyph" aria-hidden="true" />
              <span className="nav-label">{link.label}</span>
            </a>
          ))}
        </div>
        <button className="theme-toggle compact" onClick={toggleTheme} type="button" aria-label="Toggle theme">
          {theme === 'light' ? '🌙' : '☀️'}
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
          <img
            className="profile-image"
            src={asset('MeOnBeach-mobile.jpg')}
            srcSet={`${asset('MeOnBeach-mobile.jpg')} 170w, ${asset('MeOnBeach-optimized.jpg')} 340w`}
            sizes="(max-width: 760px) 120px, 170px"
            alt="Bickey Jaisawal"
            width="170"
            height="170"
            decoding="async"
            fetchPriority="high"
          />
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
            <p className="group-title section-kicker">About Me</p>
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
            {!isMobile ? (
              <img
                className="spotlight-visual"
                src={asset('flow-architecture.svg')}
                alt="Architecture and delivery illustration"
                loading="lazy"
                decoding="async"
              />
            ) : null}
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

      <Suspense fallback={<section className="card"><p className="panel-note">Loading full portfolio sections…</p></section>}>
        {showDeferredSections ? <DeferredSections isMobile={isMobile} /> : null}
      </Suspense>
    </main>
  )
}

export default App
