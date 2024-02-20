import React from 'react'
import { useEffect } from 'react';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import AOS from 'aos';
import "aos/dist/aos.css"
import Banner from './components/Banner/Banner';
import AppStore from './components/AppStore/AppStore';

const App = () => {
  useEffect(() => {
    AOS.init({
       offset:100,
       duration:700,
       easing: 'ease-in',
       delay:100,
  });
  AOS.refresh();
  }, []);
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Home />
      <Service />
      <Banner />
      <AppStore />
      
    </div>
  )
}

export default App