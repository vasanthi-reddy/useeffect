import React, { useState } from 'react';
import SixteenChild from './SixteenChild';

function SixteenParent() {

  const [parentState, setParentState] = useState('Hello from Parent!'); 

  const updateParentState = () => {
    setParentState('Updated by Child!');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1>Parent Component</h1>
    <p>Parent State: {parentState}</p>

    <SixteenChild parentMessage={parentState} updateParent={updateParentState} />
  </div>
  )
}

export default SixteenParent;