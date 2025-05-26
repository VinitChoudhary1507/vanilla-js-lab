import React, { useState, useEffect, useRef, useReducer } from 'react';

// ✅ Moved reducer function to the top
function reducer(state, action) {
  if (action.type === 'new_name') {
    return {
      ...state,
      name: action.payload
    };
  }
  throw new Error('Unknown action.');
}

function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();
  const [inputValue, setInputValue] = useState('');
  const [state, dispatch] = useReducer(reducer, { name: 'Taylor', age: 42 });

  // ✅ Save previous count using useRef
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const prevCount = prevCountRef.current;

  const handleChangeEvent = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Current: {count}</h1>
      <h2>Previous: {prevCount}</h2>

      <h3>Name: {state.name}</h3>

      <input
        type="text"
        value={inputValue}
        onChange={handleChangeEvent}
        placeholder="Enter new name"
      />
      <button
        onClick={() =>
          dispatch({ type: 'new_name', payload: inputValue })
        }
      >
        Enter
      </button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
