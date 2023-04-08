import {Link, useResolvedPath, useMatch} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';

export default function Projects() {

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    function fadeInOnScroll() {
      const element = document.getElementById('projects');

      if (!element) {
        return;
      }

      const distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
      const elementHeight = element.offsetHeight;
      const scrollTop = document.documentElement.scrollTop;

      const newOpacity = (scrollTop - distanceToTop + window.innerHeight) / (elementHeight * 0.6);
      setOpacity(newOpacity <= 1 ? newOpacity : 1);
    }

    window.addEventListener('scroll', fadeInOnScroll);

    return () => {
      window.removeEventListener('scroll', fadeInOnScroll);
    };
  }, []);




  document.title = "@tttaymoor"
  return(
      
    <div>
      <div id="projects" style={{ opacity }}>
            <div id="p1"></div>
            <div id="p2"></div>
            <div id="p3"></div>
            <div id="p4"></div>
            <div id="p5"></div>
            <div id="p6"></div>
            <div id="p7"></div>
            <div id="p8"></div>
            <div id="p9"></div>
            <div id="p10"></div>
      </div>
    </div>

  )
}
