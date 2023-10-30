import "../Content/Content.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card/Card";
const Content = ({ searchedData }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedData}`
        );
        setData(response.data);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, [searchedData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {`Not Found such word`}</div>;
  }
  console.log(data);
  return (
    <div className="content__container">
      <div className="content__header">
        <h1>{searchedData}</h1>
        <p className="header__phonetics">
          {data[0].phonetic ? data[0].phonetic : data[0].phonetics[1].text}
        </p>
      </div>
      <div className="content__card">
        <Card name={`verb`}></Card>
        <Card name={`noun`}></Card>
      </div>
    </div>
  );
};

export default Content;
