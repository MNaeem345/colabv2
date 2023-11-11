import React, {useEffect, useState} from 'react';
import '../components/Navbar.css';
import logo from '../img/MN.png';
import '@fortawesome/fontawesome-free/css/all.css';
import pdf from "../img/MohammedNaeemResume.pdf";




export default function Navbarr() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
  
    if (targetElement) {

        targetElement.scrollIntoView({
        behavior:'smooth',
        block:'center' // or 'center' to scroll to the center of the target
        
      });
    }
  }
  const handleSmoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
  
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top - 100;
      const start = window.pageYOffset;
      const duration = 1000; // Adjust the duration as needed
      let startTime = null;
  
      function scrollAnimation(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;
        const easeInOutCubic = t => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1);
        const scrollTo = start + offsetTop * easeInOutCubic(progress);
  
        window.scrollTo(0, scrollTo);
  
        if (progress < 1) {
          requestAnimationFrame(scrollAnimation);
        }
      }
  
      requestAnimationFrame(scrollAnimation);
    }
  };
  

  return(
    <section id='top'>
    <div className='nav-container'>
      <nav className={`nav-bar ${isOpen ? 'open' : ''}`}>
        <a href='#top' onClick={() => handleSmoothScroll("top")} className="logo"><img src={logo} className="logo"></img></a>
        <button className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
                <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`} />
            </button>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <ul className='links'>
          <a href='#about' onClick={() => handleSmoothScroll("about")}><li>About</li></a>
          <a href='#projects' onClick={() => handleSmoothScroll("projects")}><li>Projects</li></a>
          <a href='#pokebattle' onClick={() => handleSmoothScroll("pokebattle")}><li>Pokemon</li></a>
        </ul>
        <a href={pdf} target="_blank"><button className='res-button'>Resume</button></a>
        </div>
      </nav>
    </div>
    </section>
  )
}
