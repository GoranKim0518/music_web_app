import PlayListFooter from "./PlayListFooter.jsx";

export default function PlayList(){
    return(
        <div className="group relative bg-[#D9D9D9] rounded-[40px] w-[484px] h-[688px]">
            <div className="absolute bg-[#fff] rounded-[40px] w-[412px] h-[548px] ml-[36px] mt-[33px] pt-[39px] pl-[40px]">
                <p className="font-[M PLUS 1p] font-extrabold text-[42px] mb-[20px]">BRAT</p>
                <ul>
                    <li>
                        <div className="flex flex-row">
                            <div className="font-[M PLUS 1p] font-medium text-[26px]">1</div>
                            <div className="flex flex-col ml-[45px]">
                                <div className="font-[M PLUS 1p] font-medium text-[24px] mb-[-7px]">360</div>
                                <div className="font-[M PLUS 1p] font-medium text-[13px] text-[#6E6E6E] mb-[5px]">Charli XCX</div>
                            </div>
                            <div className="font-[M PLUS 1p] font-medium text-[25px] ml-[167px] mt-[-13px]">...</div>
                        </div>
                        <div className="bg-[#C8C8C8] w-[294px] h-[1px] ml-[57px]"></div>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col items-center w-full absolute bottom-[30px] ">
                <PlayListFooter />
            </div>
        </div>
    );
  }