import React, { useState, useEffect } from 'react'

function TwentyFour() {

    const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching data...');

    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        setData(data); 
        setLoading(false); 
      })
      .catch((error) => {
        setError(error.message); 
        setLoading(false);
      });
  }, []);


  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1>API Data Fetch on Mount</h1>

    {loading && <p>Loading...</p>}
    {error && <p>Error: {error}</p>}

    {!loading && !error && (
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {data.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong>
          </li>
        ))}
      </ul>
    )}
    </div>
  )
}

export default TwentyFour;