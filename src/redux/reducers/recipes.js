import { ADD_RECIPES, SELECTED_RECIPE,RECIPE_INSTRUCTION } from "../actions/actionsType";

const initialState ={
    list: [],
    selectedRecipes: {}
}

export const recipes = (state = initialState, action) => {
    switch(action.type){
        case ADD_RECIPES:
            return{
                list: [...state.list, ...action.payload.data],
                selectedRecipes: state.selectedRecipes,
            }
        case SELECTED_RECIPE:
            return{
                list: state.list,
                selectedRecipe: action.payload.data
            }
        case RECIPE_INSTRUCTION:
            return{
                list: state.list,
                selectedRecipes: action.payload.data
            }
        default:
            return state
    }
}