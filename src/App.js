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


            <About />
        <Contact />

         
     
      </div>
      {/* <ScrollUp />
      <SocialIcons /> */}

      </>
      
  )
}

export default App;
