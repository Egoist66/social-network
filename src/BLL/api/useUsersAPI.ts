import { Action, FETCH_USERS, FOLLOW_USER } from "../actions";
import { Dispatch } from "redux";
import axios from "axios";
import { useActions } from "../../hooks/useActions";


export type UsersResponseItems = {
    id: number,
    name: string,
    status: string,
    photos: {
        small: string,
        large: string
    }
    followed: boolean,
}

export type UsersResponseType = {
    error: null | string,
    totalCount: number
    items: UsersResponseItems[]
}


export const instanse = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    responseType: "json",
    headers: {
        "API-KEY": "3770031c-9c32-4355-8e63-2d5e290922cb"
    }
})


export const useUsersApi = () => {

    const { FETCH_USERS, FOLLOW_USER } = useActions()


    return {

        fetchUsers() {
            return (async () => {
                const { data } = await instanse.get<UsersResponseType>('/users')

                FETCH_USERS(
                    data.items,
                    data.totalCount,
                    5,
                    1,
                    data.error
                )

            })()
        },

        followUsers(id: number) {
            return () => {
                FOLLOW_USER(id)
            }
        }
    }
}

export const usersAPI = {

    fetchUsers(dispatch: Dispatch<Action>, usersCount: number = 5, currentPage = 1) {

        return (async () => {
            try {
                const { data } = await instanse.get<UsersResponseType>(`/users?count=${usersCount}&page=${currentPage}`)

                dispatch(FETCH_USERS(
                    data.items || [],
                    data.totalCount,
                    usersCount,
                    currentPage,
                    data.error
                ))
            }
            catch (e) {
                console.log(e)
            }

        })()
    },

    followUsers(dispatch: Dispatch<Action>, id: number) {
        return (async () => {
            try {
                dispatch(FOLLOW_USER(id))
            }
            catch (e) {
                console.log(e)
            }
        })()
    }
}