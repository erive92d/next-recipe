
export default async function testApi () {
    try {
        const res = await fetch("http://localhost:3000/api/testapi", {cache:"no-cache"})
        // if(!res.ok) {
        //     throw new Error("Failed to fetch data")
        // }
        // return await res.json()
      
        if(res.status === 200) {
            return await res.json()
        }
       
    } catch (error) {
        throw new Error("Failed to fetch")
    }
  
}