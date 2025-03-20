import React, { useState, useEffect } from "react";
import Card from "./Card";

const News = ({ getData, search, setSearch, newsData }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleUser = (event) => {
    const category = event.currentTarget.getAttribute("value");
    setSearch(category);
    getData(category);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      getData(search);
    }
  };

  const categories = [
    { name: "all", logo: "" },
    {
      name: "politics",
      logo: "https://cdn-icons-png.flaticon.com/512/9039/9039295.png",
    },
    { name: "business", logo: "https://attic.sh/7pnk9dvgm50m8etorurkag0x0txr" },
    {
      name: "sports",
      logo: "https://static.vecteezy.com/system/resources/thumbnails/013/366/674/small_2x/foot-ball-or-soccer-ball-icon-symbol-for-art-illustration-logo-website-apps-pictogram-news-infographic-or-graphic-design-element-format-png.png",
    },
    {
      name: "health",
      logo: "https://static.vecteezy.com/system/resources/thumbnails/017/177/954/small/round-medical-cross-symbol-on-transparent-background-free-png.png",
    },
    {
      name: "technology",
      logo: "https://png.pngtree.com/png-vector/20220512/ourmid/pngtree-laptop-logo-icon-vector-illustration-design-png-image_4613127.png",
    },
    {
      name: "entertainment",
      logo: "https://static.vecteezy.com/system/resources/previews/009/400/882/non_2x/casino-dice-clipart-design-illustration-free-png.png",
    },
  ];

  return (
    <div className="w-full">
      <div className="bg-[url(./buildings.jpg)] bg-center bg-cover m-5 py-12 xs:py-16 md:py-20 rounded-2xl px-10 xs:px-32 flex items-center justify-center relative">
        <input
          className="bg-white border-none outline-none capitalize w-full py-1 sm:py-2 md:py-3 pl-3 sm:pl-5 text-[10px] sm:text-[12px] md:text-[15px] rounded-full"
          type="text"
          placeholder="Search news"
          value={search}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-blue-500 cursor-pointer flex hover:bg-blue-600  duration-200 absolute right-[42px] xs:right-[132px] text-white rounded-full"
          onClick={() => getData(search)}
        >
          <i className="fa-solid fa-magnifying-glass text-[10px] sm:text-[13px] md:text-[16px] p-1 sm:p-2 md:p-3"></i>
        </button>
      </div>

      <div className="xs:flex hidden items-center justify-center m-5 gap-2 md:gap-5 font-semibold">
        {categories.map((category) => (
          <div
            key={category.name}
            value={category.name}
            onClick={handleUser}
            className="border-[1px] hover:bg-gray-200 duration-200 cursor-pointer justify-center items-center flex gap-2 rounded-full py-[6px] px-2 sm:px-4 text-[13px] hover:scale-105 transition-transform border-gray-400"
          >
            {category.logo && (
              <img
                className="md:w-5 sm:flex hidden w-4 h-4 md:h-5"
                src={category.logo}
                alt={category.name}
              />
            )}
            <p className="md:text-[13.5px] text-[11px] capitalize">
              {category.name}
            </p>
          </div>
        ))}
      </div>

      <div className="flex-col xs:hidden items-center justify-center m-5 -mt-2 gap-2 md:gap-5 font-semibold">
        <div className="flex gap-3 justify-center items-center">
          <div
            value="all"
            onClick={handleUser}
            className="border-[1px] hover:bg-gray-200 duration-200 cursor-pointer justify-center items-center flex gap-2 rounded-full px-2 py-1 sm:px-4 text-[13px] hover:scale-105 transition-transform border-gray-400"
          >
            <p className="md:text-[13.5px] text-[9px] xs:text-[11px] capitalize">All</p>
          </div>
          <div
            value="politics"
            onClick={handleUser}
            className="border-[1px] hover:bg-gray-200 duration-200 cursor-pointer justify-center items-center flex gap-2 rounded-full px-2 py-1 sm:px-4 text-[13px] hover:scale-105 transition-transform border-gray-400"
          >
            <p className="md:text-[13.5px] text-[9px] xs:text-[11px] capitalize">Politics</p>
          </div>
          <div
            value="health"
            onClick={handleUser}
            className="border-[1px] hover:bg-gray-200 duration-200 cursor-pointer justify-center items-center flex gap-2 rounded-full px-2 py-1 sm:px-4 text-[13px] hover:scale-105 transition-transform border-gray-400"
          >
            <p className="md:text-[13.5px] text-[9px] xs:text-[11px] capitalize">Health</p>
          </div>
          <div
            value="technology"
            onClick={handleUser}
            className="border-[1px] hover:bg-gray-200 duration-200 cursor-pointer justify-center items-center flex gap-2 rounded-full px-2 py-1 sm:px-4 text-[13px] hover:scale-105 transition-transform border-gray-400"
          >
            <p className="md:text-[13.5px] text-[9px] xs:text-[11px] capitalize">
              Technology
            </p>
          </div>
        </div>
        <div className="flex gap-4 mt-1 justify-center items-center">
          <div
            value="sports"
            onClick={handleUser}
            className="border-[1px] hover:bg-gray-200 duration-200 cursor-pointer justify-center items-center flex gap-2 rounded-full px-2 py-1 sm:px-4 text-[13px] hover:scale-105 transition-transform border-gray-400"
          >
            <p className="md:text-[13.5px] text-[9px] xs:text-[11px] capitalize">Sports</p>
          </div>
          <div
            value="business"
            onClick={handleUser}
            className="border-[1px] hover:bg-gray-200 duration-200 cursor-pointer justify-center items-center flex gap-2 rounded-full px-2 py-1 sm:px-4 text-[13px] hover:scale-105 transition-transform border-gray-400"
          >
            <p className="md:text-[13.5px] text-[9px] xs:text-[11px] capitalize">Business</p>
          </div>
          <div
            value="entertainment"
            onClick={handleUser}
            className="border-[1px] hover:bg-gray-200 duration-200 cursor-pointer justify-center items-center flex gap-2 rounded-full px-2 py-1 sm:px-4 text-[13px] hover:scale-105 transition-transform border-gray-400"
          >
            <p className="md:text-[13.5px] text-[9px] xs:text-[11px] capitalize">
              Entertainment
            </p>
          </div>
        </div>
      </div>

      <div className="">
        {newsData ? (
          <Card data={newsData} />
        ) : (
          <p className="mt-32 pb-52 text-center text-3xl">No News Found :(</p>
        )}
      </div>
      <footer className="text-[15px] text-center bg-blue-500 py-4 text-gray-200 font-semibold ">
        @2025 Daily Newz
      </footer>
    </div>
  );
};

export default News;
