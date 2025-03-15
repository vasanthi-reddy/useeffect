import React from 'react';
import useFetch from './useFetch';

function TwentyFive() {

    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=5');

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Custom Hook Fetch Example</h1>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      
      {data && (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {data.map((item) => (
            <li key={item.id}><strong>{item.title}</strong></li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TwentyFive