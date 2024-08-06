import { useState } from "react"
import { Button, Form, Row, Col } from "react-bootstrap"
import { GENRES } from "../../consts/movie-consts"

const NewItemForm = () => {

    const [movieData, setMovieData] = useState({
        title: '',
        director: '',
        rating: 0,
        hasOscars: false,
        services: [''],
        genre: ''
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setMovieData({ ...movieData, [name]: value })
    }

    const handleServiceChange = (event, currentIndex) => {

        const { value } = event.target

        const servicesCopy = [...movieData.services]
        servicesCopy[currentIndex] = value

        setMovieData({ ...movieData, services: servicesCopy })
    }

    const addNewService = () => {
        setMovieData({ ...movieData, services: [...movieData.services, ''] })
    }


    return (
        <div className="NewItemForm">

            <Form>

                <Form.Group className="mb-3" controlId="titleField">
                    <Form.Label>Título de la película</Form.Label>
                    <Form.Control type="text" value={movieData.title} onChange={handleInputChange} name="title" />
                </Form.Group>

                <Row>

                    <Col>
                        <Form.Group className="mb-3" controlId="directorFiled">
                            <Form.Label>Director/a</Form.Label>
                            <Form.Control type="text" value={movieData.director} onChange={handleInputChange} name="director" />
                        </Form.Group>

                    </Col>

                    <Col>

                        <Form.Group className="mb-3" controlId="ratingFiled">
                            <Form.Label>Puntuación IMDB</Form.Label>
                            <Form.Control type="number" value={movieData.rating} onChange={handleInputChange} name="rating" />
                        </Form.Group>

                    </Col>

                    <Col>

                        <Form.Group className="mb-3" controlId="genreField">

                            <Form.Label>Género</Form.Label>
                            <Form.Select aria-label="list example" name="genre" value={movieData.genre} onChange={handleInputChange}>
                                <option>Escoge uno</option>
                                {
                                    GENRES.map(eachGenre => (
                                        <option value={eachGenre.value} key={eachGenre.value}>{eachGenre.name}</option>
                                    ))
                                }
                            </Form.Select>

                        </Form.Group>


                    </Col>


                </Row>

                <Form.Group className="mb-3" controlId={`services`}>

                    <Form.Label>Servicios</Form.Label>
                    {
                        movieData.services.map((eachService, idx) => {
                            return (
                                <Form.Control onChange={e => handleServiceChange(e, idx)} value={movieData.services[idx]} type="text" className="mb-3" />
                            )
                        })
                    }

                    <Button variant="dark" size="sm" onClick={addNewService}>Nuevo servicio</Button>
                </Form.Group>


            </Form>

        </div>
    )
}

export default NewItemForm