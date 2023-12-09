import {Action, ActionNames} from "../actions";
import {logActions} from "../../utils/utils";
import {Contacts, Photos} from "../api/profileAPI";

export type profilePageProps = {
    posts: PostMessageItems[]
    profileData: {
        aboutMe: string
        contacts: Contacts
        lookingForAJob: boolean
        lookingForAJobDescription: string
        fullName: string
        userId: number
        photos: Photos
    } | null

}


const initialState: profilePageProps = {
    posts: [],
    profileData: null


}

const profileReducer = (state = initialState, action: Action): profilePageProps => {

    switch (action.type) {

        case ActionNames.FETCH_PROFILE_DATA: {
            return {
                ...state,
                posts: [...state.posts],
                profileData: action.payload.profileData

            }
        }


        case ActionNames.ADD_POST:
            logActions(action, action.type, action.payload)

            return {
                ...state,
                posts: [...state.posts, {id: crypto.randomUUID(), likesCount: 0, message: action.payload.text}]
            }


        default:
            return state
    }
}
export default profileReducer