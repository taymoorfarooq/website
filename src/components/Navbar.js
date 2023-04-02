import {Link, useResolvedPath, useMatch} from "react-router-dom"
import '../styles/Navbar.css'

export default function Navbar() {

    return <nav className="nav">
        <ul id="leftmenu">
            <CustomLink to="/">PROJECTS</CustomLink>
            <CustomLink to="/about">ABOUT</CustomLink>
        </ul>

        <CustomLink to="/">
            <img src="white.png" alt="Logo" onContextMenu={(e) => e.preventDefault()}/>
        </CustomLink>   

    </nav>
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }

  