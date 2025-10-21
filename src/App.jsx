import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);
  const addOne = () => {
    setCount(prev => prev + 1);
  };

  const add100 = () => {
    setCount(prev => prev + 100);
  };

  const increase = () => {
    setCount(prev => {
      const newCount = prev + 1; // First add 1
      const shouldAdd100 = newCount % 5 === 0; // Check if updated count is divisible by 5

      return shouldAdd100 ? newCount + 100 : newCount; // Add 100 if divisible by 5, otherwise just return the incremented value
    });
  };

  return (
    <div className="App">
      <h1 className="App__title">{`Count: ${count}`}</h1>
      <button type="button" className="App__add-one" onClick={addOne}>
        Add 1
      </button>
      <button type="button" className="App__add-100" onClick={add100}>
        Add 100
      </button>
      <button type="button" className="App__increase" onClick={increase}>
        Increase
      </button>
    </div>
  );
};
