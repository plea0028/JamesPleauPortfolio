import DesignPortfolio from './DesignPortfolio'
import { Route, Routes } from 'react-router-dom'
import CaseStudyPage from './CaseStudyPage'
import ResumePreview from './ResumePreview'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'

function PageTransition({ children }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return children
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function App() {
  const location = useLocation()

  return (
    <>
      <Analytics />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><DesignPortfolio /></PageTransition>} />
          <Route path="/case-study/:slug" element={<PageTransition><CaseStudyPage /></PageTransition>} />
          <Route path="/resume" element={<PageTransition><ResumePreview /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
