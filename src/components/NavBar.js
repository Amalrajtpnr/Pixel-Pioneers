import React from "react";
import {FaRegImage} from "react-icons/fa"

function NavBar() {
  return (
    <div className="w-[95%] min-h-[20%] flex flex-row items-center justify-center mb-5  bg-black ">
    <img src="/1.webp" className="w-[4%] h-[20%]  sm600:min-w-[7%]  flex flex-row items-center justify-center" alt="" />
    <h1 className="text-[35px] sm600:text-[30px] w-[90%] text-white font-bold flex flex-row items-center justify-center">PixelPioneers</h1>
    </div>
  );
}

export default NavBar;
