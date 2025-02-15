import albumImg from "../assets/brat_album_cover.jpg";

export default function AlbumCover(){
    return(
        <div className="group w-[325px] h-[325px] rounded-[40px] bg-[#D9D9D9] mb-[71px]">
            <img className="group-absolute w-[100%] h-[100%] rounded-[40px]" src={albumImg} alt='brat_album_cover.jpg' />
        </div>
    );
  }