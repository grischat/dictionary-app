import "../src/App.scss";
import Header from "../Components/Header/Header";
import { useFontContext } from "../Components/Context/FontContext";
import { useThemeContext } from "../Components/Context/ThemeContext";
function App() {
  const { selectedFont } = useFontContext();
  const { defaultTheme } = useThemeContext();
  return (
    <div className={`container-${defaultTheme}`} style={{ fontFamily: selectedFont }}>
      <Header />
      <h1>This is for the test of switcher</h1>
      <p>This is for the test of switcher</p>
    </div>
  );
}

export default App;
