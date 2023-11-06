import "../Content/Content.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card/Card";

const Content = ({ searchedData, setErrorStatus }) => {
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
        setErrorStatus(null);
      } catch (error) {
        setError(error);
        setLoading(false);
        setErrorStatus(true);
      }
    }

    fetchData();
  }, [searchedData, setErrorStatus]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Not Found such word</div>;
  }
  const playAudio = (audioUrl) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };
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
  const noData = (
    <span className="nodata-status">
      <br></br>No data found
    </span>
  );
  const synonym = data[0].meanings.filter((el) => el.synonyms.length > 0)[0];
  const firstNonEmptyPhoneticAudio = data[0].phonetics.find((phonetic) => phonetic.audio.length > 0);
  
  console.log(data);

  return (
    <div className="content__container">
      <div className="content__header">
        <h1>{searchedData}</h1>
        <p className="header__phonetics">
          {data[0].phonetic ? data[0].phonetic : 'Phonetic not found'}
        </p>
        {firstNonEmptyPhoneticAudio &&  (
              <img
                className="header__playbtn"
                src="../images/icon-play.svg"
                alt="Icon to play audio"
                onClick={() => playAudio(firstNonEmptyPhoneticAudio.audio)}
              />
            )
        }
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
