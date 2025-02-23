import AlbumCover from "./components/albumCover.jsx";
import Clock from "./components/Clock.jsx";
import Header from "./components/Header.jsx";
import PlayList from "./components/PlayList.jsx";
import { useState, useRef, useEffect } from "react";
import { State } from "./store/app-state-context.jsx";
import data from "./data.js";

export default function App() {
  const [appState, setAppState] = useState({
    isPlaying: false,
    index: 0,
  });

  const audioRef = useRef(null);

  // 오디오 객체를 동적으로 생성 및 업데이트
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    audioRef.current = new Audio(data[appState.index].music);
    audioRef.current.load(); // 브라우저가 오디오를 인식하도록 강제 로드

    if (appState.isPlaying) {
      audioRef.current.play().catch(error => console.error("Audio play failed:", error));
    }
  }, [appState.index]);

  // 오디오 재생/정지 핸들러
  function handleChangePlaying() {
    const audio = audioRef.current;

    setAppState(prevValue => {
      const isPlaying = !prevValue.isPlaying;

      if (isPlaying) {
        audio.play().catch(error => console.error("Audio play failed:", error));
      } else {
        audio.pause();
        audio.currentTime = 0;
      }

      return { ...prevValue, isPlaying };
    });
  }

  const ctxValue = {
    isPlaying: appState.isPlaying,
    index: appState.index,
    changePlayingState: handleChangePlaying,
  };

  return (
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
