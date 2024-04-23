import React from 'react'
import "./Hero.css";

const Hero = () => {
  return (
    <section class="section" id="Hero">
      <div class="section__container">
        <div class="content">
          <p class="subtitle">HELLO THERE</p>
          <h1 class="title"> 
             <span>Think.<br /></span> Design. Develop.
          </h1>
          <p class="description">
          We are a new design studio based in USA. We have over 10 years of combined experience, and
           know a thing or two about designing websites and mobile apps. 
          Clever use of technology and lean processes enable us to work faster and smarter.
          </p>
          <div class="action__btns">
            <button class="hire__me">Hire Me</button>
            <button class="portfolio">Portfolio</button>
          </div>
        </div>
        <div class="image">
          <img src="./images/profile.jpg" alt="profile" />
        </div>
      </div>
    </section>
  )
}

export default Hero