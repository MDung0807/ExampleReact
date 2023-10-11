import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const images = [
    'https://images.unsplash.com/photo-1520105072000-f44fc083e508?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60z',
    'https://media.istockphoto.com/id/1470569235/photo/electric-city-bus-recharging-at-the-bus-charge-station-connected-with-a-power-cable.webp?b=1&s=170667a&w=0&k=20&c=un9sAj5WvIwuwvZF-iV8FHx4yh8Yh4CEe-jbWZaDk3M=',
    'https://media.istockphoto.com/id/614218426/photo/travel-in-the-old-bus-with-empty-seats.webp?b=1&s=170667a&w=0&k=20&c=RHrrl58ZAHAJPDqes7stiSm8-n5-kdsghC_Az_BhrjI=',
  ];
  

  const Slide = () => {
    return (
      <div className="slide-container">
        <Zoom scale={0.1}>
          {
            images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} alt='imag'/>)
          }
        </Zoom>
      </div>
    )
}

export default Slide;