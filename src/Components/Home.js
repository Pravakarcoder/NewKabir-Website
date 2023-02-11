import React from 'react';
 
import './Home.css';
 
function Home() {
  return (
  
    <> 
      <div className="masthead"  style={{backgroundImage: ' url("https://images.unsplash.com/photo-1516475429286-465d815a0df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60")'}}>
    
     <div className="color-overlay d-flex  justify-content-center align-items-center">
      <h3>Kabar</h3>
     </div>
      </div>
 
<div className="mx-2  founder__Img">
  <div className="card">
    <div className="row g-0">
      <div className="col-sm-4 position-relative">
        <img src="https://static.toiimg.com/thumb/msid-73204368,width-400,resizemode-4/73204368.jpg" className="card-img fit-cover w-100 h-100" alt="..."/>
      </div>

      <div className="col-sm-8">
        <div className="card-body">
          <h5 className="card-title text-danger  text-center" style={{fontSize: '2rem'}}>परिचय, स्थापना र उद्देश्य</h5>
          <h5 className="card-title text-danger  text-center  ForSmall text-uppercase" style={{fontSize: '25px'}}>Introduction,foundation and aspiration</h5>



            <p className="card-text" style={{fontSize: '18px'}}>  
                महान तपस्वी बालब्रह्मचारी सद्गुरु सन्तशरण साहेब ज्यू बाट सानै बेला बेघर- त्यागी भै भारतवर्षको भ्रमण, ग्रन्थ, पन्थ को अध्ययन गरि युगद्रष्टा सद्गुरु कबीर सम्प्रदायमा दिक्षित भएर अध्यात्मको ज्योती जन-जनमा पुगोस भन्ने भावले आजभन्दा ७५ बर्ष अगाडी स्थापना भएको मुनाफा रहित आध्यात्मिक संस्था हो-.<b>कबीर सन्त सत्संग मंदिर |</b><br/>
                A great austere, his holiness Sadguru Saint shran saheb, left his birth place in childhood and marched ahead for spiritual quest for that he traveled so many places of india and mingled with various religious sects, and creed. Finally he was initiated in the lineage of Sadguru Kabir Saheb tradition, the great revolutionary Saint of his time who was most revered by people. Thus, in order to pass the light of spirituality he himself established this pure, non profitable spiritual organization.
            </p>
         
        </div>
 
      </div>
    </div>
  </div>
</div>

     
  </>   
 
  )
}

export default Home
