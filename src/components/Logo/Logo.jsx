import React from 'react'
import L from './Logo.module.css'
export const Logo = () => {
  return (
    <div className={L.tittle}>
      <ul className={L.tittle__ul}>
          <li className={L.tittle__ul_li}>Game</li>
          <li className={L.tittle__ul_li}>Live score</li>
          <li className={L.tittle__ul_li}>Statistics</li>
          <li className={L.tittle__ul_li}>Analitics</li>
          <li className={L.tittle__ul_li}>Forecasts</li>
      </ul>
  </div>
  )
}
export default Logo
