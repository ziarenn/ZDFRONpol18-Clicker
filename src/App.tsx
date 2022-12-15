import React from "react";
import OurCustomHeader from "./components/Header/Header";
import Article from "./components/Article/Article";

import Display from "./components/Display/Display";
import Manipulator from "./components/Manipulator/Manipulator";
function App() {
  //symulacja strzału do API
  const response = 15;
  const randomNumber = Math.random();
  return (
    <div className="App">
      <OurCustomHeader />
      <Article />
      <Display responseValue={response} random={randomNumber} />
      <Manipulator />
    </div>
  );
}

export default App;

// ReactDom.render(
//   Display({
//     responseValue: response,
//     random: randomNumber,
//   })
// );
