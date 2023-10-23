import {ProfileBG} from "./ProfileBG";
import {ProfileInfo} from "./ProfileInfo";
import {MyPosts} from "./MyPosts";
import {FC} from "react";
import {Posts} from "./PostsContainer";




export type Profile = {
    posts?: PostMessageItems[]
}


const Profile: FC = () => {

    return (
        <>
            <ProfileBG url={'https://shorturl.at/jnvYZ'}/>
            <ProfileInfo/>
            <Posts />


        </>
    )
}

export default Profile