import {Col, FormControl, FormGroup, FormLabel, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {INGREDIENTS, RECIPES} from "../constants";
import Button from "react-bootstrap/Button";
import React from "react";

const CreateItem = ({createType, onChangeType, onChangeItem, newItem, create}) => {
  return <Row>
    <Col>
      <h2>Crear</h2>
      <Form>
        <FormGroup>
          <FormControl as="select" value={createType} onChange={onChangeType}>
            <option value={RECIPES}>Receta</option>
            <option value={INGREDIENTS}>Ingrediente</option>
          </FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel column={1}>Ingrese el nuevo item</FormLabel>
          <FormControl as="textarea" rows="5" value={newItem} onChange={onChangeItem} />
        </FormGroup>
        <Button variant="outline-dark" type="submit" onClick={create}>
          Crear
        </Button>
      </Form>
    </Col>
  </Row>
};

export default CreateItem;