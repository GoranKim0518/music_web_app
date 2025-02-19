import AlbumCover from "./components/albumCover.jsx";
import Clock from "./components/Clock.jsx";
import Header from "./components/Header.jsx";
import PlayList from "./components/PlayList.jsx";

import { useState, useRef } from "react";

export default function App(){
  const [isPlaying, setIsPlaying] = useState(false);

  

  return(
    <>
      <Header />
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-col">
          <AlbumCover />
          <Clock />
        </div>
        <div className="ml-[109px]">
          <PlayList />
        </div>
      </div>
    </>
  );
}