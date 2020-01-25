export interface Parser {
    parse: (txt: string) => any;
}

export const recipeParser: Parser = require("./recipeParser");
export const ingredientsParser: Parser = require("./ingredientsParser");
