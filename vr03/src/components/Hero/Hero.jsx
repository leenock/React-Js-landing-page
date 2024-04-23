import React from 'react'
import "./hero.css";
import "./mediaquery.css";

const Hero = () => {
    return (
        <section class="section hero has-bg-image" aria-label="home"
        style={{ backgroundImage: "url('./assets/images/hero-bg.jpg')" }}>
            <div class="container">
                <div class="hero-content">
                    <h1 class="h1 hero-title">Crafting project specific solutions with expertise.</h1>
                    <p class="hero-text">
                        We’re a creative company that focuses on establishing long-term relationships with customers.
                    </p>
                    <div class="btn-wrapper">
                        <a href="/#" class="btn btn-primary">Explore Now</a>
                        <a href="/#" class="btn btn-outline">Contact Us</a>
                    </div>
                </div>
                <div class="hero-slider" data-slider>
                    <div class="slider-inner">
                        <ul class="slider-container" data-slider-container>
                            <li class="slider-item">
                            <figure className="img-holder" style={{ "--width": 575, "--height": 550 }}>
                                    <img src="./assets/images/hero-slide-1.jpg" style={{ "--width": 575, "--height": 550 }} alt="" class="img-cover" />
                                </figure>
                            </li>
                            <li class="slider-item">
                                <div class="hero-card">
                                    <figure class="img-holder" style={{ "--width": 575, "--height": 550 }}>
                                        <img src="./assets/images/hero-slide-2.jpg" width="575" height="550" alt="hero banner"
                                            class="img-cover" />
                                    </figure>

                                    <button class="play-btn" aria-label="play adex intro">
                                        <ion-icon name="play" aria-hidden="true"></ion-icon>
                                    </button>
                                </div>
                            </li>
                            <li class="slider-item">
                                <figure class="img-holder" style={{ "--width": 575, "--height": 550 }}>
                                    <img src="./assets/images/hero-slide-3.jpg" width="575" height="550" alt="" class="img-cover" />
                                </figure>
                            </li>
                        </ul>
                    </div>
                    <button class="slider-btn prev" aria-label="slide to previous" data-slider-prev>
                        <ion-icon name="arrow-back"></ion-icon>
                    </button>
                    <button class="slider-btn next" aria-label="slide to next" data-slider-next>
                        <ion-icon name="arrow-forward"></ion-icon>
                    </button>
                </div>
            </div>
        </section>

    )
}

export default Hero