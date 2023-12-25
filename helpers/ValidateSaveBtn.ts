

export default async function ValidateSaveBtn(recipeId:string, userId:any) {
    
    try {
        const response = await fetch(`${process.env.NEXTAUTH_URL}/api/recipeapi`)
        return response
    } catch (error) {
        throw new Error("failed")
    }


}
