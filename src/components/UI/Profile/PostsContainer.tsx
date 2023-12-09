import {AppRootState} from "../../../BLL/redux-store";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";

const mapStateToProps = ({profilePage:{posts}}: AppRootState) => {
    return {
        posts
    }
}

export const Posts = connect(mapStateToProps, null)(MyPosts)