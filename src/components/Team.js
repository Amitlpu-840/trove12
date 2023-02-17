import React from 'react'
import Team_mem from './Team_mem'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Team() {
  return (
    <div class="container_team" style={{ display: "flex" }}>
      {Team_mem.map(mem => (
        <div class="card_team" key={mem.id}>
          <img src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no" alt="Person" class="card__image_team"></img>
          <p class="card__name_team">{mem.Name}</p>
          <div class="grid-container_team">

            <div class="grid-child-posts">
              156 Post
            </div>

            <div class="grid-child-followers">
              1012 Likes
            </div>

          </div>
          <ul class="social-icons">
            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="#"><i class="fa fa-codepen"></i></a></li>
          </ul>
          <button class="btn_team draw-border">Follow</button>
          <button class="btn_team draw-border">Message</button>

        </div>

      ))}

      {/* <div class="card_team">
    <img src="https://lh3.googleusercontent.com/oUUiPB9sq3ACq4bUaRmo8pgvC4FUpRRrQKcGIBSOsafawZfRpF1vruFeYt6uCfL6wGDQyvOi6Ez9Bpf1Fb7APKjIyVsft7FLGR6QqdRFTiceNQBm1In9aZyrXp33cZi9pUNqjHASdA=s170-no" alt="Person" class="card__image_team"/>
    <p class="card__name_team">Murray Reeve</p>
    <div class="grid-container">

      <div class="grid-child-posts">
        305 Post
      </div>

      <div class="grid-child-followers">
        2643 Likes
      </div>

    </div>
    <ul class="social-icons">
      <li><a href="#"><i class="fa fa-instagram"></i></a></li>
      <li><a href="#"><i class="fa fa-twitter"></i></a></li>
      <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
      <li><a href="#"><i class="fa fa-codepen"></i></a></li>
    </ul>
    <button class="btn draw-border">Follow</button>
    <button class="btn draw-border">Message</button>
  </div>
  <div class="card_team">
    <img src="https://lh3.googleusercontent.com/pZwZJ5HIL5iKbA91UGMUIPR0VJWa3K0vOGzDZmY6wU3EJBUdfsby3VEyxU162XxTyOyP3D154tjkr-4Jgcx8lygYUR8eB-jVmld4dsHi1c-mE_A8jKccseAG7bdEwVrcuuk6ciNtSw=s170-no" alt="Person" class="card__image_team"/>
    <p class="card__name_team">Bianca Serrano</p>
    <div class="grid-container">

      <div class="grid-child-posts">
        902 Post
      </div>

      <div class="grid-child-followers">
        1300 Likes
      </div>

    </div>
    <ul class="social-icons">
      <li><a href="#"><i class="fa fa-instagram"></i></a></li>
      <li><a href="#"><i class="fa fa-twitter"></i></a></li>
      <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
      <li><a href="#"><i class="fa fa-codepen"></i></a></li>
    </ul>
    <button class="btn draw-border">Follow</button>
    <button class="btn draw-border">Message</button>
  </div> */}
    </div>

  )
}

export default Team