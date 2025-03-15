import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';


function Eleven() {
    const[users, setUsers] = useState([]);
    const[fetchData, setFetchData] = useState(false);

    useEffect(() => {
        if (fetchData) {
          fetch('https://jsonplaceholder.typicode.com/users') 
            .then((response) => response.json())
            .then((data) => {
              setUsers(data); 
              setFetchData(false); 
            })
            .catch((error) => console.error('Error fetching users:', error));
        }
      }, [fetchData]); 
    
      const handleFetchUsers = () => {
        setFetchData(true); 
      };
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>User Data Fetcher</h1>
      <Button variant="contained" color="success" onClick={handleFetchUsers}>
        Ftech Users
      </Button>

      {users.length > 0 && (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {users.map((user) => (
            <li key={user.id}>{user.name} ({user.email})</li>
          ))}
        </ul>
      )}
    </div>
   
  )
}

export default Eleven