import React, {useEffect, useRef } from 'react'

function Thriteen() {
    const inputRef = useRef(null); 

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []); 

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Auto Focus Input Field</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type here..."
        style={{ padding: '8px', width: '200px', borderBlockColor: 'pink' }}
      />
    </div>
  );
};


export default Thriteen;