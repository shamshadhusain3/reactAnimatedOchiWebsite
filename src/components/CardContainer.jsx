import React from 'react'
import Card from './Card'

function CardContainer() {

  return (
    <div className='w-full h-screen border-t-[1px] border-zinc-700 flex gap-5 justify-center items-center p-5  '>
      <div className="cardContainer w-1/2 h-[55vh] ">
        <Card img="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" btn='2024' bg='#224D44' />
      </div>
      <div className="cardContainer w-1/2 h-[55vh] flex gap-5 justify-center items-center ">
        <div className="w-1/2 h-full">
        <Card img="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" btn='rating 5.0 on clutch'  bg='#212121' />
        </div>
        <div className="w-1/2 h-full">
        <Card img="https://ochi.design/wp-content/uploads/2022/04/logo003.png" btn='business Bootcamp'  bg='#212121'/>
        </div>
        
        
      </div>
    </div>
  )
}

export default CardContainer