import { NavLink } from "react-router-dom"
import "./NavBar.css"

function NavBar() {
  return (
    <NavLink to="/" className="navbar">
      Home
    </NavLink>
  )
}

export default NavBar
