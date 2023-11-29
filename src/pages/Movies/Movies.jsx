import { useState } from "react";
import Loader from "components/Loader/Loader";
import EditorList from "pages/EditorsList/EditorsList";
import Form from "components/Form/Form";
import { fetchSearchByKeyword } from "services/Api";

export default function Movies () {
    const [searchFilms, setSearchFilms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [noMoviesText, setNoMoviesText] = useState(false);

  
  const searchMovies = async queryMovie => {
    setLoading(true);
      try {
        const resp = await fetchSearchByKeyword(queryMovie);
                setSearchFilms(resp);
        setNoMoviesText(resp.length === 0);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    
  };
    return (
        <main>
            <Form searchMovies={searchMovies} />
            {loading && <Loader />}
            {noMoviesText && (<p>There is no movies with this request. Please, try again</p>)}
            {searchFilms && <EditorList films={searchFilms} />}
        </main>
    )
}