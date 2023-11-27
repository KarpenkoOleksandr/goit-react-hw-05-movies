import { useEffect, useState } from "react";
import EditorList from "pages/EditorsList/EditorsList";
import { fetchTrending } from "services/Api";
import Loader from "components/Loader/Loader";

export const Home = () => {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    const fetchTrendingFilms = () => {
      setLoading(true);

      fetchTrending()
        .then(trendingFilms => {
          setFilms(trendingFilms);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchTrendingFilms();       
    }, []);
    
    return (
        <main>
            <h1>Trending today</h1>
            <EditorList films={films} />
            {loading && <Loader/>}
        </main>

    )
}