import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner =({heroBanner})=>{
  return (
      <div className="hero-banner-container">
       <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
         <h1>{heroBanner.largeText1}</h1>
        
        <img src= {urlFor(heroBanner.image)}
        alt="headPhone" 
        className='hero-banner-image' />

        <div>
           <Link href="/product/ID">
            <button type='button' >BUTTON TEXT</button>
            </Link>
             <div className="desc">
              <h5>Description</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem.</p>

             </div>
        </div>
       </div>
      </div>
  )
}

export default HeroBanner
