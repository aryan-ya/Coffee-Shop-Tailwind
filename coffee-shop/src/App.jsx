import React from 'react'
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Service from './components/Service/Service';

const App = () => {
  useEffect(() => {
    Aos.init({
       offset:100,
       duration:700,
       easing: 'ease-in',
       delay:100,
  });
  });
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Home />
      <Service />
    </div>
  )
}

export default App