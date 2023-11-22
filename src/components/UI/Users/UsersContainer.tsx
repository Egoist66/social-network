import { AppRootState } from "../../../BLL/redux-store";
import { connect } from "react-redux";
import Users from "./Users";
import { Dispatch } from "redux";
import { Action } from "../../../BLL/actions";
import { usersAPI } from "../../../BLL/api/useUsersAPI";

type mapDispatchToPropsType = {
    fetchUsers: (pageSize: number, currentPage: number) => Promise<void>
    followUsers: (id: number) => void
}

const mapStateToProps = ({ usersPage }: AppRootState) => {
    const { totalCount, error, userItems, usersCount, currentPage } = usersPage



    return {
        userItems,
        totalCount,
        usersCount,
        currentPage,
        error
    }
}
const mapDispatchToProps = (dispatch: Dispatch<Action>): mapDispatchToPropsType => {
    return {
        fetchUsers: (pageSize: number, currentPage: number) => usersAPI.fetchUsers(
            dispatch,
            pageSize,
            currentPage
        ),
        followUsers: (id: number) => usersAPI.followUsers(dispatch, id)
    }
}


const _Users = connect(mapStateToProps, mapDispatchToProps)(Users)

export default _Users