import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import {motion} from 'framer-motion'

function Landing() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.3' className='w-full h-screen bg-zinc-900 pt-2'>
        <div className="textstructure mt-40">
                {['we create',' eye opening','presentations'].map((item,index)=>{
                    return( <div className="masker ">
                    <div className="w-fit item-end overflow-hidden flex">
                        {index===1&&(
                            <motion.div initial={{width:0}} animate={{width:'8vw'}} transition={{ease:[0.76, 0, 0.24, 1],duration:1}} className="mr-[1vw] rounded-md top-[.1vw] relative bg-green-500 h-[5.7vw] w-[8vw] "></motion.div>
                        )}
                    <h1 className="uppercase text-[8vw] font-['Founders_Grotesk_X-Condensed'] leading-[6.5vw]  font-bold "> {item}</h1>
                    </div>
                </div>)

                })}
            
        </div>
        <div className="border-t-2 border-zinc-700 mt-20 md:flex  justify-between  items-center py-5 px-20">
            {[
              "For public and private compamies",
              "From the first pitch to IPO"  
            ].map((item , index)=> <p className='text-md  font-light tracking-tight leading-none' >{item}</p>)
            }
            <div className="start flex">
            <button className='px-5 py-2 border-[1px] border-zinc-600 uppercase text-md rounded-full '>Start the project</button>
            <div className='w-10 h-10 border-[1px] border-zinc-600 capitalize text-md rounded-[50%] flex justify-center items-center '><MdArrowOutward /></div>
            </div>
        </div>
    </div>
  )
}

export default Landing