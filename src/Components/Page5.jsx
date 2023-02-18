 import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar';
 
 function Page5() {
  useEffect(() => {
    document.title = 'Kabir Sant-Satsang Mandir -AboutUs';
}, []);
  const Top =()=>{
    window.scrollTo(0,0);
 }
   return (
     <>
     <NavBar />
         <div className="Page5__Main" style={{background: '#edd36b'}}> 
      <div className="container">
          <div className="d-flex  justify-content-center align-items-center">
          
            <div className="col-md-8">
              <div className="card-body my-5">
               
                <h2 className="card-title text-center text-danger">
                आश्रम  में पधारने वाले संत जनों एवं भक्तों से सादर निवेदन

 
                </h2>
                <div className="card-text my-3" style={{ fontSize: "1.3rem",textAlign: 'justify', color: '#0202f5' }}>
              <p>   १.   इस आश्रम में आप सभी दिव्य आच्माओं का स्वागत है । </p>
              <p>  २. आपको कोइ भी कष्ट हो, बेझिझक बताएं । आश्रमद्वारा यथाचित समाधान व व्यवस्थापन किया जायेगा । </p>
              <p>   ३. आप कही भी निकलें आश्रम के व्यवस्थापक या अन्य सदस्यों को सूचित करके जाएं । शामको ६ बजे के पहले आश्रम में पहुचें असमर्था में व्यवस्थापक को सूचित करें ।</p>
              <p>   ४. जब भी आप कमरे से निकलें खिड़की, बिजली बन्द मितव्ययी ढंग से प्रयोग करें साथ ही नल को ठीक से बन्द करें ।</p>
              <p>     ५. सुवह ५ बजे वंदना, ४ बजे प्रसाद और १ बजे सत्सगंग और शाम ६ बजे प्रार्थना होगी । तदपरान्त भोजन और शाम ७ बजे पाठ होगी । अपना दिनचर्या इसी प्रकार बनाएं कि आप भी भाग ले सकें ।</p>
              <p>  ६. शौचालय प्रयोग करने के बाद साफ करना न भूलें साथ ही अपने आस-पास गंदगी न करें । फल के छिलके व अन्य कागजात यत्र-तत्र न बिखरे । </p> 
              <p>   ७. अगर बन सके अपने शक्ति के अनुसार अपने द्वारा प्रयोग किया गया चादर आदि धोने की कृपा करें । </p> 
              <p>  ८. आप यहाँ के मेहमान ही नही वरनु हमारे परम्परा के अपना शिष्टताका परिचय देना ना भूले</p> 
              <p> ९.  नशीली चीजें धुम्रपान, मद्यपान और सभी सुर्तीजन्य पदार्थ लेना सर्वथा वर्जित है ।</p> 
              <p> १०. कोहि भी आगन्तुक ३ दिन तक ही आश्रम में विश्राम कर सकते हैं ।</p>


              <p>११. यहांकी जो अच्छाई हैं वो आप सभी को बाताए, किन्तु जो कमी है वो हमे बताने की कृपा करें ।</p>

                  </div>
              </div>
             
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-around  mb-3">
        <Link to="/page4"> 
          <button type="button" onClick={Top} className="btn btn-outline-dark">
            ←previous
          </button>
          </Link>
          <Link to="/page6"> 
          <button type="button" onClick={Top} className="btn btn-outline-dark">
           next → 
          </button>
          </Link>
        </div>
        </div>
        </div>
    
     </>
   )
 }
 
 export default Page5
 