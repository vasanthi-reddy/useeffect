import React, { useEffect } from 'react'

function Fiffteen() {

    const handleScroll = () => {
        console.log('Scroll Y:', window.scrollY); 
        console.log('Scroll X:', window.scrollX); 
      };

      useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); 
            console.log('Scroll event listener removed');
          };
        }, []); 

  return (
    <div style={{ height: '200vh', padding: '20px' }}>
      <h1>Scroll to See Scroll Position in Console</h1>
      <p>Keep scrolling down and check the console log for updates.</p>
    </div>
  )
}

export default Fiffteen