import "./style.css"
import Logo from "../assets/images/logo.png"
import { FaYoutube, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa"

const Blog = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">PP. Kreatif Al-Muhsinin</span>
        <img src={Logo} alt="" width="120" />
        <p>
          Pondok Pesantren Kreatif Al-Muhsinin terletak di desa cukir Kabupaten
          Jombang. Pondok ini didirikan pada tahun 2014 oleh Kyai Agus Maulana.
        </p>
      </div>
      {/* <div className="sidebarItem">
        <span className="sidebarTitle">Kategori</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Hadits</li>
          <li className="sidebarListItem">Fiqih</li>
          <li className="sidebarListItem">Hikmah</li>
          <li className="sidebarListItem">Nasihat</li>
        </ul>
      </div> */}
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <a
            className="sidebarIcon"
            href="https://www.youtube.com/channel/UCvXFZzHCMtUA6OOrEPhhh6w"
          >
            <FaYoutube />
          </a>
          <a
            className="sidebarIcon"
            href="https://www.instagram.com/almuhsinin_cukir/"
          >
            <FaInstagramSquare />
          </a>
          <a
            className="sidebarIcon"
            href="https://www.facebook.com/almuhsninin/"
          >
            <FaFacebookSquare />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Blog
