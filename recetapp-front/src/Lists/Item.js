import React from "react";
import {Table} from "react-bootstrap";

const Item = ({item, fields}) => {
  const itemIndex = Object.keys(item)
    .reduce((index, field) => ({...index, [field]:item[field]}) ,{});
  return <tr>{fields.map((field, i) => <td key={i}>{itemIndex[field]}</td>)}</tr>
};

export default Item;