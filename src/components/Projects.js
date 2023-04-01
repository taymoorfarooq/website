import {Link, useResolvedPath, useMatch} from "react-router-dom"
import '../styles/Projects.css';

export default function Projects() {

  return(
    <div>
    <p id='mastheadtext'>Hi! I'm Taymoor.</p>

    <Link id='cover1' to='/about'><img src='img2.png' alt='thing'></img></Link>
    <Link id='cover2' to='/'><img src='img1.png' alt='thing'></img></Link>
    <Link id='cover3' to='/'><img src='img3.png' alt='thing'></img></Link>
    <Link id='cover4' to='/'><img src='img4.png' alt='thing'></img></Link>
    </div>

  )
}
