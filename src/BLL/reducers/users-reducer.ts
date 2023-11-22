import {Action, ActionNames} from "../actions";
import {logActions} from "../../utils/utils";
import {UsersResponseItems} from "../api/useUsersAPI";

export type UsersTypeState<T> = {

    users: Array<T>
}


const initialState: UsersTypeState<UsersResponseItems> = {

    users: []
}


export const usersReducer = (state = initialState, action: Action): UsersTypeState<UsersResponseItems> => {
    switch (action.type) {
        case ActionNames.FOLLOW_USER:

            logActions(action, ActionNames.FOLLOW_USER, action.payload)

            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.id ?
                    {...u, followed: !u.followed} : u
                )
            }
        case ActionNames.FETCH_USERS:

            logActions(action, ActionNames.FETCH_USERS, action.payload)

            return {
                ...state,
                users: [...action.payload]
            }


        default:
            return state

    }
}

