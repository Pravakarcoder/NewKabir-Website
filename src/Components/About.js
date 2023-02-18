import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import NavBar from "./NavBar";
function About() {

  useEffect(() => {
    document.title = 'Kabir Sant-Satsang Mandir -AboutUs';
}, []);

  const Top = () =>{
    window.scrollTo(0,0);
  }
  return (
    <>
    <NavBar/>
      <div className="Yellow__box">
        <div className="container">
          <div className="d-flex  justify-content-center align-items-center">
            <div className="col-md-8">
              <div className="card-body my-5">
                <h4 className="card-title text-center">Sri Sadgurve Namah</h4>
                <h2 className="card-title text-center ">
                  Spirituality in modern age
                </h2>
                <p className="card-text my-3" style={{ fontSize: "1.3rem",textAlign: 'justify' }}>
                  Kabir Sant-satsang mandir is a religious, spiritual,
                  non-profitable and non government institution established by
                  His holiness sadguru sant shran saheb. The Master himself was
                  a rational thinker and a veteran scholar of scriptures. His
                  life was pure and plous and thus, has inspired his devotees
                  and disciples so on. His vision is non other than Spirituality
                  in modern age. That seeks to hightlight that purpose of human
                  life is elimination of sorrow and attainment of eternal joy.
                  </p>
                  <p className="card-text my-3" style={{ fontSize: "1.3rem",textAlign: 'justify' }}>
                    
                    It is undeniable that sadguru Kabir parakha philosophy is
                    our identity. We treat everythig equally whether it is
                    Kuran, Bible or Dhampada.However Upanishand and Gita are
                    inevitable and unavoidable elements of our lives. The
                    Purpose of scripture is to polish the human life and enhance
                    the learning skills and thus help us all live peacefully.
                    Today, the first and foremost necessity of the modern time
                    is to have a mutual under- standing between religious and
                    spiritual sects. Scriptures are not only for us but for the
                    entire society, community and the whole world. Therefore,
                    religious books must never be discriminated as low or high
                    and superior or inferior Rather, they must be viewed as how
                    much they are applicable in practical life.
                  </p>
                 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-around  mb-3">
        <Link to="/"> 
          <button type="button" onClick={Top} className="btn btn-outline-dark">
            ←previous
          </button>
          </Link>
          <Link to="/page1"> 
          <button type="button" onClick={Top} className="btn btn-outline-dark">
           next → 
          </button>
          </Link>
        </div>
      </div>

    
    </>
  );
}

export default About;
