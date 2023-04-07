import React, { useState, useEffect } from 'react';
import '../styles/Masthead.css';

export default function Masthead() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    function fadeOutOnScroll() {
      const element = document.getElementById('masthead');

      if (!element) {
        return;
      }

      const distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
      const elementHeight = element.offsetHeight;
      const scrollTop = document.documentElement.scrollTop;

      const newOpacity = 1 - (scrollTop - distanceToTop) / elementHeight;
      setOpacity(newOpacity >= 0 ? newOpacity : 0);
    }

    window.addEventListener('scroll', fadeOutOnScroll);

    return () => {
      window.removeEventListener('scroll', fadeOutOnScroll);
    };
  }, []);

  return (
    <div id="masthead" style={{ opacity }}>
      <h1 id="mastheader">TAYMOOR</h1>
      <p id="mastheadparagraph">
        I'm a Toronto-based artist studying Computational Cognition at the University of Toronto
      </p>
      <div id="button">
        <a href="youtube.com">
          <p>SAY HI!</p>
        </a>
      </div>
    </div>
  );
}
