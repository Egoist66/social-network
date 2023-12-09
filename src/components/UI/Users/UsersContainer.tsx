import {AppRootState} from "../../../BLL/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {Action} from "../../../BLL/actions";
import {usersAPI, UsersResponseItems} from "../../../BLL/api/usersAPI";
import {PureComponent, ReactNode} from "react";
import {UsersView} from "./UsersView";
import {Spinner} from "../../../service-components/Preloader/Preloader";

interface mapDispatchToPropsType {
    fetchUsers: (pageSize: number, currentPage: number) => Promise<void>
    followUsers: (id: number) => void
}

const mapStateToProps = ({usersPage}: AppRootState) => ({...usersPage})

const mapDispatchToProps = (dispatch: Dispatch<Action>): mapDispatchToPropsType => ({
    fetchUsers: (usersCount: number, currentPage: number) => usersAPI.fetchUsers(
        dispatch, usersCount, currentPage
    ),
    followUsers: (id: number) => usersAPI.followUsers(dispatch, id)
})

export interface UsersProps {
    userItems: UsersResponseItems[],
    totalCount: number,
    usersCount: number,
    currentPage: number,
    error: string | null,
    fetchUsers: (usersCount: number, currentPage: number) => Promise<void>,
    isFetching: boolean,
    followUsers: (id: number) => void

}

interface UsersState {
    currentPage: number;
}


class Users extends PureComponent<UsersProps, UsersState> {


    state: Readonly<UsersState> = {
        currentPage: 1234
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
        this.props.fetchUsers(5, this.state.currentPage)

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