import React, { useState, useEffect } from 'react'

function Eighteen() {

    const [data, setData] = useState([]);

    const fetchData = () => {
        console.log('Fetching data...');
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=5') 
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error('Error fetching data:', error));
      };

      useEffect(() => {
        fetchData(); 
    
        const interval = setInterval(() => {
          fetchData(); 
        }, 5000); 
    
        return () => {
          clearInterval(interval);
          console.log('Interval cleared on component unmount');
        };
      }, []); 

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Periodic API Data Fetcher</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {data.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong>
          </li>
        ))}
      </ul>
    </div>

  )
}

export default Eighteen;