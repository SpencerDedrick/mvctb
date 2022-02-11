import "./App.css";
import CharacterGrid from "./Components/CharacterSelect/CharacterGrid";
import Header from "./Components/Header/Header";
import Button from "./Components/CharacterSelect/Button";
import CharacterCard from "./Components/CharacterCard/CharacterCard";

function App() {
  return (
    <div className="App">
      <Header />
      <CharacterGrid />
      <Button />
      <CharacterCard />
    </div>
  );
}

export default App;
