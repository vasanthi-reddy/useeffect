import React, { useState, useEffect } from 'react'

function Eight() {
    const [seconds, setSeconds] = useState(10); 

    useEffect(() => {
      console.log('Timer started');
  
     
      const timer = setInterval(() => {
        setSeconds(prevSeconds => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else {
            clearInterval(timer); 
            return 0;
          }
        });
      }, 1000); 
  
      return () => {
        clearInterval(timer);
        console.log('Timer cleaned up');
      };
    }, []);
  
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Countdown Timer</h1>
      <p>{seconds} seconds remaining</p>
    </div>
  )
}

export default Eight