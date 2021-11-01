import sass from "sass";
import * as styles from "./App.scss";
import logo from "./logo.svg";
import "./App.css";

import Cards from "./components/Cards";
import Header from "./components/Header";

import { sendEmail } from "./helpers/helper";

function App() {
  const handleExport = async () => {
    try {
      await sendEmail('neerajsewanisrt8@gmail.com');
    } catch (err) {
      console.error("Error in export screenshot: \nStack trace", err);
    }
  };
  return (
    <div className="App">
      <Header handleExport={handleExport} />
      <Cards />
    </div>
  );
}

export default App;
