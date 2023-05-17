import './App.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import AddModal from './modal/Modal';
import EditModal from './modal/EditModal';

function App() {

  const [show, setShow] = useState(false);
  const [eshow, seteShow] = useState(false);


  let localData = JSON.parse(localStorage.getItem("Data"))

  const handleAdd = () => {
    setShow(true)
  }

  const handleDelete = (id) => {
    let Ddata = localData.filter((l) => l.id !== id)
    localStorage.setItem("Data", JSON.stringify(Ddata))
    window.location.reload();
  }

  const handleEdit = (data) => {
    seteShow(true)
  }

  return (
    <>
      <AddModal show={show} setShow={setShow} />
      <EditModal show={eshow} setShow={seteShow} />
      <div className="App">
        <h1>TO DO LIST</h1>
        <Button variant="primary" onClick={() => handleAdd()}>Add Items</Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Item 1</th>
              <th>Item 2</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              localData.map((d,i) => {
                return (
                  <tr key={i}>
                    <td>{d.title}</td>
                    <td>{d.item1}</td>
                    <td>{d.item2}</td>
                    <td><Button onClick={() => handleEdit(d)} variant="primary">Edit</Button> <Button onClick={() => handleDelete(d.id)} variant="danger">Delete</Button></td>
                  </tr>
                )
              })  
            }
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default App;
