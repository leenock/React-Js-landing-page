import React from 'react';
import "./heroSection.css";

const HeroSection = () => {
  return (
    <section id="heroSection" className="hero--section">
     <div className="hero--section--content--box">
      <div className="hero--section--content">
        <p className="section--title"> #1 Law Agency in Africa</p>
        <h1 className="hero--section--title">
          <span className="hero--section-title--color"> We Always Stand </span>{" "}
          <br />
         for Your Right Justice
        </h1>
        <p className="hero--section-description">
        Fliquam massa nisl quis neque suspendisse in orci 
          <br /> enim of Lorem Ipsum proin gravida nibh vel velit auctor aliquet aenean sollicitudin
        </p>
      </div>
      <button className="btn btn-primary">Get a Free Consultation</button>
    </div>
    <div className="hero--section--img">
      <img src="./img/lawyers-consulting-4.jpg" alt="Hero Section" />
    </div>
  </section>
  )
}

export default HeroSection