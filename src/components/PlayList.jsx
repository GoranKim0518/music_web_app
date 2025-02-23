import MusicList from "./MusicList.jsx";
import data from "../data.js";
import PlayListFooter from "./PlayListFooter.jsx";

export default function PlayList(){
    return(
        <div className="group relative bg-[#D9D9D9] rounded-[40px] w-[484px] h-[688px]">
            <div className="absolute bg-[#fff] rounded-[40px] w-[412px] h-[548px] ml-[36px] mt-[33px] pt-[39px] pl-[40px]">
                <p className="font-[M PLUS 1p] font-extrabold text-[43px] mb-[20px] max-w-[278px] text-ellipsis block whitespace-nowrap overflow-hidden">{data[0].albumName}</p>
                <MusicList />
            </div>
            <div className="flex flex-col items-center w-full absolute bottom-[30px] ">
                <PlayListFooter />
            </div>
        </div>
    );
  }