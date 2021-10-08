import React from 'react'
import { Form, Button, Col, Row} from 'react-bootstrap';
import '../css/App.css';

const New_Job = () => {
    return (
    <>
      <div className = "Container_Job">
        <Form className = "Job_Form">

          <Form.Group className="mb-3" controlId="FormCathegory">
            <Form.Label>Categoria</Form.Label>
            <select className="form-select" required>
            <option>Default Option</option>
            <option>Design UI</option>
            <option>Front-end</option>
            <option>Back-end</option>
            </select>
          </Form.Group>

          <fieldset>
            <Form.Group as={Row} className="mb-3" required>
              <Form.Label as="legend" column sm={2}>
                Tipo
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Tiempo completo"
                  name="formHorizontalRadios"
                  id="Fulltime"
                />
                <Form.Check
                  type="radio"
                  label="Medio tiempo"
                  name="formHorizontalRadios"
                  id="Partime"
                />
                <Form.Check
                  type="radio"
                  label="Freelance"
                  name="formHorizontalRadios"
                  id="Free"
                />
              </Col>
            </Form.Group>
          </fieldset>
          
          <Form.Group className="mb-3" controlId="FormCompany">
            <Form.Label>Compañia</Form.Label>
            <Form.Control type="text" required></Form.Control>
          </Form.Group>
        
          <Form.Group className="mb-3" controlId="FormURL">
            <Form.Label>URL</Form.Label>
            <Form.Control type="text" placeholder="URL" required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="FormPosition">
            <Form.Label>Posicion</Form.Label>
            <Form.Control type="text" placeholder="Posicion de la vacante" required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="FormLocation">
            <Form.Label>Localizacion</Form.Label>
            <Form.Control type="text" placeholder="Localizacion de la compañia" required/>
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
    </>)
}

export default New_Job