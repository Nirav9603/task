import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddModal({ show, setShow }) {

    const handleClose = () => setShow(false);

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = {
            id: Math.random(),
            title: event.target.title.value,
            item1: event.target.item1.value,
            item2: event.target.item2.value
        }

        let localData = JSON.parse(localStorage.getItem("Data"))

        if(localData === null){
            localStorage.setItem("Data", JSON.stringify([formData]))
        }else{ 
            localData.push(formData)
            localStorage.setItem("Data", JSON.stringify(localData))
        }
        handleClose()
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Buy Milk"
                                name="title"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Item 1</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Store"
                                name="item1"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Item 2</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Mart"
                                name="item2"
                            />
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button type='submit' variant="primary">
                                Add
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AddModal;