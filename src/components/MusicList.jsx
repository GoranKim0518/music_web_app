import playListArrary from "../data.js";


export default function MusicList() {
    return(
        <>
            <p className="font-[M PLUS 1p] font-extrabold text-[42px] mb-[20px]">{playListArrary[0]}</p>
            <ul>
                    <li className="">
                        <div className="flex flex-row">
                            <div className="font-[M PLUS 1p] font-medium text-[26px]">BRAT</div>
                            <div className="flex flex-col ml-[45px]">
                                <div className="font-[M PLUS 1p] font-medium text-[24px] mb-[-7px]">playListArray[0].id</div>
                                <div className="font-[M PLUS 1p] font-medium text-[13px] text-[#6E6E6E] mb-[5px]">Charli XCX</div>
                            </div>
                            <div className="font-[M PLUS 1p] font-medium text-[25px] ml-[167px] mt-[-13px]">...</div>
                        </div>
                        <div className="bg-[#C8C8C8] w-[294px] h-[1px] ml-[57px]"></div>
                    </li>
            </ul>
        </>
    )
}