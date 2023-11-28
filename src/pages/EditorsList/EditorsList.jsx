import { useLocation } from "react-router-dom";
import { List, Item, MovieLink } from "./EditorsList.styled";

export default function EditorList ({ films }) {
    const location = useLocation();

    return (
        <List>
            {films.map(film => (
                <Item key={film.id}>
                    <MovieLink to={`/movies/${film.id}`} state={{ from: location }}>
                        {film.title}
                    </MovieLink>
                </Item>
            ))}
        </List>
    )
};

