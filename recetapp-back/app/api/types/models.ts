type IngredientAmmount = {
  cantidad: number;
  unidad: string
};

export type Ingredient = {
  pescado: string;
  calorias: number;
  proteinas: number;
  grasas: number;
  carbohidratos: number;
  cantidad: IngredientAmmount;
};

export type Recipe = {
  nombre: string;
  porciones: number;
  ingredientes: Ingredient[];
  preparacion: string[];
};
