import {styled} from "styled-components"
import {FC, useState} from "react";
import {DialogsRoutes} from "./DialogsRoutes";
import {View} from "../../../service-components/View/View";
import Text from "../../../service-components/Text/Text";
import {Messages} from "./Messages";
import Wrapper from "../../../service-components/Wrapper/SectionWrapper";
import {TextArea} from "../../../service-components/TextArea/TextArea";
import Button from "../../../service-components/Button/Button";
import {DialogsContainerProps} from "./DialogsContainer";
import { DialogsForm } from "./DialogsForm";

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


const Dialogs: FC<DialogsContainerProps> = ({dialogs, messages, createMessage}) => {

    const [message, setMessage] = useState<string>('')

    return (

        <Wrapper _block={true}>


            <Text type={'h2'}>Dialogs</Text>

            <UserMessages>

                <View id={'d-routes-view'}>
                    <DialogsRoutes dialogs={dialogs}/>
                </View>

                <View id={'d-view'}>
                    <Messages messages={messages}/>
                </View>


                <DialogsForm
                    createMessage={createMessage}
                    message={message}
                    setMessage={setMessage}
                
                />

                
            </UserMessages>

        </Wrapper>
    )
}

export default Dialogs

