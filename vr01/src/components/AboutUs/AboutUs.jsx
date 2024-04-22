import React from 'react';
import "./aboutus.css";

const AboutUs = () => {
  return (
    <section id="AboutUs" className="about--section">
     <div className="about--section--img">
      <img src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About us" />
    </div>
    <div className="hero--section--content--box about--section--box">
      <div className="hero--section--content">
        <h1 className="skills-section--heading">About Us</h1>
        <p className="hero--section-description">
        We believe in open and honest communication. From the moment you reach out to us, we'll take the time to 
        listen to your concerns, answer your questions, and explain your legal options in clear, understandable terms.
         Every case is unique, and we approach each one with a personalized strategy designed to achieve the best.
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