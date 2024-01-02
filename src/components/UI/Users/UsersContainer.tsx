import {AppRootState, AppThunkDispatch} from "../../../BLL/redux-store";
import {connect} from "react-redux";
import {FetchUsers, FollowUsers, UnfollowUsers, UsersResponseItems} from "../../../BLL/api/usersAPI";
import {PureComponent, ReactNode} from "react";
import {UsersView} from "./UsersView";
import {Spinner} from "../../../service-components/Preloader/Preloader";
import {authResponse} from "../../../BLL/api/authAPI";

interface mapDispatchToPropsType {
    fetchUsers: (usersCount: number, currentPage: number) => void
    followUsers: (id: number) => void
    unfollowUsers: (id: number) => void
}

const mapStateToProps = ({usersPage, auth}: AppRootState) => ({...usersPage, auth})

const mapDispatchToProps = (dispatch: AppThunkDispatch): mapDispatchToPropsType => ({
    fetchUsers: (usersCount: number, currentPage: number) => dispatch(FetchUsers(usersCount, currentPage)),
    followUsers: (id: number) => dispatch(FollowUsers(id)),
    unfollowUsers: (id: number) => dispatch(UnfollowUsers(id))
})

export interface UsersProps {
    userItems: UsersResponseItems[],
    totalCount: number,
    usersCount: number,
    currentPage: number,
    error: string | null,
    fetchUsers: (usersCount: number, currentPage: number) => void,
    isFetching: boolean,
    followUsers: (id: number) => void,
    unfollowUsers: (id: number) => void,
    auth: authResponse

}

interface UsersState {
    currentPage: number;
}


class Users extends PureComponent<UsersProps, UsersState> {


    state: Readonly<UsersState> = {
        currentPage: 1
    }

    nextPage = (page: number) => {
        return () => {
            this.setState({
                currentPage: page
            })

        }
    }

    getPageCount = (maxPage?: number) => {

        return () => {
            let pagesCount = this.props.totalCount / this.props.usersCount
            let pages = []
            for (let i = 1; i <= Math.ceil(pagesCount); i++) {
                pages.push(i)

                if (i === maxPage) {
                    break
                }
            }

            return pages
        }

    }

    componentDidMount() {
        this.props.fetchUsers(50, this.state.currentPage)

    }

    componentDidUpdate(prevProps: Readonly<UsersProps>, prevState: Readonly<UsersState>): void {
        if (prevState.currentPage !== this.state.currentPage) {
            this.props.fetchUsers(this.props.usersCount, this.state.currentPage)
        }
    }


    render(): ReactNode {

        return (

            <UsersView
                getPageCount={this.getPageCount}
                nextPage={this.nextPage}
                renderSpinner={() => <Spinner/>}
                {...this.props}

            />
        )


    }
}



const _Users = connect(mapStateToProps, mapDispatchToProps)(Users)

export default _Users