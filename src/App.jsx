import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marque from './components/Marque'
import About from './components/About'
import Eye from './components/Eye'
import Featured from './components/Featured'
import CardContainer from './components/CardContainer'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';




function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
    <div className="bg-main w-full min-h-screen bg-zinc-900 ">
       <Navbar/>
       <Landing/>
       <Marque/>
       <About/>
       <Eye/>
       <Featured 
       img="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
       text='FYDE'
       img2="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
       text2='VISE'
        />
        <Featured 
       img="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
       text='TRAWA'
       img2="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
       text2='PREMIUM'
        />
       <CardContainer/>
       <Footer/>
    </div>
    </>
  )
}

export default App