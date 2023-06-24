import React from "react";
import "../app/globals.css";

export default function Banner() {
  return (
    <div className="grid banner-container">
      <div className="px-5 text-center">
        <p className="text-4xl lg:text-6xl mb-3">
          Enjoy With <br /> Winter Trend
        </p>
        <p className="text-lg lg:text-2xl text-[#707070] mb-8">
          Discover now latest collection
        </p>
        <div className="p-3 border border-black w-fit mx-auto hover:text-white hover:bg-black cursor-pointer">Show now</div>
      </div>
    </div>
  );
}
