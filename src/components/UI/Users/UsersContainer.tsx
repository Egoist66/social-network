import {AppRootState} from "../../../BLL/redux-store";
import {connect} from "react-redux";
import Users from "./Users";
import {Dispatch} from "redux";
import {Action} from "../../../BLL/actions";
import {usersAPI} from "../../../BLL/api/useUsersAPI";

type mapDispatchToPropsType = {
    fetchUsers: () => Promise<void>
    followUsers: (id: number) => void
}

const mapStateToProps = ({users: {users}}: AppRootState) => {
    return {
        users
    }
}
const mapDispatchToProps = (dispatch: Dispatch<Action>): mapDispatchToPropsType => {
    return {
        fetchUsers: () => usersAPI.fetchUsers(dispatch),
        followUsers: (id: number) => usersAPI.followUsers(dispatch, id)
    }
}


const _Users = connect(mapStateToProps, mapDispatchToProps)(Users)

export default _Users