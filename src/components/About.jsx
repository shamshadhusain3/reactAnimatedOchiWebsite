import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tr-3xl rounded-tl-3xl  text-black '>
        <h1 className="text-[3.5vw] leading-[3.5vw] font-['Neue_Montreal'] text-black tracking-tight" >
        Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
        <div className="border-t-[1px] md:flex justify-center items-center gap-10 mt-20  w-full border-[#b4cc5f]">
            <div className="w-1/2 ">
                <h1 className="text-black pt-10 font-semibold  text-[4vw]">OUR APPROACH:</h1>
                <button className=" whitespace-nowrap flex items-center gap-5 mt-8 md:px-[3vw] md:py-[1.5vw] px-5  py-3 bg-zinc-900 text-white uppercase rounded-full">Read More
                <div className="bg-white w-3 h-3  rounded-full"></div></button>
            </div>

            <div className="w-1/2 md:h-[70vh] p-10 mt-10 rounded-3xl bg-[#56661d]"></div>

        </div>
    </div>
  )
}

export default About