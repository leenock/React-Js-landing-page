import React from "react";
import "./cta.css";
import "./mediaquery.css";

const Cta = () => {
  return (
    <section class="cta" aria-label="call to action">
      <div class="container">
        <h2 class="h2 section-title">
          Join our community by using our services and grow your business.
        </h2>
        <a href="/#" class="btn btn-primary">
          Try it For Free
        </a>
      </div>
    </section>
  );
};
export default Cta;
