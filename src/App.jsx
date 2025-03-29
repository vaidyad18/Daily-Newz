import News from "./components/News";
import LeftPanel from "./components/LeftPanel";
import { useState, useEffect } from "react";

function App() {
  const [search, setSearch] = useState("global");
  const [newsData, setNewsData] = useState(null);
  
  
  useEffect(() => {
    getData(search);
  }, []);

  const key = "ab714619aa65441c94d7489d7f943193";
  const getData = async (news) => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${news}&language=en&from=2025-03-28&sortBy=publishedAt&apiKey=${key}`
    );
    const data = await response.json();
    console.log(data.articles);
    setNewsData(data.articles);
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
