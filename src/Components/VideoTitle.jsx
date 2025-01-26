import React from "react";

const VideoTitle = ({ title, overview }) => {
  const truncateText = (text, maxLength) =>
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return (
    <div className="w-screen aspect-video pt-[20%] px-6 sm:px-12 md:px-16 lg:px-24 absolute text-white bg-gradient-to-r from-black to-transparent">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
        {title}
      </h1>
      <p className="py-4 sm:py-6 text-sm sm:text-base md:text-lg lg:text-xl w-full sm:w-[50%] md:w-[40%] lg:w-[28%]">
        {/* Truncate text for small and medium screens */}
        {truncateText(overview, 80)}
      </p>
      <div className="flex flex-wrap items-center gap-4">
        <button className="bg-white text-black py-2 px-6 sm:py-3 sm:px-8 md:py-4 md:px-11 text-sm sm:text-lg md:text-xl rounded-lg hover:opacity-70 transition-opacity">
          <i className="ri-play-fill"> Play</i>
        </button>
        <button className="bg-[#333333] text-white py-2 px-6 sm:py-3 sm:px-8 md:py-4 md:px-11 text-sm sm:text-lg md:text-xl bg-opacity-70 rounded-lg hover:opacity-70 transition-opacity">
          <i className="ri-information-2-line"> More Info</i>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
