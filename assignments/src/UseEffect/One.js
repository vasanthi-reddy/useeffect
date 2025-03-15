import React, { useEffect } from 'react';

function One() {

    useEffect(() => {
        document.title = "Welcome to My Page";
    }, []);

  return (
    <div style= {{textAlign: 'center', marginTop: '70px'}}>
      <h1>Welcome to My Page</h1>
      <h3>This is a simple component that updates the document title.</h3>
    </div>
  );
};

export default One;