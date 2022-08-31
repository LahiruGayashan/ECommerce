import React from 'react'
import Link from 'next/link'

const HeroBanner =()=>{
  return (
      <div className="hero-banner-container">
       <div>
        <p className="beats-solo">Small Text</p>
        <h3>MID TEXT</h3>
        <img src="" alt="headPhone" className='hero-banner-image' />

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
