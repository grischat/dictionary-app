import "../SearchBar/SearchBar.scss";
import { useThemeContext } from "../Context/ThemeContext";
import { useFontContext } from "../Context/FontContext";
import { useState } from "react";
import imageSearchIcon from '../../src/images/icon-search.svg'
const SearchBar = ({ word }) => {
  const { defaultTheme } = useThemeContext();
  const { selectedFont } = useFontContext();
  const [searchValue, setSearchValue] = useState("dictionary");
  const noInput = <div className="noinput">
    <p className="noinput_msg">Whoops can`t be empty</p>
  </div>;
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
            src={imageSearchIcon}
            alt="Search icon"
          />
        </button>
        {searchValue.length < 1 && noInput}
      </form>
    </div>
  );
};

export default SearchBar;
