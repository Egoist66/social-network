/* Action types */

import {UsersResponseItems} from "./api/useUsersAPI";

export enum ActionNames {
    ADD_POST = 'ADD_POST',
    ADD_MESSAGE = 'ADD_MESSAGE',
    LOAD_USERS = 'LOAD_USERS',
    FOLLOW_USER = 'FOLLOW_USER',
    FETCH_USERS = 'FETCH_USERS'
}

type AddPostAction = ReturnType<typeof ADD_POST>
type AddMessageAction = ReturnType<typeof ADD_MESSAGE>
type LoadUsersAction = ReturnType<typeof LOAD_USERS>
type FollowUsersAction = ReturnType<typeof FOLLOW_USER>
type FetchUsersAction = ReturnType<typeof FETCH_USERS>

export type Action =
    AddPostAction
    | AddMessageAction
    | LoadUsersAction
    | FollowUsersAction
    | FetchUsersAction


/* Action creators functions */
export const ADD_POST = (text: string) =>
    ({type: ActionNames.ADD_POST, payload: {text}}) as const

export const ADD_MESSAGE = (message: string) =>
    ({type: ActionNames.ADD_MESSAGE, payload: {message}}) as const

export const LOAD_USERS = (id: number) => (
    {type: ActionNames.LOAD_USERS, payload: {id}} as const
)
export const FOLLOW_USER = (id: number ) => (
    {type: ActionNames.FOLLOW_USER, payload: {id}} as const
)
export const FETCH_USERS = (users: UsersResponseItems[]) => (
    {type: ActionNames.FETCH_USERS, payload: users} as const
)

