 import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
 
 function NavBar() {
    const navButton = useRef(null);
    const linksContainerRef = useRef(null);
  
    function collapseNav() {
      navButton.current.classList.add("collapsed");
      linksContainerRef.current.classList.remove("show");
    }
 

         
         
          
              return (
                <>
                 {/* navbar-dark bg-dark */}
                <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#34b1eb'}}>
                   
                <div className="container-fluid">
              <button  ref={navButton} className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span> </button>
        
      
                  
                <Link onClick={collapseNav} className="navbar-brand fs-4" to="/">
                Kabir sant-satsang mandir
                </Link>  
              
               <div ref={linksContainerRef} className="collapse navbar-collapse   justify-content-end" id="navbarTogglerDemo03">
                 <ul className="navbar-nav mr-auto mb-2 mb-lg-0 text-center fs-5">
         
                  <li className="nav-item"> 
                  <Link onClick={collapseNav} className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                   
        
        
                <li className="nav-item"> 
                <Link onClick={collapseNav} className="nav-link"  to="/gallery">Gallery</Link>
                </li>
             
        
                <li className="nav-item"> 
                <Link onClick={collapseNav} className="nav-link"  to="/location">Loaction</Link>
                </li>
            
              
        
                <li className="nav-item"> 
                <Link onClick={collapseNav} className="nav-link"  to="/about">About us</Link>
                </li>
                    
        
                  
                   {/* <li className="nav-item">
                     <a className="nav-link" href="#services">Our Services</a> 
               </li> */}
        
        
        
                <li className="nav-item"> 
                <Link onClick={collapseNav} className="nav-link"  to="/contactUs">Contact us</Link>
                </li>
        
                
        
               
                  
                 </ul>
                
                </div>
             </div>
            </nav>
            </>
   )
 }
 
 export default NavBar