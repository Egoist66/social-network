import {PureComponent} from "react";
import {connect} from "react-redux";
import {AppRootState, AppThunkDispatch} from "../../../BLL/redux-store";
import {FetchProfileData, ProfileResponse} from "../../../BLL/api/profileAPI";
import {withRouter} from "../../../HOC/withFnRouter";
import {ProfileView} from "./ProfileView";

export type ProfilePostProps = {
    posts?: PostMessageItems[]
}

export interface ProfileProps extends ProfileResponse {
    posts: PostMessageItems[],
    router: {location: any, navigate: (to: string, options?: any) => void, params: {id: string}}
    fetchProfileData: (id: number) => void


}

interface ProfileDispatchProps {
    fetchProfileData: (id: number) => void
}

const mapStateToProps = ({profilePage: {profileData}}: AppRootState) => ({...profileData})
const mapDispatchToProps = (dispatch: AppThunkDispatch): ProfileDispatchProps => ({
    fetchProfileData: (id: number) => dispatch(FetchProfileData(id))
})

class Profile extends PureComponent<ProfileProps, any> {

    id: Readonly<string> = this.props.router.params.id

    componentDidMount() {
        this.props.fetchProfileData(+this.id)

    }

    componentDidUpdate(prevProps: Readonly<ProfileProps>) {
        if(this.props.router.params.id !== prevProps.router.params.id){
            this.props.fetchProfileData(+this.props.router.params.id)

        }
    }

    render() {
        return (

            <ProfileView
                {...this.props}
            />

        )
    }
}

// @ts-ignore
const _Profile = connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile))

export default _Profile


