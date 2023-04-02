import {Link, useResolvedPath, useMatch} from "react-router-dom"
import '../styles/ScrollUp.css';

export default function ScrollUp() {

  return(
    <p id="scrollup"><a href='#top'><img src='arrow.png' onContextMenu={(e) => e.preventDefault()}></img></a></p>
  )
}
