import {PureComponent} from "react";
import {ProfileInfo} from "./ProfileInfo";
import {ProfileBG} from "./ProfileBG";
import {Posts} from "./PostsContainer";
import {connect} from "react-redux";
import {AppRootState} from "../../../BLL/redux-store";
import {Dispatch} from "redux";
import {Action} from "../../../BLL/actions";
import {ProfileAPI, ProfileResponse} from "../../../BLL/api/profileAPI";
import {uriId} from "../../../utils/utils";


export type ProfilePostProps = {
    posts?: PostMessageItems[]
}

export interface ProfileProps extends ProfileResponse {
    posts: PostMessageItems[],
    fetchProfileData: (id: number) => Promise<void>


}

interface ProfileDispatchProps {
    fetchProfileData: (id: number) => Promise<void>
}

const mapStateToProps = ({profilePage: {userProfile}}: AppRootState) => ({...userProfile})
const mapDispatchToProps = (dispatch: Dispatch<Action>): ProfileDispatchProps => ({
    fetchProfileData: (id: number) => ProfileAPI.fetchProfileData(dispatch, id)
})
class Profile extends PureComponent<ProfileProps, any> {


    componentDidMount() {
        this.props.fetchProfileData(uriId())
    }

    render() {
        const {fullName} = this.props
        return (
            <>
                {fullName}
                <ProfileBG url={'https://shorturl.at/jnvYZ'}/>
                <ProfileInfo/>
                <Posts />

                {uriId()}

            </>
        )
    }
}

const _Profile = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default _Profile