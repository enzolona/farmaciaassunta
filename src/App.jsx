import { useEffect } from 'react'
import Navbar from './Components/Navbar'
import TurnoAlert from './Components/TurnoAlert'
import Hero from './Components/Hero'
import Services from './Components/Services'
import Blogs from './Components/Blogs'
import About from './Components/About'
import Turns from './Components/Turns'
import DownloadSection from './Components/DownloadSection'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <TurnoAlert />
      <main>
        <section id="home"><Hero /></section>
        <section id="services"><Services /></section>
        <section id="turns"><Turns /></section>
        <section id="blogs"><Blogs /></section>
        <section id="about"><About /></section>
        <section id="app"><DownloadSection /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  )
}

export default App
