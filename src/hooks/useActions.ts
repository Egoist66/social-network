import {bindActionCreators} from "redux";
import {ADD_MESSAGE, ADD_POST, FETCH_USERS, FOLLOW_USER, LOAD_USERS} from "../BLL/actions";
import {useAppDispatch} from "../BLL/redux-store";
export const useActions = () => {
    const dispatch = useAppDispatch()
    const boundActions = bindActionCreators({
        ADD_POST,
        ADD_MESSAGE,
        LOAD_USERS,
        FOLLOW_USER,
        FETCH_USERS

    },dispatch)

    return {
        ...boundActions
    }
}