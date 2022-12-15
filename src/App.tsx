import React, { useState } from "react";
import OurCustomHeader from "./components/Header/Header";
import Article from "./components/Article/Article";

import Display from "./components/Display/Display";
import Manipulator from "./components/Manipulator/Manipulator";

export type count = string | number | boolean;

function App() {
  const list = [1, 2, 3, 4, 5, 6];
  // const firstListElement = list[0]; // 1
  // const secondListElement = list[1]; // 2
  // const thirdListElement = list[2]; // 3
  const [firstListElement, secondListElement, thirdListElement, ...rest] = list;
  console.log(firstListElement);
  console.log(secondListElement);
  console.log(thirdListElement);
  console.log(rest);
  // 1wszy element useState: zmienna stanowa, pojemnik na dane, zmiana jej wartości powoduje przeładowanie się komponentu w którym została zainicjalizowana
  // 2gi element useState: funkcja aktualizująca zmienną stanową, zmienna stanowa i jej funkcja są nierozłączne

  const [count, setCount] = useState<count>(0);
  //count = 5 ŹLE
  // setCount(5)// DOBRZE
  //symulacja strzału do API
  const response = 15;
  const randomNumber = Math.random();
  const stringWithRandomNumberInIt = `lalalalala ${randomNumber} lalalalala ${response} lalalalala`;
  return (
    <div className="App">
      <OurCustomHeader />
      <Article text={stringWithRandomNumberInIt} />
      <Display responseValue={response} random={randomNumber} />
      <Manipulator />
      <input />
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

// HOOK - specjalna funkcja w React'cie (zapewniana przez samego Reacta lub paczki zewnętrzne), są w stanie wpiąć się "pod maskę" React'a i zarządzać wewnętrznymi procesami.
// ZASADY HOOKÓW:
// a) zaczynają się na use (np. useState, useEffect, useRef itd.)
// b) importowane z paczki React
// c) wywoływane TYLKO na top scope W komponentach FUNKCYJNYCH
// 1. useState - zarządzanie stanem

// stan isLoading = true
// isLoading to jest faktyczny stan
// const [isLoading, setIsLoading] = useState(true);
// if (isLoading === true) {
//   fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
//     // funkcja do przestawia stanu
//     setIsLoading(false);
//     return res.json();
//   });
// }

// if (isLoading === false) {
//   console.log("Pobieranie zakończyło się");
// } else {
//   console.log("Pobieranie trwa");
// }
