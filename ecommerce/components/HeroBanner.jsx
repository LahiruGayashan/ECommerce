import React from 'react';
import Link from 'next/link';

const HeroBanner = ({heroBanner}) => {
return (
<div className="hero-banner-container">
     <div>
      <p className ="beats-solo">{heroBanner.smallText}</p>
      <h3>MID TEXT</h3>
      <img src=""alt="headphones" className="hero-banner-image"/>
      <div>
       <Link href="/products/ID">
        <button type="button" >BUTTON TEXT</button>
        </Link>
        <div className="desc">
          <h5>DESCRIPTION TEXT</h5>
          <p>discription</p>
          </div>
      </div>
     </div>
  </div>
 )
}



export default HeroBanner
