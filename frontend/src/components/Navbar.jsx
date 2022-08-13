import logo from "../assets/images/logos.png"
import "./style.css"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg myNavbar sticky-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img className="logo" src={logo} alt="..." />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item ">
                <a className="nav-link myNavbar" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link myNavbar" href="/#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link myNavbar" href="/#kegiatan">
                  Kegiatan
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link myNavbar" href="/blog">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
