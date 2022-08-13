import React from "react"
import { Container } from "react-bootstrap"
import foto1 from "../assets/images/3.jpg"
import foto2 from "../assets/images/1.jpg"
import foto3 from "../assets/images/image.jpeg"

const About = () => {
  return (
    <div id="about" className="main-about">
      <div className="justify-content-center text-center mt-4 title-about">
        <h1>Tentang Pondok Pesantren Kreatif Al-Muhsinin</h1>
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={foto1} class="image" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={foto2} class="image" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={foto3} class="image" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div className="desc mb-4">
          <Container>
            <p>
              Pondok Pesantren Kreatif Al-Muhsinin terletak di desa cukir
              Kabupaten Jombang. Pondok ini didirikan pada tahun 2014 oleh Kyai
              Agus Maulana. Pondok ini dibangun dikarenakan perintah dan restu
              dari para guru dari pengasuh (Kyai Agus Maulana). Sistem yang
              diajarkan semi salaf modern. Ilmu yang diajarkan beragam dari ilmu
              Hadits, Fiqh, Nahwu, Shorof bahkan ilmu hikmah terdahulu seperti
              ilmu Wifiq. Tidak hanya itu, santri juga dituntut untuk kreatif
              sebagai bekal kelak di rumah seperti ternak ikan. Santri yang
              bermukim disini merupakan para mahasiswa dari Universitas Hasyim
              Asy'ari.
            </p>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default About
