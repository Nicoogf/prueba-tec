"use server"

const api_url = "https://jsonplaceholder.typicode.com/users"

export const getData = async () => {
    try {
        const response = await fetch(api_url)
        const data = response.json()
        return data
    } catch (error) {
        console.log("ERROR al realizar fetch " , error)
        return []
    }

}