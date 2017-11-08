import React from 'react';
import { stores } from '../../sweetgreen.js';

const Sidebar = (props) => {
  let i = -1;
  let listing = stores.features.map((feature) => {
    i += 1;
    return (
      <div className="item" key={i} id={`listing-${i}`}>
        <a
          href='#'
          className='title' 
          onClick={() => {
            props.flyToStore(feature);
            props.createPopUp(feature);
            var activeItem = document.getElementsByClassName('active');
            if (activeItem[0]) {
              activeItem[0].classList.remove('active');
            }
          }}>
          {feature.properties.address}
        </a>
        <div className='details'>
          {feature.properties.city} &middot; {feature.properties.phoneFormatted}
        </div>
      </div>
    )
  })

  return (
    <div className="sidebar">
      <div className="heading">
        <h1>Our locations</h1>
      </div>
      <div id="listings" className="listings">{listing}</div>
    </div>
  );
};


export default Sidebar;