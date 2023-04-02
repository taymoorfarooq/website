import {Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import About from "./components/About";
import Projects from "./components/Projects";
import ScrollUp from "./components/ScrollUp"
import Voyageur from "./components/Voyageur"
import SocialIcons from "./components/SocialIcons";


import './styles/App.css'

function App() {
  return (
      <>
      <Navbar />
      <div className="container">
          <Routes>
              <Route path="/" element={<Projects/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/voyageur" element={<Voyageur/>}/>
              <Route path="*" element={<Projects />} />
          </Routes>
      </div>
      <ScrollUp />
      <SocialIcons />

      </>
      
  )
}

export default App;
