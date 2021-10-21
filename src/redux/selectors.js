//recipes
export const getRecipesList = store => store.recipes.list;
export const getSelectedRecipe = store => store.recipes.selectedRecipe
export const getRecipeInstructions = store => store.recipes.recipeInstruction

//tasks
//Selectors: sélectionner une partie de notre store
export const getTasks = store => store.tasksList
//ou avec une function : export function getTask(store) {return store.taskList}
export const getCompletedTasks = sotre => sotre.tasksList.filter(task => task.completed)