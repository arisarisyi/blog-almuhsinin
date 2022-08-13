import Card from "react-bootstrap/Card"
import Pb from "../assets/images/pb.jpeg"
import Abi from "../assets/images/abi.jpeg"
import Alat from "../assets/images/alat.jpeg"
import Wifiq from "../assets/images/wifiq.jpeg"
import Ramadhan from "../assets/images/ramadhan.jpeg"
import Tour from "../assets/images/tour.jpeg"

const Kegiatan = () => {
  return (
    <div className="main-kegiatan" id="kegiatan">
      <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
      <div
        className="blur border"
        style={{
          background: "#C1F5FF",
          top: "17rem",
          width: "21rem",
          height: "11rem",
          left: "-9rem",
        }}
      ></div>
      <div className="title-act">
        <h1 className="mt-3">Kegiatan</h1>
      </div>
      <div className="card-act container mt-2">
        <div className="row">
          <div className="col">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Alat} />
              <Card.Body>
                <Card.Title>Pengajian Fiqih</Card.Title>
                <Card.Text>
                  Materi fiqih yang dikaji berbeda menyesuaikan kelas santri.
                  Dimulai dari kitab Sullam taufiq, taqrib, Fathul Qorib, sampai
                  Rahmatul Ummah.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col mt-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Abi} />
              <Card.Body>
                <Card.Title>Pengajian Hadits</Card.Title>
                <Card.Text>
                  Pengajian Hadits yang diikuti seluruh santri Al-Muhsinin
                  dengan metode bandongan yang diampu langsung oleh Kyai Agus
                  Maulana.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col mt-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Pb} />
              <Card.Body>
                <Card.Title>Pengajian Ilmu Alat</Card.Title>
                <Card.Text>
                  Pengajian ilmu alat berupa Nahwu dan Shorof. Sama halnya
                  dengan fiqih, materi yang diajarkan sesuai kelasnya.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col mt-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Wifiq} />
              <Card.Body>
                <Card.Title>Pengajian Ilmu Wifiq</Card.Title>
                <Card.Text>
                  Pengajian ilmu klasik dalam kategori hikmah yang telah banyak
                  ditinggalkan. Materi dari wifiq 3x3 sampai 10x10 dengan kaidah
                  pembuatan menurut para ahli hikmah.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col mt-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Ramadhan} />
              <Card.Body>
                <Card.Title>Pengajian Ramadhan</Card.Title>
                <Card.Text>
                  Pengajian kilatan yang diadakan setiap bulan Ramadhan. Kitab
                  yang dibaca biasanya merupakan kitab tentang Hadits, Nikah,
                  Tasawwuf, Hikmah, dll.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col mt-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Tour} />
              <Card.Body>
                <Card.Title>Tour Islami</Card.Title>
                <Card.Text>
                  Sebagai bentuk refreshing diadakan kegiatan tour ke Bali. Tour
                  tersebut tidak hanya untuk melepas kepenatan di pondok,
                  melainkan dengan ziarah ke makam para wali.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kegiatan
