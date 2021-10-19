import { ADD_RECIPES, SELECTED_RECIPES } from "../actions/actionsType";

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
        case SELECTED_RECIPES:
            return{
                list: state.list,
                selectedRecipes: action.payload.data
            }
        default:
            return state
    }
}