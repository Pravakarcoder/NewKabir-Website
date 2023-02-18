 import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import "./About.css";
import NavBar from './NavBar';

function Page1() {
  useEffect(() => {
    document.title = 'Kabir Sant-Satsang Mandir -AboutUs';
}, []);
   const Top =()=>{
     window.scrollTo(0,0);
  }
  return (
     
     <>
     <NavBar/>
         
      <div className="Blue__box">
      <div className="container">
          <div className="d-flex  justify-content-center align-items-center">
          
            <div className="col-md-8">
              <div className="card-body my-5">
               
                <h2 className="card-title text-center ">
                Modern era and spirituality
                </h2>
                <p className="card-text my-3" style={{ fontSize: "1.3rem",textAlign: 'justify' }}>
                We belong to great fuminaries like lord Buddha and royal sage King Janak. There was a time when great thinkers, writers and philosophers used to come in our holy land, in order to seek knowledge and to discuss the facts of life. However, stating that the present situation is perhaps opposite, it might not be an exaggeration of the fact. Once upon a time, we were on the epitome in the fields like literature, religion, science and learning but unfortunately today's condition is really pitiable and miserable. merely, pointing out such horrible situa tion is not a solution itself. Hence, the appropriate solution must be sought.</p>

                  <p className="card-text my-3" style={{ fontSize: "1.3rem",textAlign: 'justify' }}>
                  Spirituality is a process which teaches and preaches good things from everywhere but when we kick out the positivity from our life there would not be any iota of chance to uplift ourselves spir- itually. Consequently, there would be prevalence of negative tendency and negativity in life. Thus, the mansion of ignorance would be slowely raised. We are in such a critical verge of time that rapid changes have been happening randomly in our community which can neithere be stopped nor altered. Meanwhile, we can certainly protect our- selves by inculcating and cultivating good thoughts, novel ideas, positive tendency and pure inner culture. In this way we can save ourselves and the upcoming new generation. Hence, spirituality in modern age means to avoid negativity and embrace positivity as In the language of Gita; to cultivate divine quality and eradi cate demonic tendency. If we embrace the divine quality then it leads towards divinity or godhood, having mentioned this, one should not linger here and there. Thus, Continuous and generous efforts are the path to success.
                </p>

                <p className="card-text my-3" style={{ fontSize: "1.3rem",textAlign: 'justify' }}>

                Our aim is to study all the scriptures and embrace the universal fact that can be accepted by all. Religion holds for human development not for particular sect or organization. This is the reason we need to protect our ancient culture but not superstitiousness. New idea or lifestyle. can be embraced but our originality ought not to be forgotten and trampled, Good deeds will protect us everywher Hence, the notion of "do good and be good" must be dissiminated whole heartedly all over the world. This is the demand of iron era, song of life, music of humanity and finally the dire need of all living beings or at least for wise human being.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-around  mb-3">
        <Link to="/about"> 
          <button type="button" onClick={Top} className="btn btn-outline-dark">
            ←previous
          </button>
          </Link>
          <Link to="/page2"> 
          <button type="button" onClick={Top} className="btn btn-outline-dark">
           next→ 
          </button>
          </Link>
        </div>
      </div>
         
    
     
     </>
  )
}

export default Page1
