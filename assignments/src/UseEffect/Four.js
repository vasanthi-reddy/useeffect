import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function Four() {
    const [isLoading, setIsLoading] = useState('false');
    const [startLoading, setStartLoading] = useState('false'); 

    useEffect(() => {
        let timer;
        if (startLoading) {
          setIsLoading(true); 
          
          timer = setInterval(() => {
            setIsLoading(false); 
            setStartLoading(false); 
          }, 2000);
        }
       
        return () => clearTimeout(timer);
      }, [startLoading]);

    const handleClick = () => {
       setStartLoading(true);
    };

  return (
    <div style= {{textAlign: 'center', marginTop: '70px'}}>
    <h1>Start the update after delay</h1>
    {isLoading ? <p>Loading...</p> : <p>Content Loaded!</p>}
    <Button variant="contained" color="success" 
    onClick={handleClick} disabled={isLoading}>
    {isLoading ? 'Loading...' : 'Click Me'}
    </Button>
    

    </div>
  )
}

export default Four;