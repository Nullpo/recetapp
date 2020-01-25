import axios from "axios";
import config from "../config";
import {INGREDIENTS, RECIPES} from "../constants";

export const getRecipes = async (callback) =>
  axios(`${config.apiUrl}/${RECIPES}`)
    .then(result => callback({...result.data, loaded: true}));

export const getIngredients = async (callback) =>
  axios(`${config.apiUrl}/${INGREDIENTS}`)
    .then(result => callback({...result.data, loaded: true}));