import React, { useState } from 'react'
import '../styles/Masthead.css';

var masthead = document.getElementById('masthead');

function fadeOutOnScroll(element) {
	if (!element) {
		return;
	}
	
	var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
	var elementHeight = element.offsetHeight;
	var scrollTop = document.documentElement.scrollTop;
	
	var opacity = 1;
	
	if (scrollTop > distanceToTop) {
		opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
	}
	
	if (opacity >= 0) {
		element.style.opacity = opacity;
	}
}

function scrollHandler() {
	fadeOutOnScroll(masthead);
}

window.addEventListener('scroll', scrollHandler);

export default function Masthead() {
  return (
    
    
    <div id="masthead">
      <h1 id="mastheader">TAYMOOR</h1>
      <p id="mastheadparagraph">I'm a Toronto-based artist studying Computational Cognition at the University of Toronto</p>
      <div id="button">
            <a href='youtube.com'><p>SAY HI!</p></a>
          
      </div>
      </div>
      
  )
  
  
}