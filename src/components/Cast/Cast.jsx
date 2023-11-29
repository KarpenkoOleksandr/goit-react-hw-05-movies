import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchActors } from "services/Api";
import Loader from "components/Loader/Loader";
import { List, Text } from "./Cast.styled";

export default function Cast () {
    const { movieId } = useParams();
    const [actors, setActors] = useState([]);
    const [loading, setLoadig] = useState(false);

    useEffect(() => {
        const onActorsOfMovie = () => {
            setLoadig(true);

            fetchActors(movieId).then(actors => { setActors(actors); }).catch(error => { console.log(error); }).finally(() => { setLoadig(false); });
        };
        onActorsOfMovie();
    }, [movieId]);

    return (
        <div>
            {loading && <Loader />}
            <List>
                {actors.map(({ id, profile_path, original_name, name, character }) => (
                    <li key={id}>
                        <img width="200px" src={profile_path
                            ? `https://image.tmdb.org/t/p/w500${profile_path}`
                            : `https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700`} alt={original_name} />
                        <Text>{name}</Text>
                        <Text>Character: {character}</Text>
                 </li>   
                ))}
            </List>
        </div>
    )
}