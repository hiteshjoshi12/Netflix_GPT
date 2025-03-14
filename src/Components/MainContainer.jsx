import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = ({ data }) => {
  if (data == null) return;
  const randomIndex = Math.floor(Math.random() * 10) + 1;
  const mainMovie = data[randomIndex];
  console.log("main movie" , mainMovie);

  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} movieid ={id} />
      <VideoBackground movieid={id} />
    </div>
  );
};

export default MainContainer;
