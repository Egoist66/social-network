import {ProfileBG} from "./ProfileBG";
import {ProfileInfo} from "./ProfileInfo";
import {MyPosts} from "./MyPosts";
import {FC} from "react";


export type ProfileProps = {
    postData: PostMessageItems[]
}
const Profile: FC<ProfileProps> = ({postData}) => {

    return (
        <>
            <ProfileBG url={'https://shorturl.at/jnvYZ'}/>
            <ProfileInfo/>
            <MyPosts  postData={postData} />


        </>
    )
}

export default Profile