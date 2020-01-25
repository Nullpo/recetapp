import React, {useEffect, useState} from 'react';
import {Container, Row, Col, FormLabel, FormControl, FormGroup} from 'react-bootstrap';
import {getRecipes, getIngredients, createNewItem} from "./services";
import {listInitialState} from "./Lists/listInitState";
import {INGREDIENTS, RECIPES} from "./constants";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FoodLogger from "./Components/FoodLogger";
import Progress from "./Components/Progress";
import Library from "./Components/Library";
import CreateItem from "./Components/CreateItem";

const App = () => {
  const [fullRecipes, setFullRecipes] = useState(listInitialState(RECIPES));
  const [fullIngredients, setFullIngredients] = useState(listInitialState(INGREDIENTS));
  const [newItem, setNewItem] = useState();
  const [createReq, setCreateReq] = useState();
  const [createType, setCreateType] = useState(RECIPES);

  useEffect(() => {
    getRecipes(setFullRecipes);
  }, []);

  useEffect(() => {
    getIngredients(setFullIngredients)
  }, []);

  useEffect(() => {
    if (!createReq) return;
    const addRecipe = newItem =>
      setFullRecipes({...fullRecipes, [RECIPES]: [...fullRecipes[RECIPES], newItem]});

    const addIngredient = newItem =>
      setFullIngredients({...fullIngredients, [INGREDIENTS]: [...fullIngredients[INGREDIENTS], newItem]});

    const callback = createType === RECIPES ? addRecipe : addIngredient;
    createNewItem(createReq, callback);
  }, [createReq]);

  const create = (e) => {
    e.preventDefault();
    setCreateReq({
      type: createType,
      item: newItem
    })
  };

  return (
    <Container>
      <FoodLogger/>
      <Progress />
      <Library fullRecipes={fullRecipes} fullIngredients={fullIngredients} />
      <CreateItem
        create={create}
        createType={createType}
        newItem={newItem}
        onChangeItem={e => setNewItem(e.target.value)}
        onChangeType={e => setCreateType(e.target.value)} />
    </Container>
  );
};

export default App;
