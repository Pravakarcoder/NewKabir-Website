import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Location from './Components/Location';
import NavBar from './Components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Components/Home';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import Page4 from './Components/Page4';
import Page5 from './Components/Page5';
import Page6 from './Components/Page6';
import Page7 from './Components/Page7';
import Page8 from './Components/Page8';
import Page9 from './Components/Page9';
function App() {
  return (
    <>
  <BrowserRouter>
    <Routes> 
 <Route exact path="/" element={ <><NavBar /> <Home /> <Footer/>   </> } />
 <Route exact path="/gallery" element={ <> <NavBar /> <Gallery /><Footer/></>} />
 <Route exact path="/location" element={  <><NavBar /><Location /></> } />
 <Route exact path="/about" element={  <><NavBar /><About/></> } />
 <Route exact path="/page1" element={   <><NavBar /><Page1/></> } />
 <Route exact path="/page2" element={   <><NavBar /><Page2 /></> } />
 <Route exact path="/page3" element={   <><NavBar /><Page3 /></> } />
 <Route exact path="/page4" element={   <><NavBar /><Page4 /></> } />
 <Route exact path="/page5" element={   <><NavBar /><Page5 /></> } />
 <Route exact path="/page6" element={   <><NavBar /><Page6 /></> } />
 <Route exact path="/page7" element={   <><NavBar /><Page7 /></> } />
 <Route exact path="/page8" element={   <><NavBar /><Page8 /></> } />
 <Route exact path="/page9" element={   <><NavBar /><Page9 /></> } />
 <Route exact path="/contactUs" element={ <><NavBar /><Contact /></> } />
 <Route exact path="*" element={   <><NavBar /> <Home /> <Footer/>   </>  } />
 </Routes>
</BrowserRouter>
    </>
  );
}
export default App;
