import "../src/App.scss";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useState } from "react";
import { useFontContext } from "../Components/Context/FontContext";
import { useThemeContext } from "../Components/Context/ThemeContext";
import SearchBar from "../Components/SearchBar/SearchBar";
import Content from "../Components/Content/Content";

function App() {
  const { selectedFont } = useFontContext();
  const { defaultTheme } = useThemeContext();
  const [errorStatus, setErrorStatus] = useState(null);
  const [dataFromSearch, setDataFromSearch] = useState("dictionary");
  const handleDataFromSearch = (data) => {
    setDataFromSearch(data);
    setErrorStatus(null);
  };
  return (
    <div className={`background-${defaultTheme}`}>
      <div
        className={`container-${defaultTheme}`}
        style={{ fontFamily: selectedFont }}
      >
        <Header />
        <SearchBar word={handleDataFromSearch} />
        <Content
          searchedData={dataFromSearch}
          setErrorStatus={setErrorStatus}
        />

        {errorStatus !== true && <Footer link={dataFromSearch} />}
      </div>
    </div>
  );
}

export default App;
