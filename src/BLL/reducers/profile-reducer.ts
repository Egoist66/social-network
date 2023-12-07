import {Action, ActionNames} from "../actions";
import {logActions} from "../../utils/utils";
import {Contacts, Photos} from "../api/profileAPI";

export type profilePageProps = {
    userProfile: {
        posts: PostMessageItems[]
        aboutMe: string
        contacts: Contacts
        lookingForAJob: boolean
        lookingForAJobDescription: string
        fullName: string
        userId: number
        photos: Photos
    }
}


const initialState: profilePageProps = {
    userProfile: {
        posts: [
            {id: crypto.randomUUID(), message: 'Hello, how are you guys?', likesCount: 3},
            {id: crypto.randomUUID(), message: 'Learning react is funny', likesCount: 10},
            {id: crypto.randomUUID(), message: 'Winter is coming sounds familiar', likesCount: 5},

        ],
        aboutMe: 'Hi',
        userId: 1,
        contacts: {
            facebook: '#',
            github: '#',
            instagram: '#',
            mainLink: '#',
            twitter: '#',
            website: '#',
            youtube: '#',
            vk: '#'
        },
        fullName: 'Farid Makhmudov',
        lookingForAJob: true,
        photos: {large: '', small: ''},
        lookingForAJobDescription: '',

    }
}

const profileReducer = (state = initialState, action: Action): profilePageProps => {

    switch (action.type) {

        case ActionNames.FETCH_PROFILE_DATA: {
            return  {
                ...state,
                userProfile: {
                    posts: [...state.userProfile.posts],
                    ...action.payload.profileData

                }
            }
        }

        case ActionNames.ADD_POST:
            logActions(action, action.type, action.payload)
            
            return {
                ...state,
                userProfile: {
                    ...state.userProfile,
                    posts: [
                        ...state.userProfile.posts,
                        {id: crypto.randomUUID(), likesCount: 0, message: action.payload.text}
                    ]
                }
            }


        default:
            return state
    }
}
export default profileReducer