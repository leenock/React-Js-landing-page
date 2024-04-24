import React from 'react'
import "./aboutme.css";
const Aboutme = () => {
  return (
    <section class="about" id="about"> 
      <div class="container py-5">
        <div class="row">
          <div class="col-md-6">
           <div class="about-img">
        <img src="https://web-genesis-simple-portfolio-website-one.netlify.app/img/banner/banner-image.png" alt="" class="aboutHero" />
       </div>
      </div>
      <div class="col-md-6 mt-4 mt-md-0">
        <div class="about-content">
         <h2 class="heading">About Me</h2>
           <h3>3 Year's Experience on Product Design</h3>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint voluptatem autem ex in. 
          Temporibus et maiores ipsum recusandae voluptas consequatur!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint voluptatem autem ex in. 
          Temporibus et maiores ipsum recusandae voluptas consequatur!</p>
  
          <div class="cvContent">
            <a href="/#" target="_blank" class="btn d-CV">Download CV <i class='bx bx-download'></i></a>
          </div>
        </div>
      </div>
     </div>
    </div>
</section>
    
   
  )
}

export default Aboutme