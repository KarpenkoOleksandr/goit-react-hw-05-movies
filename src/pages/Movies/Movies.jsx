import { useEffect, useState } from "react";
import Loader from "components/Loader/Loader";
import EditorList from "pages/EditorsList/EditorsList";
import Form from "components/Form/Form";
import { fetchSearchByKeyword } from "services/Api";
import { useSearchParams } from "react-router-dom";

export default function Movies () {
    const [searchFilms, setSearchFilms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const movieName = searchParams.get('query') || '';

    const updateQueryString = query => {
    const nextParams = query !== '' && { query };
    setSearchParams(nextParams);
  };

  useEffect(()=> {
  const searchMovies = async () => {
    setLoading(true);
      try {
        const resp = await fetchSearchByKeyword(movieName);
        setSearchFilms(resp);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    
  };
    searchMovies();
    }, [movieName])
    return (
        <main>
            <Form searchMovies={updateQueryString} />
            {loading ? (<Loader />) :
            searchFilms.length === 0 && movieName ? (<p>There is no movies with this request. Please, try again</p>) :
            (<EditorList films={searchFilms} />)}
        </main>
    )
}