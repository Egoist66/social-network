import {AppRootState} from "../../../BLL/redux-store";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";

const mapStateToProps = (state: AppRootState) => {
    return {
        posts: state.profilePage.posts
    }
}

export const Posts = connect(mapStateToProps, null)(MyPosts)