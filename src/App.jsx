import { useState, useRef, useEffect } from "react";
import AlbumCover from "./components/albumCover.jsx";
import Clock from "./components/Clock.jsx";
import Header from "./components/Header.jsx";
import PlayList from "./components/PlayList.jsx";
import { State } from "./store/app-state-context.jsx";
import data from "./data.js";
import data2 from "./data2.js";
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
      audioRef.current.pause(); // 기존 오디오 정지
    }
    
    const selectedData = appState.page === 0 ? data : data2;
    audioRef.current = new Audio(selectedData[appState.index].music);

    // 음악이 끝나면 자동으로 다음 곡 재생
    audioRef.current.addEventListener("ended", handleMoveForward);

    if (appState.isPlaying) {
      audioRef.current.play().catch(error => console.error("Audio play failed:", error));
    }

    return () => {
      // 컴포넌트 언마운트 또는 곡 변경 시 이벤트 리스너 제거
      audioRef.current.removeEventListener("ended", handleMoveForward);
    };
  }, [appState.index, appState.page]);

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
      const selectedData = prevValue.page === 0 ? data : data2;
      const nextIndex = prevValue.index === selectedData.length - 1 ? 0 : prevValue.index + 1;

      return {
        ...prevValue,
        index: nextIndex,
      };
    });
  }

  function handleMoveBackward() {
    setAppState(prevValue => {
      const selectedData = prevValue.page === 0 ? data : data2;
      const prevIndex = prevValue.index === 0 ? selectedData.length - 1 : prevValue.index - 1;

      return {
        ...prevValue,
        index: prevIndex,
      };
    });
  }

  function handleMoveNextOrder() {
    setAppState(prevValue => ({
      ...prevValue,
      index: 0,
      page: prevValue.page !== 1 ? prevValue.page + 1 : prevValue.page - 1,
    }));
  }

  function handleMovePrevOrder() {
    setAppState(prevValue => ({
      ...prevValue,
      index: 0,
      page: prevValue.page !== 0 ? prevValue.page - 1 : prevValue.page + 1,
    }));
  }

  function handleClickMusic(e) {
    setAppState(prevValue => {
        return {
            ...prevValue,
            index: e.id,
            isPlaying: true, // 음악 선택 시 즉시 재생
        };
    });

    if (audioRef.current) {
        audioRef.current.pause();
    }

    const selectedData = appState.page === 0 ? data : data2;
    audioRef.current = new Audio(selectedData[e.id].music);
    
    // 브라우저가 차단하지 않도록 play()를 비동기 처리
    setTimeout(() => {
        audioRef.current.play().catch(error => console.error("Audio play failed:", error));
    }, 100);
}



  const ctxValue = {
    isPlaying: appState.isPlaying,
    index: appState.index,
    page: appState.page,
    changePlayingState: handleChangePlaying,
    changeStateToForward: handleMoveForward,
    changeStateToBackward: handleMoveBackward,
    clickMusic: handleClickMusic,
  };

  return (
    <State value={ctxValue}>
      <div className="flex items-center justify-center">
        <button onClick={handleMovePrevOrder} className="hover:cursor-pointer">
          <img src={prevPlayListBtn} alt="" />
        </button>
        <div className="flex flex-col">
          <Header page={appState.page} />
          <AlbumCover appState={appState} />
          <Clock />
        </div>
        <div className="ml-[109px] mt-[113px]">
          <PlayList appState={appState} />
        </div>
        <button onClick={handleMoveNextOrder} className="hover:cursor-pointer">
          <img src={nextPlayListBtn} alt="" />
        </button>
      </div>
    </State>
  );
}