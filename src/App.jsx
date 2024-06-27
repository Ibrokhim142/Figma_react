import React from 'react'
import c from './App.module.css'
import Hero from './components/hero/Hero.jsx'
import Logo from './components/Logo/Logo.jsx'
import Wrapper from './components/Wrapper/Wrapper.jsx'
import Layout from './components/Layut/Layout.jsx'
const App = () => {
  return (
    <>
      <div className="container">
        <div className={c.DashboardCard}>
          <div className={c.cardOne}>
               <Logo/>
              <Hero/>
              <Wrapper/>
              <Layout/>
          </div>








        </div>
      </div>
    </>
  )
}

export default App