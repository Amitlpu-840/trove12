import React from 'react'
import Main3 from '../assets/main3.png'
import '../App.css'
function Home() {
  return (
    <>
    <div className="homepage">
      <section className="section-1">
          <h1 className="hero-title">
            Trove12<br />
            <span className="quote"> <q>Let us Study Together</q> </span>
          </h1>
          <img src={Main3} alt="" />
        </section>

        <section className="homepage-2">
        <h1 className="title-2">What is Trove12 ?</h1>
        <p className="para-2">
        Trove12 is a comprehensive online learning platform that provides free access to a wide range of study material for class 12th students. Trove12 offers a vast collection of educational resources,revision notes, and link to resources. The website also features a user-friendly interface that enables students to access these study materials easily.
        </p>
      </section>
      </div>
      </>
  )
}

export default Home