import {PureComponent} from "react";
import {connect} from "react-redux";
import {AppRootState} from "../../../BLL/redux-store";
import {Dispatch} from "redux";
import {Action} from "../../../BLL/actions";
import {ProfileAPI, ProfileResponse} from "../../../BLL/api/profileAPI";
import {uriId} from "../../../utils/utils";
import {withRouter} from "../../../HOC/withFnRouter";
import {ProfileView} from "./ProfileView";

export type ProfilePostProps = {
    posts?: PostMessageItems[]
}

export interface ProfileProps extends ProfileResponse {
    posts: PostMessageItems[],
    router: {location: any, navigate: (to: string, options?: any) => void, params: {id: string}}
    fetchProfileData: (id: number) => Promise<void>


}

interface ProfileDispatchProps {
    fetchProfileData: (id: number) => Promise<void>
}

const mapStateToProps = ({profilePage: {profileData}}: AppRootState) => ({...profileData})
const mapDispatchToProps = (dispatch: Dispatch<Action>): ProfileDispatchProps => ({
    fetchProfileData: (id: number) => ProfileAPI.fetchProfileData(dispatch, id)
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


