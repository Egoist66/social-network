import {Action, FETCH_PROFILE_DATA} from "../actions";
import {APIinstance} from "./usersAPI";
import {Dispatch} from "redux";
import {preloaded} from "../preloaded";
import {AppThunk} from "../redux-store";

export type ProfileResponse = {
    aboutMe: string
    contacts: Contacts
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: Photos
}

export type Contacts = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

export type Photos = {
    small: string
    large: string
}

export const FetchProfileData = (id: number): AppThunk => {
    return  async (dispatch) => {
        try {
            if (!id || id === 1){
                dispatch(FETCH_PROFILE_DATA(preloaded.profileData))
                return
            }

            const {data} = await APIinstance.get<ProfileResponse>(`/profile/${id}`)
            dispatch(FETCH_PROFILE_DATA(data))


        } catch (e) {
            console.log(e)
        } finally {

        }
    }
}
