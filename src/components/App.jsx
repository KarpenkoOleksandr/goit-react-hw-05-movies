import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';

const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Home = lazy(() => import('pages/Home/Home'));
const MovieDetailes = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('pages/Movies/Movies'));

export default function App () {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movies/:movieId" element={<MovieDetailes/>}>
          <Route path="/movies/:movieId/cast" element={ <Cast/>} />
          <Route path="/movies/:movieId/reviews" element={ <Reviews/>} />
        </Route>
        <Route path="*" element={<Home/>} />
      </Route>
    </Routes>
  );
};
