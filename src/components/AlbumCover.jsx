import albumImg from "../assets/album_covers/brat_album_cover.jpg";
import data from "../data.js";
import data2 from "../data2.js";
export default function AlbumCover({appState}){
    const {page, index} = appState;
    const albumCoverData = page === 0 ? data : data2;
    return(
        <div id="squircle"className="group w-[325px] h-[325px] rounded-[40px] bg-[#D9D9D9] mb-[41px]">
            <img id="squircle" className="group-absolute w-[100%] h-[100%] rounded-[40px]" src={albumCoverData[index].albumCover} alt='brat_album_cover.jpg' />
        </div>
    );
  }