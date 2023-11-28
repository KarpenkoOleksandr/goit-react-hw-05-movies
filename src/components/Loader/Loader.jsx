import { Dna } from "react-loader-spinner";
import { Container } from "./Loader.styled";

export default function Loader () {
    return (
        <Container>
            <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                 wrapperStyle={{}}
                wrapperClass="dna-wrapper"/>
        </Container>
    )
}