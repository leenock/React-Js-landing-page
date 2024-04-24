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
          I am a full stack web developer with a passion for creating interactive and responsive web applications.
          I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, 
          CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. 
          I am a team player and I am excited to work with others to create amazing applications.
          </p>
          <div class="action__btns">
            <button class="hire__me">Hire Me</button>
            <button class="portfolio">Portfolio</button>
          </div>
        </div>
        <div class="image">
          <img src="https://nextjs-portfolio-mu-swart.vercel.app/_next/image?url=%2Fimages%2Fhero-image.png&w=384&q=75" alt="profile" />
        </div>
      </div>
    </section>
  )
}

export default Hero