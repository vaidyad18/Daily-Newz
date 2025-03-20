import { useState } from "react";
import React from "react";

const LeftPanel = ({getData, search, setSearch, setNewsData}) => {
  const countries = ["United States", "India", "China", "Japan", "Germany","Russia", "Pakistan", "United Kingdom", "Canada", "Korea"];
  const flags = {
    "United States": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/1024px-United-states_flag_icon_round.svg.png",
    India: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJqbkiC6gwxnX-Is9mgoZiG4JGtIRhPKS-7Q&s",
    China: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWkD5YM-W-0flfQsIA4tS-Z00djL_WmmktFw&s",
    Japan: "https://static.vecteezy.com/system/resources/previews/011/571/356/non_2x/circle-flag-of-japan-free-png.png",
    Germany: "https://static.vecteezy.com/system/resources/previews/022/102/485/non_2x/germany-flag-round-shape-free-png.png",
    Russia: "https://cdn.countryflags.com/thumbs/russia/flag-round-250.png",
    Pakistan: "https://static.vecteezy.com/system/resources/thumbnails/033/046/831/small_2x/pakistan-flag-circle-3d-cartoon-style-png.png",
    "United Kingdom": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Xq85Wc93UWBuzADxdLzom75NSJ3M6BY9Tw&s",
    Canada: "https://m.media-amazon.com/images/I/61TcZ33ZrJL._AC_UY1000_.jpg",
    Korea: "https://static.vecteezy.com/system/resources/previews/011/571/524/non_2x/circle-flag-of-south-korea-free-png.png"
  };

  const channels = ["BBC", "CNN", "NBC","TechCrunch"];
  const channelLogo = {
    BBC: "https://images.icon-icons.com/70/PNG/512/bbc_news_14062.png",
    CNN: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ32gsjRRPBT9tjnrbfb0U9yhHMkhRPdd8wLQ&s",
    NBC: "https://render.fineartamerica.com/images/rendered/default/greeting-card/images/artworkimages/medium/2/nbc-logo-kls80-kakanda-lee-setiawan-transparent.png?&targetx=100&targety=0&imagewidth=499&imageheight=500&modelwidth=700&modelheight=500&backgroundcolor=ffffff&orientation=0",
    "TechCrunch": "https://cdn.iconscout.com/icon/free/png-256/free-techcrunch-logo-icon-download-in-svg-png-gif-file-formats--major-websites-set-pack-logos-icons-461830.png?f=webp"
  };
  const channelLink = {
    BBC: "bbc.com",
    CNN: "cnn.com",
    "NBC": "nbcnews.com",
    "TechCrunch": "techcrunch.com"
  };

  const key = "ab714619aa65441c94d7489d7f943193";
  const getDataChannel = async (news) => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?domains=${news}&language=en&from=2025-03-17&sortBy=publishedAt&apiKey=${key}`
    );
    const data = await response.json();
    console.log(data.articles);
    setNewsData(data.articles);
  };

  const [visibleCountCountry, setVisibleCountCountry] = useState(3);
  const [visibleCountChannels, setVisibleCountChannels] = useState(3);
  
  const countriesToDisplay = countries.slice(0, visibleCountCountry);
  const channelsToDisplay = channels.slice(0, visibleCountChannels);

  const handleLoadMoreCountry = () => {
    setVisibleCountCountry((prevCount) => Math.min(prevCount + 10, countries.length));
  };
  const handleLoadMoreChannel = () => {
    setVisibleCountChannels((prevCount) => Math.min(prevCount + 10, channels.length));
  };

  const handleUserCountry = (event) => {
    const country = event.currentTarget.getAttribute("value");
    setSearch(country);
    getData(country); 
  };

  const handleUserChannel = (event) => {
    const channel = event.currentTarget.getAttribute("value");
    setSearch(channel);
    getDataChannel(channel); 
  };

  const handleLogo=()=>{
    setSearch("global")
    getData("global")
  }

  return (
    <div className="fixed top-0 left-0 h-full md:w-64 px-4 border-r-2 py-5 bg-white dark:bg-gray-950 dark:border-r-gray-500 border-r-gray-300 pb-6 overflow-y-auto">
      <div onClick={handleLogo} className="flex justify-center cursor-pointer gap-2 xs:gap-3 items-center">
        <p className="md:text-3xl text-md text-black dark:text-white xs:text-2xl font-semibold">Daily Newz</p>
        <img
          className="md:w-10 xs:w-7 w-5 pt-2"
          src="https://img.icons8.com/fluent/512/news.png"
          alt=""
        />
      </div>
      <div>
        <div className="flex mt-5 cursor-pointer text-blue-500 items-center">
          <i className="fa-sharp text-[11px] xs:text-[13px] md:text-[15px] mr-2 xs:mr-3 fa-solid fa-house"></i>
          <p className="md:text-[17px] text-[12px] xs:text-[15px]">Home</p>
        </div>

        <div className="xs:mt-3 mt-2 bg-gray-300 dark:bg-gray-500 h-[2px]"></div>

        <div className="mt-2 xs:mt-3">
          <p className="md:text-[17px] text-[13px] xs:text-[16px] font-semibold">Country</p>
          <div className="mt-3">
            {countriesToDisplay.map((item, i) => {
              return (
                <div key={item}
                value={item}
                onClick={handleUserCountry} className="flex cursor-pointer items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <img
                    className="rounded-full md:w-5 xs:w-4 w-3 h-3 xs:h-4 md:h-5"
                    src={flags[item]}
                    alt=""
                  />
                  <p className="hover:text-blue-500 md:text-[15px] dark:text-gray-300 text-[11px] xs:text-[13px] text-gray-500">{item}</p>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center xs:mb-4">
            {visibleCountCountry < countries.length && (
              <button
                onClick={handleLoadMoreCountry}
                className="w-full text-[10px] xs:text-[12px] md:text-[14px] text-left font-semibold rounded-3xl py-1 md:mt-1 cursor-pointer text-blue-500 "
              >
                <i className="fa-solid fa-angle-down text-[12px] xs:text-[16px] mr-1"></i> Show more
              </button>
            )}
          </div>
        </div>

        <div className="xs:mt-3 mt-2 bg-gray-300 dark:bg-gray-500 h-[2px]"></div>

        <div className="xs:mt-3 mt-2">
          <p className="md:text-[17px] text-[13px] xs:text-[16px] font-semibold">Channels</p>
          <div className="mt-3">
            {channelsToDisplay.map((item, i) => {
              return (
                <div value={channelLink[item]} onClick={handleUserChannel} key={i} className="flex cursor-pointer items-center md:gap-3 gap-2 mb-2 md:mb-3">
                  <img
                    className="rounded-full w-3 xs:w-4 md:w-5"
                    src={channelLogo[item]}
                    alt=""
                  />
                  <p className="text-gray-500 md:text-[15px] dark:text-gray-300 text-[11px] xs:text-[13px] hover:text-blue-500">{item}</p>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center mb-4">
            {visibleCountChannels < channels.length && (
              <button
                onClick={handleLoadMoreChannel}
                className="w-full text-[10px] xs:text-[12px] md:text-[14px] text-left font-semibold rounded-3xl py-1 md:mt-1 cursor-pointer text-blue-500 "
              >
                <i className="fa-solid fa-angle-down text-[13px] xs:text-[16px] mr-1"></i> Show more
              </button>
            )}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default LeftPanel;
