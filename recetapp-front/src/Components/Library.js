import {Col, Row} from "react-bootstrap";
import List from "../Lists/List";
import React from "react";

const Library = ({fullRecipes, fullIngredients}) => {
  return <Row>
    <Col>
      <h2>Recetas</h2>
      <List items={fullRecipes.recipes} fields={fullRecipes.fields} loaded={fullRecipes.loaded} />
    </Col>
    <Col>
      <h2>Ingredients</h2>
      <List items={fullIngredients.ingredients} fields={fullIngredients.fields} loaded={fullIngredients.loaded} />
    </Col>
  </Row>
};

export default Library;