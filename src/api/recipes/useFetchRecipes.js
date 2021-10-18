import axios from "axios"
// const {getAllRecipes} = useFetchRecipes()
const URL_API = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "c0ef4429bd084f21b5f1c36dbe2eb701";
export const useFetchRecipes = () => {

    const getAllRecipes = async() => {
        try {
        const response = await axios.get(URL_API, {
            apiKey: API_KEY,
        })
        console.log("response", response.data.results)
        } catch(e) {
            console.error("Hello darkness, my old friends, erreur dans getAllRecipes", e)
        }
    }

    return { 
        getAllRecipes
    }
}