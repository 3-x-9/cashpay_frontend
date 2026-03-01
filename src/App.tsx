import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Trends from './components/Trends'
import TerminalShowcase from './components/TerminalShowcase'
import BusinessModel from './components/BusinessModel'
import Ecosystem from './components/Ecosystem'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/terminal-showcase" element={<TerminalShowcase />} />
          <Route path="/business-model" element={<BusinessModel />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="*" element={<Hero />} />
        </Routes>
      </main>
      <footer style={{
        padding: '4rem 0',
        backgroundColor: 'var(--atmosphere-blue)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <p>&copy; 2025 ATMOSPHERE. All rights reserved.</p>
        </div>
      </footer>
    </Router>
  )
}

export default App
