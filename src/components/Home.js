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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi quisquam facilis harum unde debitis recusandae, at provident corporis ullam laudantium ea voluptatum quidem non fugiat, nostrum animi nesciunt ut repellat blanditiis. Odio commodi blanditiis placeat voluptates praesentium! Iusto, provident non!
        </p>
      </section>
      </div>
      </>
  )
}

export default Home