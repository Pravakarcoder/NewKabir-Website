 import './Footer.css';
import React from 'react'
import { Link } from 'react-router-dom';
function Footer() {
  const Top =()=>{
    window.scrollTo(0,0);
  }
  return (
     <>
 <footer>
  <div className="main__Footer"> 
      <div className="main-content">
        <div className="left box">
          <h2>About</h2>
          <div className="content">
    <p>Kabir Sant-satsang mandir is a religious, spiritual, non-profitable and non government institution established by His holiness sadguru sant shran saheb. The Master himself was a rational thinker and a veteran scholar of scriptures. His life was pure and plous and thus, has inspired his devotees and disciples so on. His vision is non other than Spirituality in  modern age. That seeks to hightlight that purpose of human life is elimination of sorrow and attainment of eternal joy.......</p>  <Link  onClick={Top} className="Read__more fs-5"to='/about'>Readmore</Link>
 
          </div>
        </div>

        <div className="center box">
          <h2>Address</h2>
          <div className="content">
            <div className="place">
            <Link to='https://goo.gl/maps/NgsrUP2A1aSwHfHV7' target="_blank" rel="noreferrer">
              <span className="fas fa-map-marker-alt"></span>
              <span className="text">Lalitpur,metropolitan, jhamshikhel-3 </span></Link>
            </div>
            <div className="phone">
            <Link to='tel:015550419'>
              <span className="fas fa-phone-alt"></span>
            <span className="text">015550419</span></Link>
            </div>

            <div className="phone">
            <Link to='tel:9841442289'>
              <span className="fas fa-mobile-alt"></span>
            <span className="text">9841442289</span></Link>,
            <Link to='tel:9840052210'>
            <span className="text">9840052210</span></Link>,
            <Link to='tel:9849328125'>
            <span className="text">9849328125</span></Link>
            </div>

            <div className="email">
            <Link to='mailto:satwikji@gmail.com'><span className="fas fa-envelope"></span>
             <span className="text">satwikji@gmail.com</span></Link>
         </div>
          </div>
        </div>

        <div className="left box">
          <h2>Quick Links</h2>
          <div className="content">
          
                <div className="social">
                    <Link to="/" target="_blank"><span className="fab fa-facebook-f"></span></Link>
                    <Link to="/" target="_blank"><span className="fab fa-twitter"></span></Link>
                    <Link to="/" target="_blank"><span className="fab fa-instagram"></span></Link>
                    <Link to="/" target="_blank"><span className="fab fa-youtube"></span></Link>
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