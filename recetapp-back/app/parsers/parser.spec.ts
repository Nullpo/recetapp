import {ingredientsParser, recipeParser} from "./index";

const ingredientsValue = `nombre: pescado
cantidad: 2 gramos
grasas: 10
calorias: 10
carbohidratos: 20
proteinas: 10.3


nombre: rabioso
cantidad: 200 metros
calorias: 10
carbohidratos: 20
grasas: 10
proteinas: 10.3
`;

const recipeValue = `
Merengue.
Porciones: 3.5
Ingredientes:
 - Huevos -- 2.9 unidades
 - Almibar
 - Pequeña sandia

Preparacion:
 - Romper los huevos
 - Separar la clara
 - Batir la clara a punto de nieve
 - Mezclarla con el almibar.
 - Hornear la mezcla 20 minutos.
 - Colocarle una pequeña sandia, de 2 o 3 Kg.
`;



it("parse a correct text for ingredients", () => {

    const expected = {
        pescado: {
            calorias: 10,
            proteinas: 10.3,
            grasas: 10,
            carbohidratos: 20,
            cantidad: {cantidad: 2, unidad: "gramos"},
        },
        rabioso: {
            calorias: 10,
            proteinas: 10.3,
            grasas: 10,
            carbohidratos: 20,
            cantidad: {cantidad: 200, unidad: "metros"},
        },
    };

    const response = ingredientsParser.parse(ingredientsValue);
    expect(response).toStrictEqual(expected);
});

it("parse a correct text for a recipe", () => {
    const expected = {
        nombre: "Merengue.",
        porciones: 3,
        ingredientes: [
            {
                elemento: "Huevos",
                cantidad: {
                    valor: 2,
                    unidad: "unidades",
                },
            },
            {
                elemento: "Almibar",
                cantidad: null,
            },
            {
                elemento: "Pequeña sandia",
                cantidad: null,
            },
        ],
        preparacion: [
            "Romper los huevos",
            "Separar la clara",
            "Batir la clara a punto de nieve",
            "Mezclarla con el almibar.",
            "Hornear la mezcla 20 minutos.",
            "Colocarle una pequeña sandia, de 2 o 3 Kg.",
        ],
    };
    const response = recipeParser.parse(recipeValue);
    expect(response).toStrictEqual(expected);
});
