import styled from "styled-components";
import Text from "../../../service-components/Text/Text";
import {Post} from "./Post";
import {FC} from "react";
import {Profile} from "./Profile";
import {PostAreaContainer} from "./PostAreaContainer";

const StyledPostOutArea = styled.div`
  height: 350px;
  border-radius: 7px;
  overflow: auto;
  background-color: #fff;
  padding: 10px;
`

const StyledPostOutList = styled.ul`

`

export const MyPosts: FC<Profile>= ({posts}) => {


    const PostElements = posts ? posts?.map(d => (
        <Post
            message={() => <Text>{d.message}</Text>}
            id={d.id}
            key={d.id}
            likesCount={d.likesCount}
        />
    )): 'no posts'

    return (

        <div>

            <Text type={'h2'}>My Posts</Text>
            <PostAreaContainer />

            <StyledPostOutArea>

                <StyledPostOutList>

                    {PostElements}

                </StyledPostOutList>

            </StyledPostOutArea>

        </div>
    )
}