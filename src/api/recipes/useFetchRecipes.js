import axios from "axios"
import { useDispatch } from "react-redux";
import { addRecipes, selectRecipe } from "../../redux/actions";
import { REACT_APP_KEY } from "@env"

const URL_API = "https://api.spoonacular.com/recipes";
const API_KEY = REACT_APP_KEY;

const MAX_RESULT = 30

export const useFetchRecipes = () => {
    const dispatch = useDispatch()

    // requete pour acceder à toutes les recettes
    const getAllRecipes = async(page) => {
        try {
        const response = await axios.get(`${URL_API}/complexSearch`, {
            params:{
                apiKey: API_KEY,
                number: MAX_RESULT,
                offset: page * MAX_RESULT
            }
        })
        
        dispatch(addRecipes(response.data.results))
        } catch(e) {
                 console.error("erreur dans getAllRecipes", e)
        }
    }

    //requete pour acceder aux details des recettes
    const getRecipesById = async(id) => {
        try {
            const response = await axios.get(`${URL_API}/${id}/information`, {
                params:{
                    apiKey: API_KEY,
                }
            })
        dispatch(selectRecipe(response.data))
        } catch(e) {
            console.error("erreur dans selectRecipes", e)
        }
    }

    return { 
        getAllRecipes,
        getRecipesById
    }
}