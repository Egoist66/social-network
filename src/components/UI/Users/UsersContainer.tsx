import { AppRootState } from "../../../BLL/redux-store";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Action } from "../../../BLL/actions";
import { UsersResponseItems, usersAPI } from "../../../BLL/api/useUsersAPI";
import { PureComponent, ReactNode } from "react";
import { UsersView } from "./UsersView";

interface mapDispatchToPropsType  {
    fetchUsers: (pageSize: number, currentPage: number) => Promise<void>
    followUsers: (id: number) => void
}

const mapStateToProps = ({ usersPage }: AppRootState) => {

    return {
       ...usersPage
    }
}


const mapDispatchToProps = (dispatch: Dispatch<Action>): mapDispatchToPropsType => {
    return {
        fetchUsers: (usersCount: number, currentPage: number) => usersAPI.fetchUsers(
            dispatch,
            usersCount,
            currentPage
        ),
        followUsers: (id: number) => usersAPI.followUsers(dispatch, id)
    }
}




export interface UsersProps {
    userItems?: UsersResponseItems[],
    totalCount: number,
    usersCount: number,
    currentPage: number,
    error: string | null,
    fetchUsers: (usersCount: number, currentPage: number) => Promise<void>,
    followUsers: (id: number) => void

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

    getPageCount = (maxPage: number) => {

        return () => {
            let pagesCount = this.props.totalCount / this.props.usersCount
            let pages = []
            for(let i = 1; i <= Math.ceil(pagesCount); i++){
                pages.push(i)

                if(i === maxPage){
                    break
                }
            }

            return pages
        }

    }

    componentDidMount() {
        this.props.fetchUsers(3, this.state.currentPage)

    }

    componentDidUpdate(prevProps: Readonly<UsersProps>, prevState: Readonly<UsersState>, snapshot?: any): void {
        if(prevState.currentPage !== this.state.currentPage){
            this.props.fetchUsers(this.props.usersCount, this.state.currentPage)
        }
    }
 



    render(): ReactNode {

        const { userItems, currentPage, followUsers, error} = this.props

        return (

            <UsersView 
                userItems={userItems}
                currentPage={currentPage}
                followUsers={followUsers}
                error={error}
                nextPage={this.nextPage}
                getPageCount={this.getPageCount}
           
            />
        )


    }
}




const _Users = connect(mapStateToProps, mapDispatchToProps)(Users)

export default _Users