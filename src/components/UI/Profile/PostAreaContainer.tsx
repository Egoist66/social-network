import {FC} from "react";
import {PostArea} from "./PostArea";
import {Action, ADD_POST} from "../../../BLL/actions";
import {connect} from "react-redux";
import {Dispatch} from "redux";

export type PostAreaContainerProps = {
    addPost: (value: string) => void
}

const mapStateToDispatch = (dispatch: Dispatch<Action>) : PostAreaContainerProps => {
    return {
        addPost: (value) => dispatch(ADD_POST(value))
    }
}


export const PostAreaContainer = connect(
    null,
     mapStateToDispatch
)(PostArea)
