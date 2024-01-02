import {FETCH_USERS, FOLLOW_USER, INIT_FETCH_USERS, INIT_FOLLOW_USER, UNFOLLOW_USER} from "../actions";
import axios from "axios";
import {AppThunk} from "../redux-store";


export type UsersResponseItems = {
    id: number,
    name: string,
    status: string,
    photos: {
        small: string,
        large: string
    }
    followed: boolean,
    followingInProgress: boolean
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


export const FetchUsers = (usersCount: number = 5, currentPage = 1): AppThunk => {
    return async (dispatch) => {
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
    }
}
export const FollowUsers = (id: number): AppThunk => {
    return async (dispatch) => {
        try {

            dispatch(INIT_FOLLOW_USER(true, id))

            const {data} = await APIinstance.post<FollowUnfollowResponse>(`/follow/${id}`)
            if (data.resultCode === 0) {
                console.log(data.resultCode)
                dispatch(FOLLOW_USER(id, data.resultCode))
                dispatch(INIT_FOLLOW_USER(false, id))

            }

        } catch (e) {
            console.log(e)
            dispatch(INIT_FOLLOW_USER(false, id))

        }
    }
}

export const UnfollowUsers = (id: number): AppThunk => {
    return async (dispatch) => {

        try {
            const {data} = await APIinstance.delete<FollowUnfollowResponse>(`/follow/${id}`)
            if (data.resultCode === 0) {
                console.log(data.resultCode)
                dispatch(UNFOLLOW_USER(id, data.resultCode))
                dispatch(INIT_FOLLOW_USER(false, id))

            }
        } catch (e) {
            console.log(e)
        }
    }
}

