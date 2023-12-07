import {Action, ActionNames} from "../actions";
import {UsersResponseItems} from "../api/usersAPI";

export type UsersTypeState<T> = {

    userItems: Array<T>
    totalCount: number
    currentPage: number
    error: string | null
    usersCount: number
    isFetching: boolean
}


const initialState: UsersTypeState<UsersResponseItems> = {

    userItems: [],
    totalCount: 0,
    usersCount: 0,
    currentPage: 1,
    isFetching: false,
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

        case ActionNames.INIT_FETCH_USERS: {
            return {
                ...state,
                isFetching: action.payload.isFetching
            }
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

