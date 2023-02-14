import React, { useEffect, useState } from "react";
 

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    } 
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

   

  return (
    <> 
      {isVisible && (

   <button type="button"  onClick={goToBtn} className="btn btn-danger btn-floating btn-lg" id="btn-back-to-top"  style={{position:'fixed',bottom: '20px',right:"20px"}}>
        <i className="fas fa-arrow-up"></i>
      </button> 

         
      )}
    </>
  );
};

 

export default GoToTop;