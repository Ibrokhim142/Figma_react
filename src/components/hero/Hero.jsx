import React from 'react'
import H from  './Hero.module.css'
export const Hero = () => {
  return (
    <div className={H.hero}>
    <div className={H.hero__page}>
    <h3 className={H.hero__tittle}>
     The Forbidden Kingdom Adventure War
     </h3>
    <a href="#">
    <button className={H.hero__btn}>More Details</button>
    </a>
    </div>
 </div>
  )
}
export default Hero
