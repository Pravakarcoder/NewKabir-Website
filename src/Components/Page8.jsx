import React from 'react'
import { Link } from 'react-router-dom'
 
function Page8() {
  const Top =()=>{
    window.scrollTo(0,0);
 }
  return (
     <>

<div className="Page6__Main" style={{ background: "#edd36b" }}>
        <div className="container">
          <div className="d-flex  justify-content-center align-items-center">
            <div className="col-md-8">
              <div className="card-body mt-5">
               
                <h2 className="card-title text-center text-danger mt-3">
                पारख सिद्धान्त को सर्वोच्च नियम र निशचय
                </h2>
                
                <div
                  className="card-text mt-3"
                  style={{
                    fontSize: "1.3rem",
                    textAlign: "justify",
                    color: "#0202f5",
                  }}
                >
                   
                   <p>१ :- अहिंसा धर्म </p>
                  
                  <p>
                    २ :-  ब्रह्मचर्य (जीवनचर्य) 
                  </p>
                  <p>
                    ३ :- सद्गुरु उपासना
                  </p>
                  <p>
                    ४ :- शुद्धाचार
                  </p>
                  <p>
                    ५ :- सद्भावना
                  </p>
                  <p>
                    ६ :- जड़-चेतन दुई पदार्थको अनादि बोध
                  </p>
                  <p>
                    
                    ७ :- वासना युक्त कर्मफल निश्चय
                  </p>
                  <p>
                    ८ :-स्वरूपबोध स्थितिबाट वासना जय
                  </p>
                  <p>
                    ९ :- गुणग्राहीप
                  </p>
                  <p>
                    १० :- दृद विवेक
                  
                  </p>
                  <p>
                    ११ :- नशाबाजी आदि र कुसंग त्यागपूर्वक संयम रहनु
                  </p>
                  <p>
                    १२ :- वैराग्य
                  </p>
                  <p>
                    १३ :- जड - हन्ता दमन
                  </p>
                  <p>
                    १४ :- निर्वासना
                  </p>

                  <p>
                  १५ :- मनोद्वेग शांत   
                  </p>

                  <p>
                  १६ :- द्रष्टापना अभ्यास

                  </p>

                  <p>
                  १७ :-  जीवन्मुक्ति
                  </p>
                  <p> 
                  १८ :- विदेह मुक्ति ।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="d-flex justify-content-around  mb-3">
            <Link to="/page7">
              <button type="button" onClick={Top} className="btn btn-outline-dark">
                ←previous
              </button>
            </Link>
            <Link to="/page9">
              <button type="button"   onClick={Top} className="btn btn-outline-dark">
                next →
              </button>
            </Link>
          </div>
        </div>
      </div>
     </>
  )
}

export default Page8
