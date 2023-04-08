import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Masthead from './components/Masthead';
import Contact from './components/Contact';
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import './styles/App.css';

function App() {
  useEffect(() => {
    let innerCursor = document.querySelector('.inner-cursor');
    let outerCursor = document.querySelector('.outer-cursor');

    document.addEventListener('mousemove', moveCursor);

    function moveCursor(e) {
      let x = e.clientX;
      let y = e.clientY;

      innerCursor.style.left = `${x}px`;
      innerCursor.style.top = `${y}px`;
      outerCursor.style.left = `${x}px`;
      outerCursor.style.top = `${y}px`;
    }

    let links = Array.from(document.querySelectorAll('a'));

    links.forEach((link) => {
      link.addEventListener('mouseover', () => {
        innerCursor.classList.add('grow');
        outerCursor.classList.add('grow');
      });
    });

    links.forEach((link) => {
      link.addEventListener('mouseleave', () => {
        innerCursor.classList.remove('grow');
        outerCursor.classList.remove('grow');
      });
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div className="container">
        <Navbar />
        <Masthead />
        <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="*" element={<Projects />} />
        </Routes>
        <Contact />
      </div>
    </>
  );
}

export default App;
