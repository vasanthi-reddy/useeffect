import React from 'react'

const Movies = ({movies}) => {
    
  return (
    <div>
        Movies
        <ul>
            {movies.map((movie, index) => (
                <li key={index}>{movie}</li>
            )
            )}
        </ul>
    </div>
  );
};

export default Movies;