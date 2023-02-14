import React from 'react'
import { Link } from 'react-router-dom';
import "./About.css";
function Page4() {
  const Top =()=>{
    window.scrollTo(0,0);
 }
  return (
    <>
    
    <div className="Darkblue__Box">
      <div className="container">
          <div className="d-flex  justify-content-center align-items-center">
          
            <div className="col-md-8">
              <div className="card-body my-5">
               
                <h2 className="card-title text-center ">
                Spirituality and women folks
                </h2>
                <p className="card-text my-3" style={{ fontSize: "1.3rem",textAlign: 'justify' }}>
                All Women are mothers. They nourish and rear, no matter, where they are and who they are. As a mother properly manages home to inculcate divine quality and eternal values for children without mother's involvement it is impossible.
                </p>

                  <p className="card-text my-3" style={{ fontSize: "1.3rem",textAlign: 'justify' }}>
                  Therefore,irrespective of where she is, a mother plays a vital role to raise the child, maintain peace and harmony or uplift ourselves from within. No doubt this can happen only when mother herself embraces the value and spiritual way of life. Values and virtues are the matters which makes person god or goddess-like. That is why manu proclaimed that "Where women are adored, there the deities delight. To live and make alive in this reality women folks must uplift them- selves by cultivating virtues and embrac ing the path of spirituality, reality and eternality. To every child mother must instill that other men and women must be treated with noble thought and pure vision. Of course without walking path of spirituality, such fact cannot be given and embraced. No woman's life is lesser to that of any man. Hence, manhood must be brought in our life through spiritual practice and cultivation of positive tendency.
                </p>

                <p className="card-text my-3" style={{ fontSize: "1.3rem",textAlign: 'justify' }}>
                Let us be bold to polish ourselves and get uplifted from sorrow, turmoil and agitation, depending on our own capacity. This is what Human life is for. This is royal path of welfare, let us go ahead and be motivated in order to adore and adorn our percious lives.

                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-around  mb-3">
        <Link to="/page3"> 
          <button type="button" onClick={Top}  className="btn btn-outline-dark">
            ←previous
          </button>
          </Link>
          <Link to="/page5"> 
          <button type="button"  onClick={Top}  className="btn btn-outline-dark">
           next → 
          </button>
          </Link>
        </div>
      </div>
    
    </>
  )
}

export default Page4
