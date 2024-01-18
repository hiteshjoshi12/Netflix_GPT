import React from 'react'
import Gptsearchbar from './Gptsearchbar'
import Gptmoviesuggestions from './Gptmoviesuggestions'
import { banner } from '../Utils/Constants'
const GptSearch = () => {
  return (
    <div>
      <div className="absolute w-full min-h-screen -z-10">
        <img
          src={banner}
          alt="NETFLIX"
          className="w-full h-full object-cover"
        />
      </div>
      <Gptsearchbar />
      <Gptmoviesuggestions />
    </div>
  )
}

export default GptSearch
