import React from 'react'
import { Link } from 'react-router-dom'
import "./About.css";
function Page2() {
  const Top =()=>{
    window.scrollTo(0,0);
 }
  return (
     <>
      <div className="Pink__box">
      <div className="container">
          <div className="d-flex  justify-content-center align-items-center">
          
            <div className="col-md-8">
              <div className="card-body my-5">
               
                <h2 className="card-title text-center ">
                Householder and spirituality
                </h2>
                <p className="card-text my-3" style={{ fontSize: "1.3rem",textAlign: 'justify' }}>
                Earning, eating and feeding have become the almost purport of life. Consequently, as we get older our joy, zeal and happiness evaporate from our lives But alas! The reverse should have happened. As we spend our lives, all the noble quality, contentment, joy should increase.Unfortunately we consider tangible items such as physical body. material and our belongings as perma- nent and eternal thus,real door of life has been latched. It is our supreme duty that as we pass our life span noble quality, sta bility, equilibrium virtues should grow gradually. Therefore, when we reach the threshold of old age, our sole support is or should be the spiritual way of life ie, the way to love thyself. Because of lacking this knowledge in our life there are groan and moan, sigh and suffer, tears and wander. If situation remains like this, we are bound to suffer and are deprived of enjoying the healthy life.
                </p>

                  <p className="card-text my-3" style={{ fontSize: "1.3rem",textAlign: 'justify' }}>
                  A matured person should be an example and ideal for youth. That is why Manu has mentioned a matured person is equivalent to god. we assimilate the divine quality like we can become god like when we

                assimilate the divine quality like humanity and love The new generation needs to learn something from us. It can only happen when we are ready to embrace eternal and spiritual ways of life. Thus, plunging into river of good characters and continuous effort to live life spiritually can make our life suave and sublime "infact, life should be lived as did our ancestors They were equivalent to god." with this feeling, we can let the new generation feel proud of us-this is real and eternal life.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-around  mb-3">
        <Link to="/page1"> 
          <button type="button" onClick={Top} className="btn btn-outline-dark">
            ←previous
          </button>
          </Link>
          <Link to="/page3"> 
          <button type="button" onClick={Top} className="btn btn-outline-dark">
           next → 
          </button>
          </Link>
        </div>
      </div>
         
     </>
  )
}

export default Page2
