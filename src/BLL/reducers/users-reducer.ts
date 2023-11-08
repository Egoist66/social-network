import {Action, ActionNames, LOAD_USERS} from "../actions";
import {logActions} from "../../utils/utils";

export type usersTypeState<T> = {
    users: Array<T> | []
}

export type UsersData = {
    id: number,
    fullName: string,
    status: string,
    followed: boolean,
    location: {
        city: string,
        country: string
    }
}


const initialState: usersTypeState<UsersData> = {
    users: []
}


export const usersReducer = (state = initialState, action: Action): usersTypeState<UsersData> => {
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
                users: [
                    ...action.payload
                ]
            }


        default:
            return state

    }
}

