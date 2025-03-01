import data from "../data.js";
import data2 from "../data2.js";

export default function Header({page}){
    const owner = page === 0 ? data[0].user : data2[0].user
    return(
        <header className="mb-[20px]">
            <div className="font-[M PLUS 1p] font-extrabold text-[64px]">{owner}</div>
        </header>
    );
  }