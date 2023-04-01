import {Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import About from "./components/About";
import Projects from "./components/Projects";
import ScrollUp from "./components/ScrollUp"
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
          </Routes>
      </div>
      <ScrollUp />
      <SocialIcons />

      </>
      
  )
}

export default App;
