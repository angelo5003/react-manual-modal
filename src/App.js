import React, {useState, useEffect} from 'react';

import './App.css';



const countInitial = () => {
  console.log('run function')
  return 4;
};

function App() {
  useEffect(() => {
    console.log('useffect');
  }, []);

  const [count, setCount] = useState(() => countInitial());
  const [theme, setTheme] = useState('blue');

  const decrementCount = () => {
    setCount(count - 1)
  };

  const incrementCount = () => {
    setCount(count + 1)
    setTheme('red')
  };

 
  
  return (
    <div className='App'>
        
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <span>{theme}</span>
        <button onClick={incrementCount}>+</button>
        
    </div>
  );
}

export default App;
