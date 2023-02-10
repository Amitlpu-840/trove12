import React from 'react'
import { Link } from 'react-router-dom'
import Cards from './Cards'
import {Routes, Route, useNavigate} from 'react-router-dom';

// import cardImg1 from '../assets/card_Img/physics.jpg'

function Resources() {
  
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }} >
      {Cards.map(card => (
<<<<<<< HEAD
        
        <div class="blog" key={card.id}  >
          {/* <div  ><img src={card.img}/></div> */}
          <div class="title-box">
=======
        // <button onClick={console.log(card.id)}>
        <Link to={card.subject}><div className="blog" key={card.id}   >
          {/* <img src={card.img} /> */}
          {/* <div onClick={console.log(card.id)}> */}
          <div className="title-box" >
>>>>>>> c522f39a15ec5f2cfca93567bdd6d77b6b4188bc
            <h3>
              {card.subject}
            </h3>
            <hr />
            <div className="intro">
              {card.title}
            </div>
          </div>
          <div className="info">
            <span>{card.desc}</span>
          </div>
          <div class="button">
            <span>{card.button}</span>
          </div>
          {/* <div class="footer">
              <div class="icon-holder">
                <span>
                  <i class="fa fa-comment-o"></i>
                  <span>12</span>
                  <space></space>
                  <i class="fa fa-calendar"></i>
                  <span>03.12.2015</span>
                </span>
              </div>
            </div> */}

          <div className="color-overlay"></div>
        </div>
        </Link>


      ))}
    </div>
  )
}

export default Resources