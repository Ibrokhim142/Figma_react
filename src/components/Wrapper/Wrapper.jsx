import React from 'react'
import $ from './Wrapper.module.css'
const Wrapper = () => {
  return (
    <div className={$.wrapper}>
        <h3 className={$.wrapper__tittle}>Most popular <br/> Game</h3>
        <div className={$.wrapper__img}>
              <div className={$.wrapper__card}>
                <h3 className={$.wrapper__tittle_text}>Sniper 2</h3>
                <p>
                  <i class="bi bi-star-fill"></i> 8.6 / 10 Action-rpg
                </p>
              </div>
              <div className={$.wrapper__cards}>
                <h3 className={$.wrapper__tittle_text}>Motor Race</h3>
                <p>
                  <i class="bi bi-star-fill"></i> 8.6 / 10 Action-rpg
                </p>
              </div>
              <div className={$.wrapper__card_img}>
                <h3 className={$.wrapper__tittle_text}>Witcher Hunt</h3>
                <p>
                  <i class="bi bi-star-fill"></i> 8.6 / 10 Action-rpg
                </p>
              </div>
              <div className={$.wrapper__cards_img}>
                <h3 className={$.wrapper__tittle_text}>Pabg war</h3>
                <p>
                  <i class="bi bi-star-fill"></i> 8.6 / 10 Action-rpg
                </p>
              </div>
              <div className={$.wrapper__cardd}>
                <h3 className={$.wrapper__tittle_text}>Sniper 2</h3>
                <p>
                  <i class="bi bi-star-fill"></i> 8.6 / 10 Action-rpg
                </p>
              </div>

            
          


        </div>



    </div>
  )
}

export default Wrapper