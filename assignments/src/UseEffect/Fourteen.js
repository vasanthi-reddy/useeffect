import React, { useState, useEffect } from 'react'

function Fourteen() {
    const [inputValue, setInputValue] = useState(''); 

  useEffect(() => {
    const savedValue = localStorage.getItem('userInput');
    if (savedValue) {
      setInputValue(savedValue); 
    }
  }, []); 
  
  useEffect(() => {
    localStorage.setItem('userInput', inputValue);
  }, [inputValue]); 

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>LocalStorage Sync Input</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
        style={{ padding: '12px', width: '250px', borderBlockColor: 'pink' }}
      />
      <p>Saved Value: {inputValue}</p>
    </div>
  );
};
    

export default Fourteen;