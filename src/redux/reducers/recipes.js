import { ADD_RECIPES } from "../actions/actionsType";

const initialState ={
    list: [],
    selectedRecipes: {}
}

export const recipes = (state = initialState, action) => {
    switch(action.type){
        case ADD_RECIPES:
            return{
                selectedRecipes : state.selectedRecipes,
                list: [...state.list, action.payload.data]
            }
        default:
            return state
    }
}