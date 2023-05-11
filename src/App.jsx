import { useState } from 'react'
import './App.css'
import Nav from './components/Nav';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
    function toggleDarkMode(){
        setIsDarkMode(prevMode => !prevMode)
    }

  return (
    <div className="container mx-auto">
      <Nav 
        darkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
