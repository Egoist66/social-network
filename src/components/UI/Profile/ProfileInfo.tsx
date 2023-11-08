import Wrapper from "../../../service-components/Wrapper/SectionWrapper";
import {Avatar} from "./Avatar";
import {AboutUser} from "./AboutUser";
import {FC} from "react";


export const ProfileInfo: FC = () => {

    return (

        <Wrapper gap={'30px'}>
            <Avatar width={200} src={"https://i.pinimg.com/originals/11/61/1b/11611b0d9bc7ef5123366050e1c40a94.png"} />
            <AboutUser data={{
                name: 'Farid Makhmudov',
                birth: '12/07/1996',
                city: 'Minsk',
                education: 'Lawyer',
                webSite: 'example.com'

            }} />

        </Wrapper>
    )
}