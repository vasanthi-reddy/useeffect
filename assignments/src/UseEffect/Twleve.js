import React, { useState, useEffect } from 'react';

function Twleve() {

    const[searchTerm, setSearchTerm] = useState('');
    const[pageNumber, setPageNumber] = useState(1);
    const [results, setResults] = useState([]);

    useEffect(() => {
        if(searchTerm.trim() === '') return;
        console.log(`Fetching data fro: ${searchTerm}, page: ${pageNumber}`);

    const url = `https://jsonplaceholder.typicode.com/users?_limit=5&_page=${pageNumber}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setResults(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [searchTerm, pageNumber]); 

  const nextPage = () => {
    setPageNumber((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setPageNumber((prevPage) => Math.max(prevPage - 1, 1)); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Search with Pagination</h1>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter search term"
        style={{ padding: '8px', marginBottom: '10px' }}
      />

      <div style={{ margin: '20px 0' }}>
        <button onClick={prevPage} disabled={pageNumber === 1}>Previous</button>
        <span style={{ margin: '0 10px' }}>Page: {pageNumber}</span>
        <button onClick={nextPage}>Next</button>
      </div>

      {results.length > 0 ? (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {results.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        searchTerm && <p>No results found.</p>
      )}
    </div>
  )
}

export default Twleve