import {Link, useResolvedPath, useMatch} from "react-router-dom"
import '../styles/Projects.css';

export default function Projects() {

  document.title = "@tttaymoor"

  return(
    <div>
    <p id='mastheadtext'>Hi! I'm Taymoor.</p>

    <Link id='cover1' to='/voyageur'><img src='img2.png' alt='voyageur cover'
          onMouseOver={e => (e.currentTarget.src = "img1.png")}
          onMouseOut={e => (e.currentTarget.src = "img2.png")}></img></Link>
    <Link id='cover2' to='/'><img src='img1.png' alt='thing'
          onMouseOver={e => (e.currentTarget.src = "img2.png")}
          onMouseOut={e => (e.currentTarget.src = "img1.png")}></img></Link>
    <Link id='cover3' to='/'><img src='img3.png' alt='thing'
          onMouseOver={e => (e.currentTarget.src = "img1.png")}
          onMouseOut={e => (e.currentTarget.src = "img3.png")}></img></Link>
    <Link id='cover4' to='/'><img src='img4.png' alt='thing'
          onMouseOver={e => (e.currentTarget.src = "img1.png")}
          onMouseOut={e => (e.currentTarget.src = "img4.png")}></img></Link>
    </div>

  )
}
