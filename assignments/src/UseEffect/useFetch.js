import React, { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 
  
    useEffect(() => {
      const controller = new AbortController(); 
      const signal = controller.signal;
  
      const fetchData = async () => {
        try {
          const response = await fetch(url, { signal });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const json = await response.json();
          setData(json); 
          setLoading(false);
        } catch (err) {
          if (err.name === 'AbortError') {
            console.log('Fetch aborted');
          } else {
            setError(err.message); 
            setLoading(false);
          }
        }
      };
  
      fetchData();

      return () => controller.abort();
  
    }, [url]); 
  
    return { data, loading, error };
  };
  
  export default useFetch;