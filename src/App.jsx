import { useState } from 'react'
import './App.css'
import Nav from './components/Nav';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
    function toggleDarkMode(){
        setIsDarkMode(prevMode => !prevMode)
    }

  return (
    <div className="container mx-auto">
      <Nav 
        darkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <MainContent darkMode={isDarkMode} />
      <Footer />
    </div>
  )
}

export default App
