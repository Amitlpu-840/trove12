import React from 'react'
import { Link } from 'react-router-dom'
import Cards from './Cards'

function Resources() {

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }} >
      {Cards.map(card => ( 
         //str = "title-box" + {card.imagee}
        
        <Link to={card.subject}><div className="blog" id={card.imagee} key={card.id}   >
          <div className="title-box" >
          {/* <Image source={card.image}/> */} 
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