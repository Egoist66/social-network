/* Action types */

import {UsersResponseItems} from "./api/usersAPI";
import {ProfileResponse} from "./api/profileAPI";
import {authResponse} from "./api/authAPI";

export enum ActionNames {
    ADD_POST = 'ADD_POST',
    ADD_MESSAGE = 'ADD_MESSAGE',
    LOAD_USERS = 'LOAD_USERS',
    FOLLOW_USER = 'FOLLOW_USER',
    UNFOLLOW_USER = 'UNFOLLOW_USER',
    FETCH_USERS = 'FETCH_USERS',
    INIT_FETCH_USERS = 'INIT_FETCH_USERS',
    FETCH_PROFILE_DATA = 'FETCH_PROFILE_DATA',
    INIT_SET_USER_DATA = 'INIT_SET_USER_DATA',
    SET_USER_DATA = 'SET_USER_DATA',
    LOGOUT_USER = 'LOGOUT_USER',
    INIT_FOLLOW_USER = 'INIT_FOLLOW_USER',
    VALIDATE_LOGIN_FIELD = 'VALIDATE_LOGIN_FIELD'
}

type AddPostAction = ReturnType<typeof ADD_POST>
type AddMessageAction = ReturnType<typeof ADD_MESSAGE>
type LoadUsersAction = ReturnType<typeof LOAD_USERS>
type FollowUsersAction = ReturnType<typeof FOLLOW_USER>
type UnFollowUsersAction = ReturnType<typeof UNFOLLOW_USER>
type FetchUsersAction = ReturnType<typeof FETCH_USERS>
type InitFetchUsersAction = ReturnType<typeof INIT_FETCH_USERS>
type FetchProfileDataAction = ReturnType<typeof FETCH_PROFILE_DATA>
type InitSetUserDataAction = ReturnType<typeof INIT_SET_USER_DATA>
type SetUserDataAction = ReturnType<typeof SET_USER_DATA>
type LogOutUserAction = ReturnType<typeof LOGOUT_USER>
type InitFollowUserAction = ReturnType<typeof INIT_FOLLOW_USER>
type ValidateLoginFieldsAction = ReturnType<typeof VALIDATE_LOGIN_FIELD>

export type Action =
    AddPostAction
    | AddMessageAction
    | LoadUsersAction
    | FollowUsersAction
    | UnFollowUsersAction
    | FetchUsersAction
    | InitFetchUsersAction
    | FetchProfileDataAction
    | InitSetUserDataAction
    | SetUserDataAction
    | LogOutUserAction
    | InitFollowUserAction
    | ValidateLoginFieldsAction


/* Action creators functions */
export const ADD_POST = (text: string) =>
    ({type: ActionNames.ADD_POST, payload: {text}}) as const

export const ADD_MESSAGE = (message: string) =>
    ({type: ActionNames.ADD_MESSAGE, payload: {message}}) as const

export const LOAD_USERS = (id: number) => (
    {type: ActionNames.LOAD_USERS, payload: {id}} as const
)
export const FOLLOW_USER = (id: number, status: number) => (
    {type: ActionNames.FOLLOW_USER, payload: {id, status}} as const
)
export const UNFOLLOW_USER = (id: number, status: number) => (
    {type: ActionNames.UNFOLLOW_USER, payload: {id, status}} as const
)
export const FETCH_USERS = (userItems: UsersResponseItems[], totalCount: number, usersCount: number, currentPage: number, error: string | null) => (
    {type: ActionNames.FETCH_USERS, payload: {userItems, totalCount, usersCount, currentPage, error}} as const
)
export const INIT_FETCH_USERS = (isFetching: boolean) => (
    {type: ActionNames.INIT_FETCH_USERS, payload: {isFetching}} as const
)
export const FETCH_PROFILE_DATA = (profileData: ProfileResponse) => (
    {type: ActionNames.FETCH_PROFILE_DATA, payload: {profileData}} as const
)
export const SET_USER_DATA = (data: authResponse) => (
    {type: ActionNames.SET_USER_DATA, payload: {data}} as const
)
export const INIT_SET_USER_DATA = (isFetching: boolean) => (
    {type: ActionNames.INIT_SET_USER_DATA, payload: {isFetching}} as const
)
export const LOGOUT_USER = (isAuth: boolean) => (
    {type: ActionNames.LOGOUT_USER, payload: {isAuth}} as const
)
export const VALIDATE_LOGIN_FIELD = (message: string) => (
    {type: ActionNames.VALIDATE_LOGIN_FIELD, payload: {message}} as const
)
export const INIT_FOLLOW_USER = (isFollowing: boolean, id: number) => (
    {type: ActionNames.INIT_FOLLOW_USER, payload: {isFollowing, id}} as const
)

