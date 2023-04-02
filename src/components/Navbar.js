import {Link, useResolvedPath, useMatch} from "react-router-dom"
import { useEffect } from "react"
import '../styles/Navbar.css'

export default function Navbar() {
    useEffect(() => {
      const images = ["white.png", "blue.png"]
      images.forEach((image) => {
        const img = new Image()
        img.src = image
      })
    }, [])

    return <nav className="nav">
        <ul id="leftmenu">
            <CustomLink to="/">PROJECTS</CustomLink>
            <CustomLink to="/about">ABOUT</CustomLink>
        </ul>

        <CustomLink to="/">
            <img src="white.png" alt="Logo"/>
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

  