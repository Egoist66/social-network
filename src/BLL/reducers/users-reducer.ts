import {Action, ActionNames} from "../actions";
import {UsersResponseItems} from "../api/useUsersAPI";

export type UsersTypeState<T> = {

    userItems: Array<T>
    totalCount: number
    currentPage: number
    error: string | null
    usersCount: number
}


const initialState: UsersTypeState<UsersResponseItems> = {

    userItems: [],
    totalCount: 0,
    usersCount: 0,
    currentPage: 1,
    error: ''

}


export const usersReducer = (state = initialState, action: Action): UsersTypeState<UsersResponseItems> => {
    switch (action.type) {
        case ActionNames.FOLLOW_USER:


            return {
                ...state,
                userItems: state.userItems.map(u => u.id === action.payload.id ?
                    {...u, followed: !u.followed} : u
                )
            }
        case ActionNames.FETCH_USERS:

            return {
                ...state,
                userItems: [...action.payload.userItems],
                totalCount: action.payload.totalCount,
                usersCount: action.payload.usersCount,
                currentPage: action.payload.currentPage,
                error: action.payload.error
            }


        default:
            return state

    }
}

