import { useState } from "react"
import { Button, Container, Modal } from "react-bootstrap"
import NewItemForm from "../../components/NewItemForm/NewItemForm"

const HomePage = () => {

    const [showModal, setShowModal] = useState(false)

    return (
        <div className="HomePage">

            <Container>

                <h1 className="mt-5">Inicio</h1>

                <hr />

                <Button
                    variant="dark"
                    onClick={() => setShowModal(true)}>
                    Abrir ventana modal
                </Button>

                <Modal show={showModal} onHide={() => setShowModal(false)} >
                    <Modal.Header closeButton>
                        <Modal.Title>Nuevo item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <NewItemForm />
                    </Modal.Body>
                </Modal>
            </Container>
        </div>
    )
}

export default HomePage