import AlbumCover from "./components/albumCover.jsx";
import Clock from "./components/Clock.jsx";
import Header from "./components/Header.jsx";
import PlayList from "./components/PlayList.jsx";

import { useState, useRef } from "react";
import { State } from "./store/app-state-context.jsx";

export default function App(){
  const [appState, setAppState] = useState({
    isPlaying: false,
    index: 0,
  });

  function handleChangePlaying(clicked) {
    console.log(appState)
    setAppState(prevState => {
      return({
        ...prevState,
        isPlaying: !clicked.isPlaying,  
      })
    })
    console.log(appState);
  }

  const ctxValue = {
    isPlaying: appState.isPlaying,
    index: appState.index,
    changePlayingState: handleChangePlaying,
  };

  return(
    <State value={ctxValue}>
      <div className="flex items-center justify-center">
        <div className="flex flex-col">
          <Header />
          <AlbumCover />
          <Clock />
        </div>
        <div className="ml-[109px] mt-[113px]">
          <PlayList />
        </div>
      </div>
    </State>
  );
}