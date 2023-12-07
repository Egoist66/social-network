import {AppRootState} from "../../../BLL/redux-store";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";

const mapStateToProps = ({profilePage:{userProfile}}: AppRootState) => {
    return {
        posts: userProfile.posts
    }
}

export const Posts = connect(mapStateToProps, null)(MyPosts)