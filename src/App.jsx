import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import './App.css';

function App() {
  const movies = [
    {
      id: 1,
      title: 'Inception',
      rating: 8.8,
      description: 'A mind-bending thriller where dream invasion is possible.',
      trailerLink: 'https://www.youtube.com/embed/YoHD9XEInc0',
      imgSrc: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
        </Routes>
        <Link to="/"><button>Back</button></Link>
      </div>
    </Router>
  );
}

export default App;
