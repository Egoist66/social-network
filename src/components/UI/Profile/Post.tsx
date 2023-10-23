import styled from "styled-components";
import Text from "../../../service-components/Text/Text";
import {FC, ReactNode} from "react";

const StyledPost = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  border-bottom: 1px solid silver;
  margin-bottom: 15px;
`;

const StyledPostImage = styled.img`
  max-width: 50px;
`;

type PostProps = {
    message: (data?: any) => ReactNode;
    likesCount: number;
    id: string;
};

export const Post: FC<PostProps> = ({message, id, likesCount}) => {
    return (
        <StyledPost id={id} data-id="post">
            <Text type="span">
                <StyledPostImage
                    src="https://w1.pngwing.com/pngs/933/945/png-transparent-social-media-icons-avatar-user-profile-login-black-circle-silhouette-symbol.png"
                    alt="post-avatar"
                />
            </Text>
            <li>{message()}</li>
            <Text _color="darkslateblue" type="span">
                <Text type={"span"}>{likesCount} </Text>&#10084;{'\t'}
                <Text type={"span"}>{new Date().toLocaleDateString()} </Text>
            </Text>
        </StyledPost>
    );
};
