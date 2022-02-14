import "./App.css";
import CharacterGrid from "./Components/CharacterSelect/CharacterGrid";
import Header from "./Components/Header/Header";
import Button from "./Components/CharacterSelect/Button";
import CharacterCardContainer from "./Components/CharacterCard/CharacterCardContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <CharacterGrid />
      <Button />
      <CharacterCardContainer />
    </div>
  );
}

export default App;
