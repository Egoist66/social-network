import {Action, FETCH_USERS, FOLLOW_USER, INIT_FETCH_USERS, UNFOLLOW_USER} from "../actions";
import {Dispatch} from "redux";
import axios from "axios";


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

export type FollowUnfollowResponse = {

    data: {},
    fieldsErrors: string[],
    messages: string[],
    resultCode: number

}

export const APIinstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    responseType: "json",
    headers: {
        "API-KEY": "3770031c-9c32-4355-8e63-2d5e290922cb"
    }
})


export const usersAPI = {

    fetchUsers(dispatch: Dispatch<Action>, usersCount: number = 5, currentPage = 1) {

        return (async () => {
            try {
                dispatch(INIT_FETCH_USERS(true))

                const {data} = await APIinstance.get<UsersResponseType>(`/users?count=${usersCount}&page=${currentPage}`)

                dispatch(FETCH_USERS(
                    data.items || [],
                    data.totalCount,
                    usersCount,
                    currentPage,
                    data.error
                ))
            } catch (e) {
                console.log(e)
            } finally {
                dispatch(INIT_FETCH_USERS(false))

            }

        })()
    },

    followUsers(dispatch: Dispatch<Action>, id: number) {
        return (async () => {
            try {
                const {data} = await APIinstance.post<FollowUnfollowResponse>(`/follow/${id}`)
                if(data.resultCode === 0){
                    console.log(data.resultCode)
                    dispatch(FOLLOW_USER(id, data.resultCode))
                }

            } catch (e) {
                console.log(e)
            }
        })()
    },
    unfollowUsers(dispatch: Dispatch<Action>, id: number) {
        return (async () => {
            try {
                const {data} = await APIinstance.delete<FollowUnfollowResponse>(`/follow/${id}`)
               if(data.resultCode === 0){
                   console.log(data.resultCode)
                   dispatch(UNFOLLOW_USER(id, data.resultCode))
               }
            } catch (e) {
                console.log(e)
            }
        })()
    }
}