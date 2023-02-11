 
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Location from './Components/Location';
import NavBar from './Components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Components/Home';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
 
 
 
 

function App() {
  return (
    <>
     
  <BrowserRouter>
    <Routes> 
 <Route exact path="/" element={ <><NavBar /> <Home /> <Footer/>   </> } />
 
 <Route exact path="/gallery" element={ <> <NavBar /> <Gallery /><Footer/></>} />
  
 <Route exact path="/about" element={<About />} />
 
 <Route exact path="/location" element={<Location />} />
 <Route exact path="/con" element={<Contact />} />
 </Routes>
</BrowserRouter>
 
    </>
  );
}

export default App;
