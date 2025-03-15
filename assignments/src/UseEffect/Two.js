import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';


function Two() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Current count: {count}`);

    }, [count])

    const incrementCount = () => {
        setCount(count + 1);
    }

  return (
    <div style= {{textAlign: 'center', marginTop: '70px'}}>
    <h1>Count: {count}</h1>
    <Button variant="contained" disableElevation onClick={incrementCount}>
      Increment Count
    </Button>
    </div>
  )
}

export default Two