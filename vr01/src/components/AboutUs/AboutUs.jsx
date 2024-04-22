import React from 'react';
import "./aboutus.css";

const AboutUs = () => {
  return (
    <section id="AboutUs" className="about--section">
     <div className="about--section--img">
      <img src="./img/about_us.jpg" alt="About us" />
    </div>
    <div className="hero--section--content--box about--section--box">
      <div className="hero--section--content">
        <p className="section--title">About</p>
        <h1 className="skills-section--heading">About Us</h1>
        <p className="hero--section-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          officiis sit debitis omnis harum sed veniam quasi dicta accusamus
          recusandae? Voluptatem, reprehenderit alias? Eligendi aperiam
          tempora numquam sint odit optio.
        </p>
        <p className="hero--section-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          officiis sit debitis omnis harum sed veniam quasi dicta accusamus
          recusandae?
        </p>
      </div>
    </div>
  </section>
  )
}

export default AboutUs