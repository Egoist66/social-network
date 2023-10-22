import {styled} from "styled-components"
import {ChangeEvent, FC, useState} from "react";
import {DialogsRoutes} from "./DialogsRoutes";
import {View} from "../../service-components/View/View";
import Text from "../../service-components/Text/Text";
import {Messages} from "./Messages";
import Wrapper from "../../service-components/Wrapper/SectionWrapper";
import {TextArea} from "../../service-components/TextArea/TextArea";
import Button from "../../service-components/Button/Button";
import {Store} from "../../BLL/store";
import {ADD_MESSAGE} from "../../BLL/actions";

const StyledDialogs = styled.div({})


const UserMessages = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 50px;

  & #d-view {
    flex-grow: 1;
  }
`
export type DialogsProps = {
    dialogsData?: DialogsItems[]
    messagesData?: MessagesItems[]
}

const Dialogs: FC<DialogsProps> = ({dialogsData, messagesData}) => {

    const [message, setMessage] = useState<string>('')
    const dispatch = Store.dispatch.bind(Store)

    const createNewMessage = () => {
        if(message === ''){
            return
        }
        dispatch(ADD_MESSAGE(message))
        setMessage('')
    }

    return (

        <Wrapper _block={true}>


            <Text type={'h2'}>Dialogs</Text>

            <UserMessages>

                <View id={'d-routes-view'}>
                    <DialogsRoutes dialogsData={dialogsData}/>
                </View>

                <View id={'d-view'}>
                    <Messages messagesData={messagesData}/>
                </View>


                <TextArea
                    width={'50%'}
                    value={message}
                    dataValue={message}
                    onChangeHandler={setMessage}
                    placeHolder={'Enter a message'}
                />

                <Button text={'Send message'} onClickHandler={createNewMessage} />


            </UserMessages>

        </Wrapper>
    )
}

export default Dialogs