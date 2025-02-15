import AlbumCover from "./components/albumCover.jsx";
import Clock from "./components/Clock.jsx";
import Header from "./components/Header.jsx";
import PlayList from "./components/PlayList.jsx";

export default function App(){
  return(
    <>
      <Header />
      <div className="flex flex-row">
        <div className="flex flex-col">
          <AlbumCover />
          <Clock />
        </div>
        <PlayList />
      </div>
    </>
  );
}