import { Link, Navigate, useParams } from 'react-router-dom'
import { caseStudies } from './caseStudies'
import './DesignPortfolio.css'

function CaseStudyPage() {
  const { slug } = useParams()
  const caseStudy = caseStudies.find((item) => item.slug === slug)

  if (!caseStudy) {
    return <Navigate replace to="/" />
  }

  return (
    <main
      className="site-page detail-page"
      style={{
        '--project-accent': caseStudy.theme.accent,
        '--project-accent-soft': caseStudy.theme.accentSoft,
        '--project-glow': caseStudy.theme.glow,
        '--project-glow-soft': caseStudy.theme.glowSoft,
      }}
    >
      <header className="site-header">
        <Link to="/" className="site-brand" aria-label="Go to home page">
          James Pleau
        </Link>

        <nav className="site-nav" aria-label="Primary">
          <Link to="/">Home</Link>

          <div className="site-nav-dropdown">
            <Link to="/#work" className="site-nav-dropdown-trigger">
              Projects
            </Link>

            <div className="site-nav-dropdown-menu" aria-label="Project shortcuts">
              {caseStudies.map((item) => (
                <Link key={item.id} to={`/case-study/${item.slug}`} className="site-nav-dropdown-link">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </nav>

        <Link className="site-header-link" to="/resume" aria-label="Open resume preview page">
          Resume
        </Link>
      </header>

      <section className="detail-hero" aria-labelledby="case-study-title">
        <div className="detail-hero-copy">
          <p className="detail-kicker">Case Study</p>
          <h1 className="detail-title" id="case-study-title">
            {caseStudy.title}
          </h1>
          <p className="detail-summary detail-summary--lead">{caseStudy.summary}</p>
          <p className="detail-intro">{caseStudy.intro}</p>

          <dl className="detail-metrics" aria-label="Project details">
            {caseStudy.details.map((detail) => (
              <div key={detail.label} className="detail-metric">
                <dt>{detail.label}</dt>
                <dd>{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="detail-hero-media">
          <div className="detail-media-frame">
            <img src={caseStudy.img} alt={caseStudy.title} className="detail-image" loading="eager" />
          </div>
        </div>
      </section>

      <section className="detail-story" aria-labelledby="story-heading">
        <div className="section-heading detail-story-heading">
          <p id="story-heading">Story</p>
          <span>{caseStudy.story.length} scenes</span>
        </div>

        <div className="story-stack">
          {caseStudy.story.map((beat, index) => (
            <article key={beat.eyebrow} className={`story-beat story-beat--${beat.layout}`}>
              <div className="story-copy">
                <p className="detail-section-label">{beat.eyebrow}</p>
                <h2 className="detail-section-title">{beat.title}</h2>
                <p className="detail-copy">{beat.text}</p>
                <p className="story-index">0{index + 1}</p>
              </div>

              <div className="story-visual">
                <div className="story-visual-frame">
                  <img
                    src={beat.image}
                    alt={beat.alt}
                    className="story-image"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-outro">
        <div className="detail-outro-panel">
          <p className="detail-kicker">Takeaway</p>
          <h2 className="detail-section-title">
            {caseStudy.takeaway?.title || "Vertical storytelling makes the work feel more complete."}
          </h2>
          <p className="detail-copy">
            {caseStudy.takeaway?.text || "Each project now reads like a short narrative instead of a static screenshot."}
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <Link to="/">Back to home</Link>
        <Link to="/resume">Resume PDF</Link>
      </footer>
    </main>
  )
}

export default CaseStudyPage