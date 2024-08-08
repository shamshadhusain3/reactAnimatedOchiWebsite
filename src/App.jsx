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
import {motion} from 'framer-motion'
import About1 from './components/About1'





function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
    <motion.div  initial={{width:'70vw',height:'600px', position:'absolute',top:'5rem',left:'5rem'}} animate={{width:'100%',height:'100%',position:'relative',top:0,left:0}} transition={{ease:[0.76, 0, 0.24, 1],duration:2}} className="bg-main w-full min-h-screen scroll-s bg-zinc-900 ">
       <Navbar/>
       <Landing/>
       <Marque/>
       <About/>
       <Eye 
       img='img-bg'
       bg='white'
       />
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
        <About1/>
       <CardContainer/>
       <Footer/>
    </motion.div  >
    </>
  )
}

export default App