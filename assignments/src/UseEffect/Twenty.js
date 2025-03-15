import React, { useState, useEffect } from 'react'

function Twenty() {

    const [isDarkMode, setIsDarkMode] = useState(false); 

  useEffect(() => {
    if (isDarkMode) {
      document.body.style.backgroundColor = '#333';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }

    return () => {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    };
  }, [isDarkMode]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Dark Mode Toggle</h1>
      <label style={{ fontSize: '18px' }}>
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={() => setIsDarkMode(!isDarkMode)} 
        />
        {' '}
        Enable Dark Mode
      </label>
    </div>
  )
}

export default Twenty;