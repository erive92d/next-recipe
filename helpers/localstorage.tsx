import { RecipeProps } from "@/lib/props";

export const saveMovie = (recipe: RecipeProps[]) => {
    if (recipe.length) {
        localStorage.setItem("recipe", JSON.stringify(recipe))
    } else {
        localStorage.removeItem("saved_ids");
    }
}

export const getMovies = () => {
    const grabFromLocalStorage: string | null = localStorage.getItem("recipe")
    if (!grabFromLocalStorage) {
        return []
    }
    return JSON.parse(grabFromLocalStorage)
}