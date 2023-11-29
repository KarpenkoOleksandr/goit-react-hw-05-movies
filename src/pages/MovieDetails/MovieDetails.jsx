import { useEffect, useRef, useState } from "react";
import { useParams, Outlet, Link, useLocation } from "react-router-dom";
import Loader from "components/Loader/Loader";
import { fetchMovieDetails } from "services/Api";
import { Container, List, ListInfo, LinkInfo, Button } from "./MovieDetails.styled";

export default function MovieDetails() {
    const { movieId } = useParams();
    const [movieInfo, setMovieInfo] = useState(null);
    const [loading, setLoading] = useState(false);
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

    useEffect(() => {
     const fetchMovieDetailsFilms = async () => {
       setLoading(true);

       try {
         const resp = await fetchMovieDetails(movieId);
         setMovieInfo(resp);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
     };
      
    fetchMovieDetailsFilms();
    }, [movieId]);

  if (!movieInfo) {
    return;
  }

  const {
    title,
    release_date,
    popularity,
    overview,
    genres,
    poster_path,
    original_title,
  } = movieInfo || {};    
    
    return (
    <>
      <Link to={backLink.current}>
        <Button type="button">Go back</Button>
      </Link>
      {loading && <Loader />}

      {movieInfo && (
        <Container>
          <img
            width="300px"
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : `https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700`
            }
            alt={original_title}
          />
          <div>
            <h1>
              {title} ({release_date.slice(0, 4)})
            </h1>
            <p>User score: {popularity}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <List>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </List>
          </div>
        </Container>
      )}
      <hr />
      <div>
        <h3>Additional information</h3>
        <ListInfo>
          <li>
            <LinkInfo to="cast">Cast</LinkInfo>
          </li>
          <li>
            <LinkInfo to="reviews">Reviews</LinkInfo>
          </li>
        </ListInfo>
        <hr />
        <Outlet />
      </div>
    </>        
    )
}