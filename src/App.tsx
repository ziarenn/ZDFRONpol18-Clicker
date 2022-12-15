import React from "react";
import OurCustomHeader from "./components/Header/Header";
import Article from "./components/Article/Article";

import Display from "./components/Display/Display";
import Manipulator from "./components/Manipulator/Manipulator";
function App() {
  //symulacja strzału do API
  const response = 15;
  const randomNumber = Math.random();
  const stringWithRandomNumberInIt = `lalalalala ${randomNumber} lalalalala ${response} lalalalala`;
  return (
    <div className="App">
      <OurCustomHeader />
      <Article text={stringWithRandomNumberInIt}/>
      <Display responseValue={response} random={randomNumber} />
      <Manipulator />
    </div>
  );
}

export default App;


// 2. Przekaż tego stringa za pomocą propsów do Article.tsx i wyświetl go tam w nowym paragrafie.
// ReactDom.render(
//   Display({
//     responseValue: response,
//     random: randomNumber,
//   })
// );

// CHCE PRZEKAZAĆ JAKĄŚ WARTOŚĆ DO KOMPONENTU DZIECKA
// 1. Wpisuje propsa w odpowiedni komponent (nazwa propsa dowolna, wartość to zmienna ktorą chcemy przekazać)
// 2. Odbieram obiekt z propsami w parametrze komponentu do którego te propsy przekazałem.
// 3. Propsy ZAWSZE przychodzą w obiekcie, a sam obiekt jest parametrem. Z zasad TS wynika że parametry funkcji trzeba otypować. Do typowania obiektów używamy interfejsów. Tworzę interface dla moich propsów, będzie on nazywany według wzoru *nazwa komponentu* + Props. W samym interfejsie wypisuje wszystkie po kolei, jednocześnie podając typy ich wartości.
