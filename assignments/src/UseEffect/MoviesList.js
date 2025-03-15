import React, {useState } from 'react';
import Movies from './Movies';

const MoviesList=() => {
    const movies = [
        'The God Father',
        'Ghost',
        'Fida',
        'Godavari',
        'Titanic'
    ];

    console.log('Parent component rendered');
  return (
    <div>
        <h1>MoviesList</h1>
        <Movies movies={movies} />
    </div>
  )
}

export default MoviesList;