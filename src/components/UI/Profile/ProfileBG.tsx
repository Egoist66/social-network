import styled from "styled-components";
import {FC} from "react";
import {View} from "../../../service-components/View/View";

const StyledProfileBG = styled.img`
  width: 100%;
  height: 205px;
  object-fit: cover;
  border-radius: 7px;

`
type ProfileBGPropsType = {
    url: string
}

export const ProfileBG: FC<ProfileBGPropsType> = ({url}) => {

    return (
        <View _margin={'0px 0px 20px 0px'} id={'profile-banner'}>
            <StyledProfileBG src={url} alt={ProfileBG.name.toLowerCase()}/>
        </View>
    )
}