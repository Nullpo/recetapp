import React from "react";
import Item from './Item';
import {Table} from "react-bootstrap";
const List = ({ingredients, fields}) => {
  return <Table striped bordered hover>
    <thead>
    <tr>
      {fields.map((field, i) => <th key={i}>{field}</th>)}
    </tr>
    </thead>
    <tbody>
    {ingredients.map(ingredient => <Item key={ingredient.id} ingredient={ingredient} fields={fields} />)}
    </tbody>
  </Table>
};

export default List;