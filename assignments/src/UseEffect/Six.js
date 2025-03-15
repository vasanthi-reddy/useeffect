import React, { useState, useEffect } from 'react';

const Six = () => {
  const [inputValue, setInputValue] = useState(''); 
  
  useEffect(() => {
    if (inputValue.trim() !== '') { 
      console.log(`Input value changed to: ${inputValue}`);
    }
  }, [inputValue]); 

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Conditional Logger</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
};

export default Six;