import axios from "axios"
import  Terror  from "../interface/Terror"

export const getData = async (url: string) => {
    const response = await axios.get(url)
    return response.data
}


export const addEvent = async (event: Partial<Terror>) : Promise<Partial<Terror> | null> => {
    try {
        console.log(event);
        
        const response = await axios.post<Partial<Terror>>(`http://localhost:8181/api/addEvent`, event);
        return response.data;
    } catch (error) {
        console.error(error);
        return null
    }
}