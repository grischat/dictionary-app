import "../src/App.scss";
import Header from "../Components/Header/Header";
import { useState } from "react";
import { useFontContext } from "../Components/Context/FontContext";
import { useThemeContext } from "../Components/Context/ThemeContext";
import SearchBar from "../Components/SearchBar/SearchBar";
import Content from "../Components/Content/Content";
function App() {
  const { selectedFont } = useFontContext();
  const { defaultTheme } = useThemeContext();
  const [dataFromSearch, setDataFromSearch] = useState('')
  const handleDataFromSearch = (data) => {
    setDataFromSearch(data)
  }
  return (
    <div className={`container-${defaultTheme}`} style={{ fontFamily: selectedFont }}>
      <Header />
      <SearchBar word={handleDataFromSearch}/>
      <Content searchedData={dataFromSearch}/>
    </div>
  );
}

export default App;
