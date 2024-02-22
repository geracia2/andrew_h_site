import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './assets/pages/Home';
import VoiceOver from './assets/pages/VoiceOver';
import Studio from './assets/pages/Studio';
import Resume from './assets/pages/Resume';
import Podcast from './assets/pages/Podcast'
import Contact from './assets/pages/Contact'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/voiceover" element={<VoiceOver />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App


/*
// player iframe 
  <iframe 
  id = "jesaei-anchor-podcast-iframe" 
  src = "https://anchor.fm/andrewhartmanvo/embed" 
  style = "" 
  frameborder = "0" 
  scrolling = "no" 
  name = "jesaei_podcast_iframe"
  >
  </iframe >
  */