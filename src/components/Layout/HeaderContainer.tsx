import React, {PureComponent, ReactNode} from "react";
import {connect} from "react-redux";
import {HeaderView} from "./HeaderView";
import {authResponse, LogOut} from "../../BLL/api/authAPI";
import {AppRootState, AppThunkDispatch} from "../../BLL/redux-store";
import Text from "../../service-components/Text/Text";

const mapStateToProps = ({auth}: AppRootState) => ({auth})
const mapDispatchToProps = (dispatch: AppThunkDispatch) => ({
    logOut: () => dispatch(LogOut())
})

export interface HeaderPageProps {
    auth?: authResponse,
    isFetching?: boolean,
    logOut?: () => void
    loginText?: ReactNode

}


class HeaderContainer extends PureComponent<HeaderPageProps, { loginText: ReactNode }> {

    state: Readonly<{ loginText: ReactNode }> = {
        loginText: ''
    }


    componentDidMount() {
        this.showLogin();

    }

    showLogin = () => {
        const result = this.props.auth?.isAuth ?
            (
                <>
                    <Text _color={'#fff'}>Logged In - {this.props.auth.data.login}</Text>
                    <button
                        onClick={this.props.logOut}
                        style={{
                            cursor: 'pointer'
                        }}>Log out
                    </button>

                </>

            ) : null


        this.setState({
            loginText: result
        })
    }

    componentDidUpdate(prevProps: Readonly<HeaderPageProps>) {
        if (this.props.auth?.isAuth !== prevProps.auth?.isAuth) {
            this.showLogin()
        }
    }

    render() {
        return (
            <>

                <HeaderView

                    loginText={this.state.loginText}
                    auth={this.props.auth}
                />
            </>
        )
    }
}


const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
export default Header
