import Wrapper from "../../../service-components/Wrapper/SectionWrapper";
import {Avatar} from "./Avatar";
import {AboutUser} from "./AboutUser";
import {FC} from "react";


export const ProfileInfo: FC = () => {

    return (

        <Wrapper gap={'30px'}>
            <Avatar />
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