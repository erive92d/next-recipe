
export const getSeaFood = async () => {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
        return res
    } catch (error) {
        throw new Error("Failed to fetch")
    }
}

export const getCategories = async () => {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
        return await res.json()
    } catch (error) {
        throw new Error("Failed to fetch")
    }
}

export const searchByCategory = async (cat: string) => {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
        const data = await res.json()
        return data
    } catch (error) {
        throw new Error("Failed to fetch")
    }
}

export const getRecipeById = async (id: string) => {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const data = await res.json()
        return data
    } catch (error) {
        throw new Error("Failed to fetch")
    }
}

export const getRecipeByArea = async (area: string) => {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
        const data = await res.json()
        return data
    }
    catch (error) {
        throw new Error("Failed to fetch")

    }
}

export const getRandomMeal = async () => {
    try {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php", { next: { revalidate: 5 } })
        const data = await res.json()
        return data.meals[0]
    } catch (error) {
        throw new Error("failed to fetch")
    }
}

export const getMealByIngredient = async (ing: string) => {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`)
        const data = await res.json()
        return data.meals[0].strMealThumb
    } catch (error) {
        throw new Error("failed to fetch")
    }
}

export const getMealByName = async (name: string) => {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`, {
            cache: "no-cache"
        })
        const data = await res.json()
        return data
    } catch (error) {
        throw new Error("Failed to search")
    }
}



