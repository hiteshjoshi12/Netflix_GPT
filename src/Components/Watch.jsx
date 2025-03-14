
import { useParams } from "react-router-dom";

import {useState } from "react";
import useMovieTrailer from "../Hooks/useMovieTrailer";




const Watch = () => {
    const { movieid } = useParams();
    console.log("Video ID:", movieid);
    const [trailerid, setTrailerId] = useState(null);
    
    useMovieTrailer({ movieid, setTrailerId});

    console.log(trailerid)


  return (
    <div className="h-screen w-screen bg-black">

    <div className="h-screen w-[95%] ml-11 mr-11 pt-11 pb-11">
      <iframe className="h-[416px] md:h-[calc(100%-0px)] w-full pt-[118px] md:pt-[70px]"
        src={`https://www.youtube.com/embed/${trailerid}?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen>
      </iframe>
    </div>
            </div>
  )
}



export default Watch;
