import React from 'react'
import './Steps.css'

const Steps = () => {
  return (
    <div>
        <div className='body'>
      <section className="steps">
        <div className="step">
          <img src="icone1.png" alt="Parcourir les véhicules" />
          <h2>Étape 1 : Parcourir notre sélection de véhicules</h2>
          <p>Explorez une large gamme de voitures disponibles à la réservation.</p>
        </div>
        <div className="step">
          <img src="icone2.png" alt="Choisir votre véhicule préféré" />
          <h2>Étape 2 : Choisir votre véhicule préféré</h2>
          <p>Sélectionnez la voiture qui correspond le mieux à vos besoins.</p>
        </div>
        <div className="step">
          <img src="icone3.png" alt="Confirmer les détails de votre réservation" />
          <h2>Étape 3 : Confirmer les détails de votre réservation</h2>
          <p>Remplissez vos informations et confirmez votre réservation.</p>
        </div>
      </section>
      <div className="boutons">
        <button className="learn-more">Learn More</button>
        <button className="sign-up">Sign Up &gt;</button>
      </div>
    </div>
    </div>
  )
}

export default Steps;