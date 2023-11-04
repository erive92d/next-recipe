
export const getSeaFood = async () => {
    try {
        const res = await fetch(`http://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
        return res
    } catch (error) {
        throw new Error("Failed to fetch")
    }
}

export const getCategories = async () => {
    try {
        const res = await fetch(`http://www.themealdb.com/api/json/v1/1/list.php?c=list`)
        return res
    } catch (error) {
        throw new Error("Failed to fetch")
    }
}

export const searchByCategory = async (cat:string) => {
    try {
        const res = await fetch(`http://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
        const data = await res.json()
        return data
    } catch (error) {
        throw new Error("Failed to fetch")
    }
}

export const getRecipeById = async (id:string) => {
    try {
        const res = await fetch(`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const data = await res.json()
        return data
    } catch (error) {
        throw new Error("Failed to fetch")
    }
}

