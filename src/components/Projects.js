import {Link, useResolvedPath, useMatch} from "react-router-dom"
import '../styles/Projects.css';

export default function Projects() {

  document.title = "@tttaymoor"

  return(
    <div>
      <img id="masthead-header" src="whitebg.gif" onContextMenu={(e) => e.preventDefault()}></img>
      
      <img id="masthead-arrow-animation" src="masthead-arrow-animation.gif" onContextMenu={(e) => e.preventDefault()}
          onMouseOver={e => (e.currentTarget.src = "altscrolltext.png")}
          onMouseOut={e => (e.currentTarget.src = "masthead-arrow-animation.gif")}></img>

    <Link id='cover1' to='/voyageur'><img src='img2.png' alt='voyageur cover'
          onMouseOver={e => (e.currentTarget.src = "img2-hover.png")}
          onMouseOut={e => (e.currentTarget.src = "img2.png")}></img></Link>
    <Link id='cover2' to='/'><img src='img1.png' alt='thing'
          onMouseOver={e => (e.currentTarget.src = "img1-hover.png")}
          onMouseOut={e => (e.currentTarget.src = "img1.png")}></img></Link>
    <Link id='cover3' to='/'><img src='img3.png' alt='thing'
          onMouseOver={e => (e.currentTarget.src = "img3-hover.png")}
          onMouseOut={e => (e.currentTarget.src = "img3.png")}></img></Link>
    <Link id='cover4' to='/'><img src='img4.png' alt='thing'
          onMouseOver={e => (e.currentTarget.src = "img4-hover.png")}
          onMouseOut={e => (e.currentTarget.src = "img4.png")}></img></Link>
    <Link id='cover5' to='/'><img src='img5.png' alt='thing'
          onMouseOver={e => (e.currentTarget.src = "img5-hover.png")}
          onMouseOut={e => (e.currentTarget.src = "img5.png")}></img></Link>
  <Link id='cover6' to='/'><img src='img6.png' alt='thing'
          onMouseOver={e => (e.currentTarget.src = "img6-hover.png")}
          onMouseOut={e => (e.currentTarget.src = "img6.png")}></img></Link>

    </div>

  )
}
