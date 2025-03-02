import { useEffect, useRef, useState } from "react";

export default function MusicItem({ item, isPlaying, clickMusic }) {
    const titleRef = useRef(null);
    const artistRef = useRef(null);
    const [titleOverflow, setTitleOverflow] = useState(false);
    const [artistOverflow, setArtistOverflow] = useState(false);

    useEffect(() => {
        if (titleRef.current) {
            setTitleOverflow(titleRef.current.scrollWidth > titleRef.current.clientWidth);
        }
        if (artistRef.current) {
            setArtistOverflow(artistRef.current.scrollWidth > artistRef.current.clientWidth);
        }
    }, [item]);

    return (
        <li>
            <div 
                onClick={() => clickMusic(item)} 
                className={`hover:cursor-pointer flex items-center ${isPlaying ? "playing-animation" : ""}`}
            >
                <div className="font-[M PLUS 1p] font-medium text-[26px]">
                    {item.id + 1}
                </div>
                <div className="flex flex-col ml-[45px] w-[233px]">
                    {/* 🎵 제목 */}
                    <div 
                        className="font-[M PLUS 1p] font-medium text-[24px] mb-[-4px] max-w-[167px] whitespace-nowrap overflow-hidden"
                    >
                        <span
                            ref={titleRef}
                            className={`transition-all ${
                                isPlaying && titleOverflow ? "scrolling-text" : "ellipsis-text"
                            }`}
                        >
                            {item.title}
                        </span>
                    </div>
                    {/* 🎤 아티스트 */}
                    <div 
                        className="font-[M PLUS 1p] font-medium text-[13px] text-[#6E6E6E] mb-[5px] max-w-[165px] whitespace-nowrap overflow-hidden"
                    >
                        <span
                            ref={artistRef}
                            className={`transition-all ${
                                isPlaying && artistOverflow ? "scrolling-text" : "ellipsis-text"
                            }`}
                        >
                            {item.artist}
                        </span>
                    </div>
                </div>
                <div className="font-[M PLUS 1p] font-medium text-[27px] mt-[-9px]">
                    <button className="hover:cursor-pointer">...</button>
                </div>
            </div>
            <div className="bg-[#C8C8C8] w-[294px] h-[1px] ml-[57px] mb-[7px]"></div>
        </li>
    );
}
