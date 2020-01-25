import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import List from "./Lists/List";

const ingredients = [{id: 'pepe', uno: 1, dos:2, tres:3, cuatro:4}];
const ingredientFields = ['uno', 'dos', 'tres'];

const recipes = [{id:1, pepe: 'pepe', lalo: 'lalo'}];
const recipeFields = ['pepe', 'lalo'];

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h2>HOY</h2>
          comidas de hoy
        </Col>
      </Row>
      <Row>
        <h2>Histórico</h2>
        grafico de comidas pasadas
      </Row>
      <Row>
        <Col>
          <h2>Recetas</h2>
          <List ingredients={recipes} fields={recipeFields} />
        </Col>
        <Col>
          <h2>Ingredients</h2>
          <List ingredients={ingredients} fields={ingredientFields} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
