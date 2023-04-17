import { Link } from "react-router-dom";

export default function Header () {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-ul">
          <li className="header__nav-ul-li">
            <Link className="header__nav-ul-li-link" to='/'>Crear una cita</Link>
          </li>
          <li className="header__nav-ul-li">
            <Link className="header__nav-ul-li-link" to='/Notifications'>Ver citas</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}