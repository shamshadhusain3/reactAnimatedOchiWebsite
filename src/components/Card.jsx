import React from 'react'

function Card({img,btn,bg ,isStar}) {
  return (
    
        <div className={`relative card w-full  bg-[${bg}] h-full flex justify-center items-center rounded-xl`}>
            <div className="imgContainer">
            <img src={img} className='w-32 bg-cover bg-center '  alt="" />
            </div>
            <button className="absolute px-5 py-1 tracking-tighter  border-2 rounded-full left-10 bottom-10 ">&copy;{btn}</button>
        </div>
    
  )
}

export default Card