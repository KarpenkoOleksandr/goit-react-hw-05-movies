import { useState } from "react";
import { SearchForm, Input, Button } from ".Form.styled";

export const Form = ({searchMovies}) => {
    const [query, setQuery] = useState('');
    const handleInputChange = evt => {
        setQuery(evt.target.value);
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        searchMovies(query.toLocaleLowerCase());
    };
    return (
        <SearchForm onSubmit={handleSubmit}>
            <Input
                type="text"
                name="query"
                autoFocus
                value={querty}
                onChange={handleInputChange} />
            <Button>Search</Button>
        </SearchForm>
    )
}