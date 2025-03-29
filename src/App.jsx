import News from "./components/News";
import LeftPanel from "./components/LeftPanel";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("global");
  const [newsData, setNewsData] = useState(null);
  
  
  useEffect(() => {
    getData(search);
  }, []);

  const key = "ab714619aa65441c94d7489d7f943193";
  const getData = async (news) => {
    try {
      const response = await fetch(
        `http://newsapi.org/v2/everything?q=${news}&language=en&from=2025-03-28&sortBy=publishedAt&apiKey=${key}`,
        {
          headers: {
            "User-Agent": "Mozilla/5.0",
            "Accept": "application/json",
          },
        }
      );
      const data = await response.json();
      setNewsData(data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };
  
  return (
    <>
      <div className="flex ">
        <LeftPanel getData={getData} search={search} setSearch={setSearch} setNewsData={setNewsData}/>
        <div className="md:ml-64 ml-[142px] xs:ml-48 w-full bg-white dark:bg-black">

          <News
            getData={getData}
            search={search}
            setSearch={setSearch}
            newsData={newsData}
          />
        </div>
      </div>
    </>
  );
}

export default App;
