import React from 'react'
import Cards from './Cards'
// import cardImg1 from '../assets/card_Img/physics.jpg'

function Resources() {
  return (
    <div style={{ display: "flex" }}>
      {Cards.map(card => (
        <div class="blog" key={card.id}  >
          {/* <div  ><img src={card.img}/></div> */}
          <div class="title-box">
            <h3>
              {card.subject}
            </h3>
            <hr />
            <div class="intro">
              {card.title}
            </div>
          </div>
          <div class="info">
            <span>{card.desc}</span>
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

          <div class="color-overlay"></div>
        </div>
      ))}
    </div>
  )
}

export default Resources