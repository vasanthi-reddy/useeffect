import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

const SixteenChild = ({ parentMessage, updateParent}) => {

    const [childClicked, setChildClicked] = useState(false); 

    useEffect(() => {
        if (childClicked) {
          updateParent(); 
        }
      }, [childClicked, updateParent]); 

  return (
    <div style={{ marginTop: '20px' }}>
    <h2>Child Component</h2>
    <p>Received from Parent: {parentMessage}</p>
    <Button variant="contained" color="success" onClick={() => setChildClicked(true)}>
        Click to Update Parent
    </Button>
  </div>
  )
}

export default SixteenChild