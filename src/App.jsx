import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './assets/pages/Home';
import Resume from './assets/pages/Resume';
import Contact from './assets/pages/Contact'
import Podcast from './assets/pages/Podcast.jsx';
import About from './assets/pages/About.jsx';
import VoiceOver from './assets/pages/vo/VoiceOver.jsx';
import AudioDrama from './assets/pages/vo/AudioDrama.jsx';
import Characters from './assets/pages/vo/Characters.jsx';
import Commercial from './assets/pages/vo/Commercial.jsx';
import Elearning from './assets/pages/vo/Elearning.jsx';
import Explainers from './assets/pages/vo/Explainers.jsx';

import Nav from './assets/ui/Nav';
import { Center, Container } from '@mantine/core';
function App() {

  // conitainer can also use props like below, inline looks like <Container {...centerProps}>
  const centerProps = {
    bg: 'var(--mantine-color-blue-light)',
    h: 2000,
    pt: 100,
  };

  return (
    <>
      <Nav />
      {/* adding a container to control layout */}
      <Container bg='var(--mantine-color-blue-light)' h={2000} pt={100} >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/voiceover" element={<VoiceOver />} />
          <Route path="/audioDrama" element={<AudioDrama />} />
          <Route path="/eLearning" element={<Elearning />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/explainers" element={<Explainers />} />
          <Route path="/commercial" element={<Commercial />} />
        </Routes>
      </Container>
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