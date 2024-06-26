import React from "react";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <section className="section service" aria-labelledby="service-label">
      <div className="container">
        <p className="section-subtitle" id="service-label">
          What We Do?
        </p>
        <h2 className="h2 section-title">
          The service we offer is specifically designed to meet your needs.
        </h2>
        <ul className="grid-list">
          <li>
            <div className="service-card">
              <div className="card-icon">
                <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
              </div>
              <h3 className="h4 card-title">24/7 Support</h3>
              <p className="card-text">
                Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
                porta gravida at eget metus cras justo.
              </p>
              <a href="/#" className="btn-text">
                <span className="span">Learn More</span>
                <ion-icon
                  name="arrow-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </a>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon">
                <ion-icon
                  name="shield-checkmark-outline"
                  aria-hidden="true"
                ></ion-icon>
              </div>
              <h3 className="h4 card-title">Secure Payments</h3>
              <p className="card-text">
                Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
                porta gravida at eget metus cras justo.
              </p>
              <a href="/#" className="btn-text">
                <span className="span">Learn More</span>
                <ion-icon
                  name="arrow-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </a>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon">
                <ion-icon
                  name="cloud-download-outline"
                  aria-hidden="true"
                ></ion-icon>
              </div>
              <h3 className="h4 card-title">Daily Updates</h3>
              <p className="card-text">
                Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
                porta gravida at eget metus cras justo.
              </p>
              <a href="/#" className="btn-text">
                <span className="span">Learn More</span>
                <ion-icon
                  name="arrow-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </a>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon">
                <ion-icon
                  name="pie-chart-outline"
                  aria-hidden="true"
                ></ion-icon>
              </div>
              <h3 className="h4 card-title">Market Research</h3>
              <p className="card-text">
                Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
                porta gravida at eget metus cras justo.
              </p>
              <a href="/#" className="btn-text">
                <span className="span">Learn More</span>
                <ion-icon
                  name="arrow-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default AboutUs;
