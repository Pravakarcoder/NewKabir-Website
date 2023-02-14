import React from 'react'

function DoubleimgCard(props) {
  return (
     <>
      <div className="card mt-4">
      <div className="well text-center">
        <div className="col-md-12">
        <h5 className="card-title text-danger  text-center mt-2" style={{fontSize: '2rem'}}>{props.title}</h5>
          <h5 className="card-title text-danger  text-center  ForSmall text-uppercase" style={{fontSize: '25px'}}>{props.Subtitle}</h5>
        </div>
        <div className="row gy-3 mt-3">
          <div className="col-md-6 gy-3">
           <img src={props.firstimg} alt="inn_logo" className="img-fluid"/> 
          </div>
          <div className="col-md-6">
            <img src={props.secondimg} alt="ccs_logo" className="img-fluid"/> 
          </div>
        </div>
      </div>
      <div className="card-body">
            <p className="card-text" style={{fontSize: '20px',textAlign: 'justify'}}>{props.NepaliText}</p>
            <p className="card-text" style={{fontSize: '20px',textAlign: 'justify'}}>{props.EnglishText}</p>
        </div>
      </div>
     
     </>
  )
}

export default DoubleimgCard
