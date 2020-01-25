import React from "react";
import Item from './Item';
import {Table} from "react-bootstrap";

const ItemsTable = ({fields, items}) => {
  return <Table striped bordered hover>
    <thead>
      <tr>
        {fields.map((field, i) => <th key={i}>{field}</th>)}
      </tr>
    </thead>
    <tbody>
      {items.map(item => <Item key={item.id} item={item} fields={fields} />)}
    </tbody>
  </Table>
};

const NoList = ({items, fields, loaded}) => {
  if (loaded && !items || !fields) return 'La lista no se pudo imprimir.';
  if (loaded && !fields.length) return 'No se enviaron campos.';
  if (loaded && !items.length) return 'No hay elementos en la lista.';
  return 'Cargando elementos en la lista'
};

const List = ({items, fields, loaded}) => {
  return items?.length && fields?.length ?
    <ItemsTable fields={fields} items={items} /> :
    <NoList items={items} fields={fields} loaded={loaded} />
};

export default List;