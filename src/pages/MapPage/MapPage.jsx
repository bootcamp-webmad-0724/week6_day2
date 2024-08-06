import { Container } from "react-bootstrap"
import CustomMap from "../../components/CustomMap/CustomMap"

const MapPage = () => {

    return (
        <Container className="mt-5">
            <h1>Mapa</h1>
            <hr />
            <CustomMap />
        </Container>
    )
}

export default MapPage