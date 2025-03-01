import AlbumCover from "./components/albumCover.jsx";
import Clock from "./components/Clock.jsx";
import Header from "./components/Header.jsx";
import PlayList from "./components/PlayList.jsx";
import { useState, useRef, useEffect } from "react";
import { State } from "./store/app-state-context.jsx";
import data from "./data.js";
import nextPlayListBtn from "./assets/music_buttons/nextPlayList.svg";
import prevPlayListBtn from "./assets/music_buttons/prevPlayList.svg";

export default function App() {
  const [appState, setAppState] = useState({
    isPlaying: false,
    page: 0,
    index: 0,
  });

  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    audioRef.current = new Audio(data[appState.index].music);
    audioRef.current.load();

    if (appState.isPlaying) {
      audioRef.current.play().catch(error => console.error("Audio play failed:", error));
    }
  }, [appState.index]);

  function handleChangePlaying() {
    const audio = audioRef.current;

    setAppState(prevValue => {
      const isPlaying = !prevValue.isPlaying;

      if (isPlaying) {
        audio.play().catch(error => console.error("Audio play failed:", error));
      } else {
        audio.pause();
        
      }

      return { ...prevValue, isPlaying };
    });
  }

  function handleMoveForward() {
    setAppState(prevValue => {
      return({
        ...prevValue,
        index: prevValue.index === data[data.length - 1].id ? data[0].id : prevValue.index + 1
        //만약 이전 값이 변수명이 데이터인 배열의 마지막 인덱스값이라면 ? 데이터[0]으로 저장 : 이전 값 + 1
      });
    });
  }

  function handleMoveBackward() {
    setAppState(prevValue => {
      return({
        ...prevValue,
        index: prevValue.index === data[0].id ? data[data.length - 1].id : prevValue.index - 1,
      });
    });
    console.log(appState.index);
  }

  function handleMoveNextOrder() {
    setAppState(prevValue => {
      return({
        ...prevValue,
        page: prevValue.page + 1,
      })
    })
    console.log(appState.page);
  }

  function handleMovePrevOrder() {
    setAppState(prevValue => {
      return({
        ...prevValue,
        page: prevValue.page - 1,
      })
    })
    console.log(appState.page);
  }

  const ctxValue = {
    isPlaying: appState.isPlaying,
    index: appState.index,
    page: appState.page,
    changePlayingState: handleChangePlaying,
    changeStateToForward: handleMoveForward,
    changeStateToBackward: handleMoveBackward,
  };

  return (
    <State value={ctxValue}>
      <div className="flex items-center justify-center">
        <button onClick={handleMovePrevOrder}className="hover:cursor-pointer">
            <img src={prevPlayListBtn} alt="" />
        </button>
        <div className="flex flex-col">
          <Header page={appState.page} />
          <AlbumCover />
          <Clock />
        </div>
        <div className="ml-[109px] mt-[113px]">
          <PlayList page={appState.page} />
        </div>
        <button onClick={handleMoveNextOrder} className="hover:cursor-pointer">
          <img src={nextPlayListBtn} alt="" />
        </button>
      </div>
    </State>
  );
}
