import {Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import About from "./components/About";
import Projects from "./components/Projects";
import ScrollUp from "./components/ScrollUp"
import Masthead from "./components/Masthead";
import SocialIcons from "./components/SocialIcons";
import Contact from "./components/Contact";
import {Parallax, ParallaxLayer} from "@react-spring/parallax"

import './styles/App.css'

let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;

    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));

console.log(links);

links.forEach(link => {
    link.addEventListener("mouseover", () => {
        innerCursor.classList.add("grow");
        outerCursor.classList.add("grow");
    });
});

links.forEach(link => {
    link.addEventListener("mouseleave", () => {
        innerCursor.classList.remove("grow");
        outerCursor.classList.remove("grow");
    });
});


function App() {
  return (
      <>

      <div className="container">
        

                <Navbar />

                <Masthead />
 
                <Routes>
                    <Route path="/" element={<Projects/>}/>
                    <Route path="*" element={<Projects />} />
                </Routes>

                    <Contact />         
     
      </div>
      {/* <ScrollUp />
      <SocialIcons /> */}

      </>
      
  )
}

export default App;
