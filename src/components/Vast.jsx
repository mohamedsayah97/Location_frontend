import React from 'react'
import './Vast.css'

const Vast = () => {
  return (
    <div>
      <section className="hero">
      <div className="hero-content">
        <h1>Découvrez Votre Véhicule Parfait avec Notre Sélection Diversifiée</h1>
        <p>
          Notre plateforme offre une vaste gamme de véhicules pour répondre à
          tous les besoins. Profitez d'une expérience de réservation fluide qui
          vous donne le contrôle.
        </p>
        <div className="features">
          <div className="feature">
            <img src="icon1.png" alt="Vaste Sélection" />
            <h2>Vaste Sélection</h2>
            <p>
              Choisissez parmi une variété de voitures, camions et VUS pour
              votre prochaine aventure.
            </p>
          </div>
          <div className="feature">
            <img src="icon2.png" alt="Réservation Facile" />
            <h2>Réservation Facile</h2>
            <p>
              Réservez votre véhicule en quelques clics, sans tracas et
              rapidement.
            </p>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="image.jpg" alt="Image de présentation" />
      </div>
    </section>
    </div>
  )
}

export default Vast