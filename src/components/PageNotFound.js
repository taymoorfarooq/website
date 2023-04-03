import {Link, useResolvedPath, useMatch} from "react-router-dom"
import '../styles/PageNotFound.css';

export default function PageNotFound() {

  document.title = "@tttaymoor"

  return(
      <div id="rectangle">
          <h1 id="errorcode">404</h1>
          <p id="pagenotfound">PAGE NOT FOUND</p>
          
      </div>
  )

}

