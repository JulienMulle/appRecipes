import axios from "axios"
import { useDispatch } from "react-redux";
import { addRecipes } from "../../redux/actions";

const URL_API = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "c0ef4429bd084f21b5f1c36dbe2eb701";
const MAX_RESULT = 30

export const useFetchRecipes = () => {
    const dispatch = useDispatch()

    const getAllRecipes = async() => {
        try {
        const response = await axios.get(URL_API, {
            params:{
                apiKey: API_KEY,
            number: MAX_RESULT
            }
        })
        
        dispatch(addRecipes(response.data.results))
        } catch(e) {
            console.error("Hello darkness, my old friends, erreur dans getAllRecipes", e)
            
        }
    }

    return { 
        getAllRecipes
    }
}