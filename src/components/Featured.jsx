import React, { useState } from 'react'
import {motion,useAnimation} from 'framer-motion'
import {Power4} from  'gsap/all'


function Featured({img , img2,text , text2}) {
   
    

    const [isHover, setisHover] = useState(false);
    const [isHover2, setisHover2] = useState(false);

  return (
    <div className='w-full  py-20' >
        <div className="w-full py-20 px-10 border-b-[1px] border-zinc-700">
            <h1 className="text-[8vh] font-['Neue_Montreal'] leading-none tracking-tight font-semibold">Featured one</h1>
        </div>
        <div className="px-20">
            <div className="cards w-full flex gap-10 mt-10 overflow-hidden ">
                <div 
                onMouseEnter={()=>setisHover(true)}
                onMouseLeave={()=>setisHover(false)}
                 className="cardContainer w-1/2 h-[75vh] relative">
                <h1 className=" absolute text-[6vw] z-[10]  left-[86%] flex overflow-hidden tracking-tighter top-[40%] text-[#b4cc5f] font-semibold">
                        {text.split('').map((item,index)=>(
                            <motion.span initial={{y:'100%'}}
                             animate={isHover? ({y:'0'}):({y:'100%'})}
                             transition={{ease:Power4.easeInOut, delay:index*.1}}
                             className='inline-block'>{item}</motion.span>
                        ))}
                    </h1>

                    <div className="card w-full h-full rounded-xl overflow-hidden">
                    <img src={img} alt="" className='bg-cover w-full h-full' />             
                           </div>
                </div>
                <div 
                onMouseEnter={()=>setisHover2(true)}
                onMouseLeave={()=>setisHover2(false)}
                 className="cardContainer w-1/2 h-[75vh] relative">
                <h1 className=" absolute text-[6vw] z-[10]  right-[92%] flex overflow-hidden tracking-tighter top-[40%] text-[#b4cc5f] font-semibold">
                        {text2.split('').map((item,index)=>(
                            <motion.span initial={{y:'100%'}} animate={isHover2? ({y:'0'}):({y:'100%'})} transition={{ease:Power4.easeInOut,delay:index*.1}} className='inline-block'>{item}</motion.span>
                        ))}
                    </h1>

                    <div className="card w-full h-full rounded-xl overflow-hidden">
                    <img src={img2} alt="" className='bg-cover w-full h-full' />             
                           </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured