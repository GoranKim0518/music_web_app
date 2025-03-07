import MusicList from "./MusicList.jsx";
import data2 from "../data2.js";
import data from "../data.js";
import PlayListFooter from "./PlayListFooter.jsx";

export default function PlayList({appState}){
    const page = appState.page;
    const index = appState.index;

    const selectedData = page === 0 ? data : data2;
    const targetAlbum = selectedData[index].albumName;
    
    return(
        <div id="squircle3" className="group relative bg-[#D9D9D9] rounded-[40px] w-[484px] h-[688px]">
            <div id="squircel4" className="absolute bg-[#fff] rounded-[40px] w-[412px] h-[548px] ml-[36px] mt-[33px] pt-[39px] pl-[40px]">
                <div className="flow-text">
                    <div className={`font-[M PLUS 1p] font-extrabold text-[43px] mb-[20px] max-w-[278px] ${targetAlbum.length > 13 ? "flow-wrap" : ""}`}>{targetAlbum}</div>
                </div>
                <MusicList />
            </div>
            <div className="flex flex-col items-center w-full absolute bottom-[30px] ">
                <PlayListFooter />
            </div>
        </div>
    );
  }