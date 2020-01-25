import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import List from "./Lists/List";
import {getRecipes, getIngredients} from "./services";
import {listInitialState} from "./Lists/listInitState";
import {INGREDIENTS, RECIPES} from "./constants";

const App = () => {
  const [fullRecipes, setFullRecipes] = useState(listInitialState(RECIPES));
  const [fullIngredients, setFullIngredients] = useState(listInitialState(INGREDIENTS));

  useEffect(() => {
    getRecipes(setFullRecipes);
  }, []);

  useEffect(() => {
    getIngredients(setFullIngredients)
  }, []);


  return (
    <Container>
      <Row>
        <Col>
          <h2>HOY</h2>
          <p>comidas de hoy</p>
        </Col>
      </Row>
      <Row>
        <h2>Histórico</h2>
        <p>grafico de comidas pasadas</p>
      </Row>
      <Row>
        <Col>
          <h2>Recetas</h2>
          <List items={fullRecipes.recipes} fields={fullRecipes.fields} loaded={fullRecipes.loaded} />
        </Col>
        <Col>
          <h2>Ingredients</h2>
          <List items={fullIngredients.ingredients} fields={fullIngredients.fields} loaded={fullIngredients.loaded} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
