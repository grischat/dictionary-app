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
  const verbDefinitions = data[0].meanings
    .filter((meaning) => meaning.partOfSpeech === "verb")
    .map((meaning, index) => (
      <ul className="verb__container" key={index}>
        {meaning.definitions.map((definition, definitionIndex) => (
          <li key={definitionIndex}>
            <p>{definition.definition}</p>
          </li>
        ))}
      </ul>
    ));
  const nounDefinitions = data[0].meanings
    .filter((meaning) => meaning.partOfSpeech === "noun")
    .map((meaning, index) => (
      <ul className="noun__container" key={index}>
        {meaning.definitions.map((definition, definitionIndex) => (
          <li key={definitionIndex}>
            <p>{definition.definition}</p>
          </li>
        ))}
      </ul>
    ));
    const noData = <span className="nodata-status"><br></br>No data found</span>
  const synonym = data[0].meanings.filter((el) => el.synonyms.length > 0)[0];

  // const synonyms = data[0].meanings[0].synonyms.length > 0 ? data[0].meanings[0].synonyms : data[0].meanings[1].synonyms[0]
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
        <Card name={`noun`}>
          {nounDefinitions.length > 0 ? nounDefinitions : noData}
          <p className="card__synonyms">
          Synonyms:<span> </span> 
            <span className="synonym">{`${
              synonym !== undefined ? synonym.synonyms[0] : "No data found"
            }`}</span>
          </p>
        </Card>
        <Card name={`verb`}>
          {verbDefinitions.length > 0 ? verbDefinitions : noData}
        </Card>
      </div>
    </div>
  );
};

export default Content;
