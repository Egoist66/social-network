import React, {PureComponent, ReactNode} from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {HeaderView} from "./HeaderView";
import {AuthAPI, authResponse} from "../../BLL/api/authAPI";
import {AppRootState} from "../../BLL/redux-store";
import {Action} from "../../BLL/actions";
import Text from "../../service-components/Text/Text";
import {NavLink} from "react-router-dom";

const mapStateToProps = ({auth}: AppRootState) => ({auth})
const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    checkIsUserAuth: () => AuthAPI.checkIsUserAuth(dispatch),
    logOut: () => AuthAPI.logOut(dispatch)
})

export interface HeaderPageProps {
    auth?: authResponse,
    isFetching?: boolean,
    checkIsUserAuth?: () => Promise<void>
    logOut?: () => Promise<void>
    loginText?: ReactNode

}


class HeaderContainer extends PureComponent<HeaderPageProps, { loginText: ReactNode }> {

    state = {
        loginText: ''
    }

    componentDidMount() {
        this.showLogin();

        (async () => {
            if (this.props.checkIsUserAuth) {
                await this.props.checkIsUserAuth()


            }
        })()


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

            ) :
            <NavLink to={'/login'}>Login</NavLink>

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