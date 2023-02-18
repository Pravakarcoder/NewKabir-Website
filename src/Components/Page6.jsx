import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar';

function Page6() {
  useEffect(() => {
    document.title = 'Kabir Sant-Satsang Mandir -AboutUs';
}, []);
  const Top =()=>{
    window.scrollTo(0,0);
 }
  return (
     <>
     <NavBar />
        <div className="Page6__Main" style={{background: '#edd36b'}}> 
      <div className="container">
          <div className="d-flex  justify-content-center align-items-center">
          
            <div className="col-md-8">
              <div className="card-body mt-5">
              <h4 className="card-title text-center text-danger">श्री सद्गुरवे नमः</h4>
              <h2 className="card-title text-center text-danger mt-3">
                सत्संगमा पाल्नुहुने सम्पूर्ण दिव्य आत्माहरुलाई सद्गुरु संतशरण आश्रममा स्वागत छ ।
                </h2>
                <div className="card-text mt-3" style={{ fontSize: "1.3rem",textAlign: 'justify', color: '#0202f5' }}>
                <p>१. कृपया सत्संग हलमा जानु पूर्व आफ्नो चप्पल जुत्ता जतनसित एक ठाउँमा राख्नुहोला भुलेर पनि एउटा यता अर्को उता अमर्यादित र भद्रगोल स्थितिमा नराख्नुहोला साथै कसैको पनि जुत्ता-चप्पललाई नकुल्चिनुहोला ।</p>
                <p>२. मानव सामाजिक प्राणी हो । मानव-मानवसित घुल्न र कुरा गर्न मन पराउँछ तथापि हलभित्र सत्संग भैरहेको बेला कुनै पनि हालतमा नबोलिदिनुहोला कदाचित बोल्नै परे दुई जनाको कुरा तस्रो व्यक्तिको कानमा नपरोस् यो अवश्य ध्यान राखिदिनु होला ।</p>
                <p>३. वर्तमानको मनचिन्ते यन्त्र - मोबाइललाई स्विच अफ वा साइलेन्ट मोडमा राख्न नबिर्सिनुहोला ।</p>
                 <p> ४. हजुरको शुद्ध मनको प्रवेश नै गुरुदक्षिणा हो । सत्संगलाई आत्मसात् गर्नु नै भक्ति हो । साथै सन्तपरम्पराको यो ज्ञानलाई आफ्नो जीवनमा स्थान दिनु श्रद्धाको जीवित एवं जागृत रुप हो ।</p>
                  <p>५. यहाँको राम्रो पक्ष अरुलाई भन्नुहोला साथै नराम्रो पक्ष हामीलाई भन्न नबिर्सिनुहोला ताकि आगामी दिनमा नराम्रो पक्षको सुधार हु सकोस्, जसबाट अध्यात्मको शाश्वत् राजमार्गमा सबै परमार्थ प्रेमी पथिकहरुलाई लम्किरहने सात्विकता र सकारात्मकता प्राप्त होस् ।</p>
                </div>
              </div>
             
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-around  mb-3">
        <Link to="/page5"> 
          <button type="button" onClick={Top} className="btn btn-outline-dark">
            ←previous
          </button>
          </Link>
          <Link to="/page7"> 
          <button type="button" onClick={Top}  className="btn btn-outline-dark">
           next → 
          </button>
          </Link>
        </div>
        </div>
        </div>
     
     </>
  )
}

export default Page6
