import {FC, useState} from "react";
import Dialogs from "./Dialogs";
import {AppRootState} from "../../../BLL/redux-store";
import {Action, ADD_MESSAGE} from "../../../BLL/actions";
import {Dispatch} from "redux";
import {connect} from "react-redux";

export type DialogsContainerProps = {
    messages?: MessagesItems[]
    dialogs?: DialogsItems[]
    createMessage?: (message: string, callback: (value: string) => void) => void
}

type DialogsContainerDispatchProps = {
    createMessage: (message: string, callback: (value: string) => void) => void

}

const mapStateToProps = (state: AppRootState) => {
    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) : DialogsContainerDispatchProps => {
    return {
        createMessage: (message: string, callback: (value: string) => void) => {
            dispatch(ADD_MESSAGE(message))
            callback('')
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dialogs)

