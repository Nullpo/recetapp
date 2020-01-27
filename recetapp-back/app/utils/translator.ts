import {NoTranslationAvailableError} from "./errors";

export const ingredientTranslations = {
  carbohidratos: "carbs",
  calorias: "calories",
  proteinas: "proteins",
  grasas: "fat",
  unidad: "units",
};

const isObjWithProps = obj => !!obj && !!Object.keys(obj).length && typeof obj === "object" && !Array.isArray(obj);

export const translateObjectKeys = (obj, tr) => {
  const keys = Object.keys(obj);

  return keys.reduce((result, key) => {
    const translatedKey = tr[key];
    if (!translatedKey) throw new NoTranslationAvailableError("ingredients", obj);
    if (isObjWithProps(obj[key])) {
      return {...result, [translatedKey]: translateObjectKeys(obj[key], tr)};
    } else {
      return {...result, [translatedKey]: obj[key]};
    }
  }, {});
};

