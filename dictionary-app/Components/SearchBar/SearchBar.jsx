import "../SearchBar/SearchBar.scss";
import { useThemeContext } from "../Context/ThemeContext";
import { useFontContext } from "../Context/FontContext";
import { useState } from "react";
const SearchBar = ({ word }) => {
  const { defaultTheme } = useThemeContext();
  const { selectedFont } = useFontContext();
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  
  const handleSearchClick = (e) => {
    e.preventDefault();
    word(searchValue);
  };
  return (
    <div className={`search__container-${defaultTheme}`}>
      <form onSubmit={handleSearchClick}>
        <input
          className="search__input"
          type="text"
          placeholder="Start to search..."
          style={{
            fontFamily: selectedFont,
            color: `${defaultTheme === "light" ? "#2D2D2D" : "#FFFFFF"}`,
          }}
          onChange={handleInputChange}
        />
        <button type="submit" className="search__button">
          <img
            className="search__icon"
            src="../images/icon-search.svg"
            alt="Search icon"
          />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
