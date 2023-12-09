export const preloaded = {
    posts: [
        {id: crypto.randomUUID(), message: 'Hello, how are you guys?', likesCount: 3},
        {id: crypto.randomUUID(), message: 'Learning react is funny', likesCount: 10},
        {id: crypto.randomUUID(), message: 'Winter is coming sounds familiar', likesCount: 5},

    ],
    profileData: {
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
        photos: {
            large: "https://i.pinimg.com/originals/11/61/1b/11611b0d9bc7ef5123366050e1c40a94.png",
            small: ''
        },
        lookingForAJobDescription: ''
    }
}