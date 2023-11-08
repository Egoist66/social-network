import {Action, FETCH_USERS, FOLLOW_USER} from "../actions";
import {Dispatch} from "redux";
import {UsersData, usersTypeState} from "../reducers/users-reducer";

const users: usersTypeState<UsersData> = {
    users: [
        {
            id: 1, fullName: 'Dmitry',
            status: 'I am developer',
            followed: true,
            location: {
                city: 'Minsk',
                country: 'Belarus'
            }
        },
        {
            id: 2, fullName: 'Farid',
            status: 'UI developer - React',
            followed: true,
            location: {
                city: 'Baku',
                country: 'Azerbaijan'
            }
        },
        {
            id: 3, fullName: 'Kirill',
            status: 'Sales manager',
            followed: false,
            location: {
                city: 'Glusk',
                country: 'Belarus'
            }
        },
    ]
}

export const usersApi = {

    fetchUsers(dispatch: Dispatch<Action>) {
        return () => {
            dispatch(FETCH_USERS(users.users))

        }
    },

    followUsers(dispatch: Dispatch<Action>, id: number) {
        return () => {
            dispatch(FOLLOW_USER(id))
        }
    }
}