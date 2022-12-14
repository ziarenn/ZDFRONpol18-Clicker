import React from "react";
import OurCustomHeader from "./components/Header/Header";
import Article from "./components/Article/Article";
import Display from "./components/Display/Display";
import Manipulator from "./components/Manipulator/Manipulator";
function App() {
  return (
    <div className="App">
      <OurCustomHeader />
      <Article />
      <Display />
      <Manipulator />
    </div>
  );
}

export default App;

// 1. Napisz komponent Article.tsx, w środku wyświetlaj tag article, w środku tagu article h3 z jakimś tekstem, pod h3 nadal w article tag p z jakimś tekstem. Sam komponent Article.tsx wyświetlaj w App.tsx
// 2. Stwórz komponent Display.tsx. W nim wyświetlaj spana z jakąś liczbą oraz paragraph z jakims tekstem. Wyświetl Display.tsx w App.tsx
// 3. Stwórz komponent Manipulator.tsx, w którym wyświetlisz 2 buttony, jeden z tekstem "+" drugi z tekstem "-". Wyświetl Manipulator.tsx w App.tsx
