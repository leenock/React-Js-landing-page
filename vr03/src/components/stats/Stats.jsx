import React from "react";
import "./stats.css";
import "./mediaquery.css";

const Stats = () => {
  return (
    <section className="stats" aria-label="our stats">
      <div className="container">  
        <ul
          className="stats-card has-bg-image" style={{ backgroundImage: "url('./assets/images/stats-bg.jpg')" }}>
          <li>
            <p className="card-text">
              <span className="h1">7518</span>
              <spna className="span">Completed Projects</spna>
            </p>
          </li>
          <li>
            <p className="card-text">
              <span className="h1">3472</span>

              <spna className="span">Happy Customers</spna>
            </p>
          </li>
          <li>
            <p className="card-text">
              <span className="h1">2184</span>
              <spna className="span">Expert Employees</spna>
            </p>
          </li>
          <li>
            <p className="card-text">
              <span className="h1">4523</span>
              <spna className="span">Awards Won</spna>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Stats;
