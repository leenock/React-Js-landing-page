import React from 'react';
import "./uniquecard.css";
import data from "../../data/index.json";

const Uniquecard = () => {
  return (
    <section className="skills--section" id="mySkills">
      <div style={{ textAlign: 'center' }} className="portfolio--container">
        <h2 className="skills--section--heading">WHAT MAKE US UNIQUE</h2>
      </div>
      <div className="skills--section--container">
         {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Uniquecard