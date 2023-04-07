import {Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import About from "./components/About";
import Projects from "./components/Projects";
import Masthead from "./components/Masthead";
import Contact from "./components/Contact";

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

        <div id="mdiv" class="panels">
            <Masthead />
        </div>

        <div id="pdiv" class="panels">

            <Routes>
                <Route path="/" element={<Projects/>}/>
                <Route path="*" element={<Projects />} />
            </Routes>
        </div>

        <div id="cdiv" class="panels">
        <Contact />   
        </div>
       
     
      </div>
      {/* <ScrollUp />
      <SocialIcons /> */}

      </>
      
  )
}

export default App;
