import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
//import Counter from './components/counter'
import Nav from './components/Nav';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {

  return (
    <div className="container mx-auto">
      <Nav />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
