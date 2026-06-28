import './DesignPortfolio.css'
import { Link } from 'react-router-dom'
import { caseStudies } from './caseStudies'
import mePortrait from './assets/images/me.jpeg'

const quickFacts = [
  'I design clean interfaces with a calm editorial feel.',
  'I build responsive front ends that keep the structure intact.',
  'I like work that is visually strong but easy to maintain.',
]

function DesignPortfolio() {
  return (
    <main className="site-page">
      <header className="site-header">
        <Link to="/" className="site-brand" aria-label="Go to home page">
          James Pleau
        </Link>

        <nav className="site-nav" aria-label="Primary">
          <a href="#home">Home</a>

          <div className="site-nav-dropdown">
            <a href="#work" className="site-nav-dropdown-trigger">
              Projects
            </a>

            <div className="site-nav-dropdown-menu" aria-label="Project shortcuts">
              {caseStudies.map((item) => (
                <Link key={item.id} to={`/case-study/${item.slug}`} className="site-nav-dropdown-link">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <Link className="site-header-link" to="/resume" aria-label="Open resume preview page">
          Resume
        </Link>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-kicker">Digital product designer and front-end developer</div>
        <h1 className="hero-title">Making calm, useful interfaces with a strong point of view.</h1>
        <p className="hero-copy">
          I design and build portfolio-grade product work with a quiet editorial feel, clear
          hierarchy, and a focus on motion that supports the experience instead of distracting
          from it.
        </p>
      </section>

      <section className="portfolio-section" id="work" aria-labelledby="work-heading">
        <div className="section-heading">
          <p id="work-heading">Work</p>
          <span>03 projects</span>
        </div>

        <div className="project-grid">
          {caseStudies.map((item, index) => (
            <Link
              key={item.id}
              className="project-card"
              to={`/case-study/${item.slug}`}
              style={{
                '--project-accent': item.theme.accent,
                '--project-accent-soft': item.theme.accentSoft,
                '--project-glow': item.theme.glow,
                '--project-glow-soft': item.theme.glowSoft,
              }}
            >
              <div className="project-card-media">
                <img src={item.img} alt={item.title} className="project-card-image" loading="lazy" />
              </div>
              <div className="project-card-body">
                <p className="project-card-meta">
                  <span>0{index + 1}</span>
                  <span>{item.category}</span>
                </p>
                <h2 className="project-card-title">{item.title}</h2>
                <p className="project-card-summary">{item.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="portfolio-section portfolio-about" id="about" aria-labelledby="about-heading">
        <div className="section-heading">
          <p>About Me</p>
          <span>Who I am</span>
        </div>

        <div className="about-panel">
          <div className="about-portrait" aria-hidden="true"> 
              <img
                src={mePortrait}
                alt="James Pleau"
                className="about-portrait-image"
                loading="lazy"
              />
          </div>

          <div className="about-section">
            <h2 id="about-heading">I like interfaces that feel edited, not decorated.</h2>
            <p>
              My work sits between product thinking and visual restraint. I care about
              structured layout, readable rhythm, and details that make a system feel intentional.
            </p>

            <ul className="facts-list" aria-label="Highlights">
              {quickFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="portfolio-section portfolio-contact" id="contact" aria-labelledby="contact-heading">
        <div className="section-heading">
          <p>Contact</p>
          <span className="availability-status">
            <span className="status-indicator" aria-hidden="true"></span>
            Available for freelance and full-time
          </span>
        </div>

        <div className="contact-panel">
          <div className="contact-copy">
            <h2 id="contact-heading">Contact</h2>
            <p>
              Reach out if you want to discuss my portfolio, product page, or design system.
            </p>
          </div>

          <div className="contact-actions">
            <a className="contact-button" href="mailto:james.pleau@example.com">
              Get in Touch
            </a>
            <a className="contact-email-subtext" href="mailto:james.pleau@example.com">
              james.pleau@example.com
            </a>
            
            <div className="contact-socials">
              <a href="https://github.com/plea0028" target="_blank" rel="noopener noreferrer" className="social-link">
                GitHub
              </a>
              <span className="social-divider" aria-hidden="true">/</span>
              <a href="https://www.linkedin.com/in/james-pleau/" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <p>© 2026 James Pleau. All rights reserved.</p>
      </footer>
    </main>
  )
}

export default DesignPortfolio