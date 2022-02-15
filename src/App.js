import "./App.css";
import CharacterGrid from "./Components/CharacterSelect/CharacterGrid";
import Header from "./Components/Header/Header";
import Button from "./Components/CharacterSelect/Button";
import CharacterCardContainer from "./Components/CharacterCard/CharacterCardContainer";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <CharacterGrid />
      <div className="button-container">
        <Button />
      </div>
      <CharacterCardContainer />
      <Footer />
    </div>
  );
}

export default App;
