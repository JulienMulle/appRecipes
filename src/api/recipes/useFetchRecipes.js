import axios from "axios"
import { useDispatch } from "react-redux";
import { addRecipes, selectRecipes } from "../../redux/actions";


const URL_API = "https://api.spoonacular.com/recipes";
const API_KEY = "c0ef4429bd084f21b5f1c36dbe2eb701";
//const {REACT_APP_KEY} = process.env
const MAX_RESULT = 15

export const useFetchRecipes = () => {
    const dispatch = useDispatch()

    // requete pour acceder à toutes les recettes
    const getAllRecipes = async() => {
        try {
        const response = await axios.get(`${URL_API}/complexSearch`, {
            params:{
                apiKey: API_KEY,
            number: MAX_RESULT
            }
        })
        
        dispatch(addRecipes(response.data))
        } catch(e) {
                 
        }
    }

    //requete pour acceder aux details des recettes
    const getRecipesById = async(id) => {
        try {
            const response = await axios.get(`${URL_API}/${id}/information`, {
                params:{
                    apiKey: API_KEY,
                number: MAX_RESULT
                }
            })
        dispatch(selectRecipes(response.data))
        } catch(e) {
            console.error()
        }
    }

    return { 
        getAllRecipes,
        getRecipesById
    }
}