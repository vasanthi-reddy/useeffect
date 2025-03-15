import React, { useEffect, useRef } from 'react'

function Seventeen() {

    const divRef = useRef(null);

    useEffect(() => {
        if (divRef.current) {
        const originalColor = divRef.current.style.backgroundColor;
        divRef.current.style.backgroundColor = 'lightblue'; 

        return () => {
            if (divRef.current) {
            divRef.current.style.backgroundColor = originalColor; 
            console.log('Component unmounted, background color reset.');
          };
        };
       ;}
        }, []);

  return (
    <div
    ref={divRef}
      style={{
        width: '500px',
        height: '500px',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p>Background color changes on mount!</p>

    </div>
  );
};

export default Seventeen