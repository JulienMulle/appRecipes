import { ADD_RECIPES, SELECTED_RECIPES } from "./actionsType";


export const addRecipes = (data) => ({
    type: ADD_RECIPES,
    payload:{
        data
    }
});

export const selectRecipe = (data) => ({
    type: SELECTED_RECIPES,
    payload:{
        data
    }
})