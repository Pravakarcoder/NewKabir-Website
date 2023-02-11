 import './Footer.css';
import React from 'react'
 

function Footer() {
  return (
     <>
 <footer>
  <div className="main__Footer"> 
      <div className="main-content">
        <div className="left box">
          <h2>About us</h2>
          <div className="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aspernatur, quos cumque amet reiciendis nesciunt eligendi labore repellendus. Quidem numquam consequuntur fuga facilis maiores. Doloribus et qui esse cumque earum!</p>
          
          </div>
        </div>

        <div className="center box">
          <h2>Address</h2>
          <div className="content">
            <div className="place">
            <a href='https://goo.gl/maps/NgsrUP2A1aSwHfHV7' target="_blank" rel="noreferrer">
              <span className="fas fa-map-marker-alt"></span>
              <span className="text">Lalitpur,metropolitan, jhamshikhel-3 </span></a>
            </div>
            <div className="phone">
            <a href='tel:015550419'>
              <span className="fas fa-phone-alt"></span>
            <span className="text">015550419</span></a>
            </div>

            <div className="phone">
            <a href='tel:9841442289'>
              <span className="fas fa-mobile-alt"></span>
            <span className="text">9841442289</span></a>,
            <a href='tel:9840052210'>
            <span className="text">9840052210</span></a>,
            <a href='tel:9849328125'>
            <span className="text">9849328125</span></a>
            </div>

            <div className="email">
            <a href='mailto:satwikji@gmail.com'><span className="fas fa-envelope"></span>
             <span className="text">satwikji@gmail.com</span></a>
         </div>
          </div>
        </div>

        <div className="left box">
          <h2>Quick Links</h2>
          <div className="content">
          
                <div className="social">
                    <a href="/" target="_blank"><span className="fab fa-facebook-f"></span></a>
                    <a href="/" target="_blank"><span className="fab fa-twitter"></span></a>
                    <a href="/" target="_blank"><span className="fab fa-instagram"></span></a>
                    <a href="/" target="_blank"><span className="fab fa-youtube"></span></a>
                </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
    
    </>
  )
}

export default Footer