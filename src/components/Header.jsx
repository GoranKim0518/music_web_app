import data from "../data.js";
import data2 from "../data2.js";

export default function Header({page}){
    return(
        <header className="mb-[20px]">
            <div className="font-[M PLUS 1p] font-extrabold text-[64px]">{page === 0 ? data[0].user : data2[0].user}</div>
        </header>
    );
  }