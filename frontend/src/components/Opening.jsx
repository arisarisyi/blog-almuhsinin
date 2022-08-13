import React from "react"
import ReactTypingEffect from "react-typing-effect"

const Opening = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1 className="title-opening">Pondok Pesantren Kreatif Al-Muhsinin</h1>
        <ReactTypingEffect
          className="typed-text"
          text={[
            "إِنَّ رَحْمَتَ اللَّهِ قَرِيبٌ مِّنَ الْمُحْسِنِينَ",
            "احي قلبك قبل موتك",
          ]}
        />
      </div>
    </div>
  )
}

export default Opening
