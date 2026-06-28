import { Link } from 'react-router-dom'
import resume from './assets/documents/James_Pleau_Front_End_Resume.pdf'
import { caseStudies } from './caseStudies'
import './DesignPortfolio.css'

function ResumePreview() {
  return (
    <main className="site-page resume-page">
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

      <section className="resume-panel" aria-label="Resume preview">

        <iframe
          className="resume-frame"
          src={`${resume}#view=FitH`}
          title="James Pleau resume preview"
          loading="lazy"
        />
        <p className="resume-fallback">
          If the preview does not load on your device, use the download link below.
        </p>
      </section>
    </main>
  );
}

export default ResumePreview
