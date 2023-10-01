import { useState } from 'react';
import css from './App.module.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './Home/Home';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Movies } from './Movies/Movies';
import { Reviews } from './Reviews/Reviews';
import { Cast } from './Cast/Cast';

export const App = () => {
  const Navigation = () => {
    return (
      <nav className={css.nav}>
        <ul>
          <li>
            <Link className={css['nav_link']} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={css['nav_link']} to="/movies">
              Movies
            </Link>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
