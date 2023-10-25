import "../src/App.scss";
import Header from "../Components/Header/Header";
import { useFontContext } from "../Components/Context/FontContext";

function App() {
  const { selectedFont } = useFontContext();
  return (
    <div className="container" style={{ fontFamily: selectedFont }}>
      <Header />
      <h1>This is for the test of switcher</h1>
      <p>This is for the test of switcher</p>
    </div>
  );
}

export default App;
