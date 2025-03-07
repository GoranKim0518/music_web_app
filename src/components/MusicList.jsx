import data from "../data.js";
import data2 from "../data2.js";
import { useContext } from "react";
import { State } from "../store/app-state-context.jsx";
import MusicPlayingBar from "./MusicPlayingBar.jsx";

export default function MusicList({ ref }) {
    const { page, index, isPlaying, clickMusic } = useContext(State);
    const selectedData = page === 0 ? data : data2;
    return (
        <ul>
            {selectedData.map((item) => { 
                const isCurrentPlaying = index === item.id && isPlaying;

                return (
                    <li key={item.id} ref={ref}>
                        <div 
                            onClick={() => clickMusic(item)} 
                            className={`hover:cursor-pointer flex items-center ${isCurrentPlaying ? "playing-animation" : ""}`}
                        >
                            <div className="font-[M PLUS 1p] font-medium text-[26px] mr-[31px] w-[30px]">
                                {isCurrentPlaying ? <MusicPlayingBar /> : item.id + 1}
                            </div>
                            <div className="flex flex-col w-[233px]">
                                <div className="font-[M PLUS 1p] font-medium text-[24px] mb-[-4px] max-w-[167px] text-ellipsis block whitespace-nowrap overflow-hidden">
                                    {item.title}
                                </div>
                                <div className="font-[M PLUS 1p] font-medium text-[13px] text-[#6E6E6E] mb-[5px] max-w-[165px] text-ellipsis block whitespace-nowrap overflow-hidden">
                                    {item.artist}
                                </div>
                            </div>
                            <div className="font-[M PLUS 1p] font-medium text-[27px] mt-[-9px]"><button className="hover:cursor-pointer">...</button></div>
                        </div>
                        <div className="bg-[#C8C8C8] w-[294px] h-[1px] ml-[57px] mb-[7px]"></div>
                    </li>
                );
            })}
        </ul>
    );
}
