import Wrapper from "../../../service-components/Wrapper/SectionWrapper";
import {Avatar} from "./Avatar";
import {AboutUser} from "./AboutUser";
import { FC } from "react";
import {ProfileBG} from "./ProfileBG";
import {Posts} from "./PostsContainer";
import {ProfileProps} from "./Profile";
import Text from "../../../service-components/Text/Text";
import {Spinner} from "../../../service-components/Preloader/Preloader";


export const ProfileView: FC<ProfileProps> = ({fullName, contacts, aboutMe, photos}) => {


    return (

        <>
            <ProfileBG url={'https://shorturl.at/jnvYZ'}/>
            <Wrapper gap={'30px'}>
                <Avatar width={200} src={photos?.large ?? 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg'}/>
                <AboutUser data={{
                    name: fullName,
                    birth: '12/07/1996',
                    city: 'Minsk',
                    education: 'Lawyer',
                    webSite: contacts?.website

                }}/>


            </Wrapper>

            <Text type={'p'}>About me: {aboutMe}</Text>


            <Posts/>
        </>
    )
}