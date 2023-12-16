import axios from "axios";

export interface Posts {
    userId: number
    id: number
    title: string
    body: string
}

export const getPosts = async () => {
    const {data} = await axios.get<Posts[]>('https://jsonplaceholder.typicode.com/posts')
    return data
}
