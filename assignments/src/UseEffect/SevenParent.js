import React, { useState } from 'react';
import Button from '@mui/material/Button';
import SevenChild from './SevenChild';


function SevenParent() {

    const[count, setCount] = useState(0);

  return (
    <div>
    <h1> Parent Component</h1>
    <Button variant="contained" disableElevation onClick={() => setCount(count + 1)}>
      Disable elevation
    </Button>
    <h4>Current Count: {count}</h4>
    <SevenChild value={count}/>
    </div>
  )
}

export default SevenParent;