import React from "react"
import "./style.css"
import { FaYoutube, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa"

const Footer = () => {
  return (
    <div class="footer-basic">
      <div className="text-center">
        <h4>Follow Us</h4>
        <hr />
      </div>
      <div class="social">
        <a href="https://www.youtube.com/channel/UCvXFZzHCMtUA6OOrEPhhh6w">
          <FaYoutube />
        </a>
        <a href="https://www.instagram.com/almuhsinin_cukir/">
          <FaInstagramSquare />
        </a>
        <a href="https://www.facebook.com/almuhsninin/">
          <FaFacebookSquare />
        </a>
      </div>
      <p class="copyright">PP.Kreatif Al-Muhsinin © 2022</p>
      <p class="copyright">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://arisarisyi.github.io/"
        >
          Develop By Imam Al-Arisyi
        </a>
      </p>
    </div>
  )
}

export default Footer
