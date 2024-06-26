import React from 'react';
import './App.css';
import NavbarDefault from './Navbar';
import Banner from './Banner';
import Competances from './Competances';
import Projets from './Projets'; 
import Contact from './Contact';
import News from './News';
import Footer from './Footer';

function App() {
  return (
    <div className="bg-[#121212] text-[#fff] App">
{/* Touts les composants de mon site restent ici  */}
      <NavbarDefault/>
      <Banner/>
      <Competances/>
      <Projets/>
      <Contact/>
      <News/>
      <Footer/>
    </div>
  );
}

export default App;
