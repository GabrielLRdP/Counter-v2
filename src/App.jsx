import { useState } from "react";
import "./components/Counter.css";
import "./App.css";
import Counter from "./components/Counter.jsx";

function App() {
  const handleCount = (num, index) => {
    setCount(count[index] + num);
  };
  const [count, setCount] = useState([0]);
  const countTab = count.map((element, index) => {
    return (
      <Counter
        handleCount={handleCount}
        count={element}
        key={index}
        index={index}
      />
    );
  });

  return (
    <>
      <div className="counters">{countTab}</div>
      <button
        onClick={() => {
          let newCount = [...count];
          newCount.push([0]);
          setCount(newCount);
        }}
      >
        Ajouter un compteur
      </button>
      <button
        onClick={() => {
          let newCount = [...count];
          newCount.pop();
          setCount(newCount);
        }}
      >
        Retirer un compteur
      </button>
    </>
  );
}

export default App;
