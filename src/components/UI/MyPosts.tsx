import styled from "styled-components";
import Text from "../../service-components/Text/Text";
import {Post} from "./Post";
import {PostArea} from "./PostArea";
import {FC} from "react";

import {ProfileProps} from "./Profile";

const StyledPostOutArea = styled.div`
  height: 350px;
  border-radius: 7px;
  overflow: auto;
  background-color: #fff;
  padding: 10px;
`

const StyledPostOutList = styled.ul`

`

export const MyPosts: FC<ProfileProps>= ({postData}) => {


    const PostElements = postData?.map(d => (
        <Post
            message={() => <Text>{d.message}</Text>}
            id={d.id}
            key={d.id}
            likesCount={d.likesCount}
        />
    ))

    return (

        <div>

            <Text type={'h2'}>My Posts</Text>
            <PostArea />

            <StyledPostOutArea>

                <StyledPostOutList>

                    {PostElements}

                </StyledPostOutList>

            </StyledPostOutArea>

        </div>
    )
}