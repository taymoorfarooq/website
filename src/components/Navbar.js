import {Link} from "react-scroll"
import '../styles/Navbar.css'

export default function Navbar() {

    return <nav className="nav">
        <ul id="leftmenu">
          <Link to="masthead" spy={true} smooth={true} offset={-250} duration={1000}>TAYMOOR FAROOQ</Link>
        </ul>

        <ul id="rightmenu">
          <Link to="projects" spy={true} smooth={true} offset={-110} duration={1000}>PROJECTS</Link>
          <Link to="about" spy={true} smooth={true} offset={830} duration={1000}>ABOUT</Link>
          <Link to="contact" spy={true} smooth={true} offset={830} duration={1000}>CONTACT</Link>
        </ul>

    </nav>
}
  