import React, { useState } from "react";

const Card = ({ data }) => {
  const [visibleCount, setVisibleCount] = useState(9);

  const uniqueData = data.filter((item, index, self) => 
    index === self.findIndex((t) => t.title === item.title)
  );

  const cardsToDisplay = uniqueData.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 9);
  };

  return (
    <>
      <div className="flex mx-3 gap-2 sm:gap-5 md:gap-10 flex-wrap justify-center">
        {cardsToDisplay.map((item) => {
          if (!item.urlToImage) {
            return null
          }

          return (
            <div
              className="xl:w-[383px] w-[250px] xs:w-[200px] sm:w-[250px] md:w-[300px] hover:scale-[103%] hover:border-[2px] hover:border-blue-500 p-2 transition-transform duration-300 cursor-pointer flex-col items-center justify-center rounded-3xl"
              key={item.title}
              onClick={() => window.open(item.url)}
            >
              <img
                className="xl:w-[383px] w-[250px] xs:w-[200px] sm:w-[250px] md:w-[300px] h-[145px] xs:h-[120px] sm:h-[145px] md:h-[175px] xl:h-[215px] rounded-2xl mb-2"
                src={item.urlToImage}
                alt={item.title}
              />
              <a className="lg:text-[18px] md:text-[16px] text-[12px] sm:text-[14px] font-semibold">{item.title}</a>
              <p className="line-clamp-3 mt-1 text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-gray-700">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-4 mb-4">
        {visibleCount < uniqueData.length && (
          <button
            onClick={handleLoadMore}
            className=" text-[18px] text-center hover:bg-blue-500 hover:text-white px-3 duration-300 font-semibold rounded-3xl cursor-pointer py-1 text-blue-500"
          >
            <i className="fa-solid fa-angle-down text-[16px] mr-1"></i> View More
          </button>
        )}
      </div>
    </>
  );
};

export default Card;
