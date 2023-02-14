import React from 'react'
import { Link } from 'react-router-dom'
import "./About.css";
function Page3() {
  const Top =()=>{
    window.scrollTo(0,0);
 }
  return (
    <>
        <div className="Green__box">
      <div className="container">
          <div className="d-flex  justify-content-center align-items-center">
          
            <div className="col-md-8">
              <div className="card-body my-5">
               
                <h2 className="card-title text-center ">
                Youth power and spirituality
                </h2>
                <p className="card-text my-3" style={{ fontSize: "1.3rem",textAlign: 'justify' }}>
                Youngsters are spinal cord of any nation. Their upliftment leads to nation's development.However in case of their deterioration, it is entire nation's or the whole world's incitement towards doom, In life, whatever we want to do or achieve initiation must be done during adulthood. Hot blood can achieve anything in to say young blood has a lot of potentiality. Nevertheless, nothing is impossible to achieve if that hot blood gets an opportu nity to mix with the goad of morality, damp of rationality and virtue of army.
                </p>

                  <p className="card-text my-3" style={{ fontSize: "1.3rem",textAlign: 'justify' }}>
                  The nation's culture, civilization, tradition, values and knowledge are iden itified by the youth, as long as we can not reform the youth potentiality such type of the legacy cannot be preserved properly. Hence, our humble attempt must be to inculcate the eternal values and dissemi nate timeless knowledge for youth in order to bring them back home. If youth are filled with positive tendency and energy, the entire generaration will be happy irrespective of young or old. Thus, our aim is to make them self-reliant and independent so they need not look else where or to some unknown supreme sphere of source. As a spiritual preceptor Sadguru has said "Depend on your own capability. Abandon expectation from others. Why should a person having a river flowing adjacent to his house die of thirst."
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-around  mb-3">
        <Link to="/page2"> 
          <button type="button" onClick={Top} className="btn btn-outline-dark">
            ←previous
          </button>
          </Link>
          <Link to="/page4"> 
          <button type="button"  onClick={Top} className="btn btn-outline-dark">
           next → 
          </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Page3
