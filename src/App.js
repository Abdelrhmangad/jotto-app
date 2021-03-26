import React from "react";
import GuessedWords from "./guessedWord";
import Congrates from "./congrates";
import Input from "./input";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto App</h1>
        <Congrates success={true} />
        <GuessedWords
          guessedWords={[{ guessedWord: "gad", letterMatched: 3 }]}
        />
      </div>
    );
  }
}

export default App;
