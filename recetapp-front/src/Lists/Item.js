import React from "react";
import {Table} from "react-bootstrap";

const Item = ({ingredient, fields}) => {
  const ingredientIndex = Object.keys(ingredient)
    .reduce((index, field) => ({...index, [field]:ingredient[field]}) ,{});
  return <tr>{fields.map((field, i) => <td key={i}>{ingredientIndex[field]}</td>)}</tr>
};

export default Item;