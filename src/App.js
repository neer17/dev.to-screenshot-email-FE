import logo from "./logo.svg";
import "./App.css";
import "./scss/cards.scss";
import "./scss/header.scss";
import Cards from "./components/Cards";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
    </div>
  );
}

export default App;
