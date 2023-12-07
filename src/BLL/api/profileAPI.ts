import {Action, FETCH_PROFILE_DATA, FETCH_USERS, INIT_FETCH_USERS} from "../actions";
import {APIinstance, UsersResponseType} from "./usersAPI";
import {Dispatch} from "redux";

export type ProfileResponse =  {
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


export const ProfileAPI = {
    fetchProfileData(dispatch: Dispatch<Action>, id: number){
        return (async () => {
            try {
                if(id === 1){
                    dispatch(FETCH_PROFILE_DATA({
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
                    }))
                    return
                }

                const {data} = await APIinstance.get<ProfileResponse>(`/profile/${id}`)
                dispatch(FETCH_PROFILE_DATA(data))
            }
            catch (e) {
                console.log(e)
            }
            finally {

            }

        })()
    }
}