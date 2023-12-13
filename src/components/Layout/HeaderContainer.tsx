import {PureComponent} from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {HeaderView} from "./HeaderView";
import {AuthAPI, authResponse} from "../../BLL/api/authAPI";
import {AppRootState} from "../../BLL/redux-store";
import {Action} from "../../BLL/actions";

const mapStateToProps = ({auth}: AppRootState) => ({auth})
const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    checkIsUserAuth: () => AuthAPI.checkIsUserAuth(dispatch)
})

export interface HeaderPageProps {
    auth?: authResponse,
    isFetching?: boolean,
    checkIsUserAuth?: () => Promise<void>
}



class HeaderContainer extends  PureComponent<HeaderPageProps> {

    componentDidMount() {

        if(this.props.checkIsUserAuth){
            this.props.checkIsUserAuth()


        }
    }

    render() {
        return (
            <>

                <HeaderView auth={this.props.auth}  />
            </>
        )
    }
}



const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
export  default Header