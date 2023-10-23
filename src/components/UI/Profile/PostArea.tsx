import styled from "styled-components";
import Button from "../../../service-components/Button/Button";
import {ChangeEvent, FC, useState} from "react";
import {PostAreaContainerProps} from "./PostAreaContainer";


type StyledPostArea = {
    bg_color?: string
}

const StyledPostArea = styled.textarea<StyledPostArea>`

  width: 100%;
  min-height: 120px;
  resize: none;
  outline: none;
  background-color: #eae7f7;
  border: none;
  padding: 10px;
  font-size: 16px;
  border-radius: 7px;
`


export const PostArea: FC<PostAreaContainerProps> = ({addPost}) => {
    const [value, setValue] = useState<string>('')


    const createPost = () => {

        if (!value.length) {
            return
        }

        addPost(value)
        setValue('')
    }
    const handleValue = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <>
            <StyledPostArea
                data-value={value}
                onChange={handleValue}
                value={value}
            />
            <div style={{
                textAlign: 'left',
                display: 'flex',
                gap: 20,
                paddingTop: 20,
                paddingBottom: 50

            }}>

                <Button disabled={value.length <= 0} onClickHandler={createPost} width="230px" text="Create post"/>
                <Button text="Remove all posts"/>


            </div>


        </>
    )
}