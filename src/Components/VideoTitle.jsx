import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[17%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-[28%]'>{overview}</p>
        <div>
            <button className='bg-white text-black p-4 px-11 text-xl rounded-lg hover:opacity-70'> <i className="ri-play-fill">Play</i> </button>
            <button className=' mx-3 bg-[#333333] text-white p-4 px-11 text-xl bg-opacity-70 rounded-lg'><i className="ri-information-2-line">  More Info</i></button>
        </div>
    </div>
  )
}

export default VideoTitle