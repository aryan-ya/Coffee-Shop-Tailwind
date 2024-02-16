import React from 'react'
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"

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
    <div className="bg-red-600">App</div>
  )
}

export default App