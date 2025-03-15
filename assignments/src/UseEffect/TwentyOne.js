import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

function TwentyOne() {

    const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        console.log('Component mounted!'); 
    
        return () => {
          console.log('Component unmounted!');
        };
      }, []);

      useEffect(() => {
        if (clickCount > 0) { 
          console.log(`Button clicked! Count: ${clickCount}`);
        }
      }, [clickCount]);


  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1>Two Independent Effects Example</h1>
    <p>Button clicked {clickCount} times</p>
    <Button variant="contained" disableElevation onClick={() => setClickCount(prev => prev + 1)}>
    Click Me
    </Button>  
    </div>
  );
};

export default TwentyOne;