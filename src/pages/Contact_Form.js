import React,{Component,useState}from "react"
import { Form, Button, Col, Row} from 'react-bootstrap';
import '../css/App.css';
import Swal from 'sweetalert2';
import airplane from "../images/airplane.svg"

class Contact_Form extends React.Component{
render(){
  function notify(){
    Swal.fire('Bienvenido',
              'Usuario',
              'success')
  }

 return(
    <div className = "Container_Contact">
    <Form className = "Contact_Form"  onSubmit={notify}>
      <img src={airplane} alt="" width="50px" height="50px"/> <span className="span-text">Contactanos</span>
    <Form.Group className="mb-3 pt-3" controlId="FormCompany">
        <Form.Label>Nombres</Form.Label>
        <Form.Control type="text" required></Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="FormCompany">
        <Form.Label>Apellidos</Form.Label>
        <Form.Control type="text" required></Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="FormCompany">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" required></Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="FormCompany">
        <Form.Label>Compañia</Form.Label>
        <Form.Control type="text" required></Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="FormCompany">
        <Form.Label>Tema del problema (Opcional)</Form.Label>
        <Form.Control type="text"></Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control as="textarea" rows={3} required/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

</div>
 )
}
}

export default Contact_Form