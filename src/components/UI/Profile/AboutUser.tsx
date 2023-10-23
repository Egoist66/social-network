import Text from "../../../service-components/Text/Text";
import {FC} from "react";
import {View} from "../../../service-components/View/View";

export type AboutUserPropsType = {
    data: {
        name: string,
        birth: string,
        city: string,
        education?: string,
        webSite?: string
    }
}

export const AboutUser: FC<AboutUserPropsType> = ({data}) => {
    const {city, birth, education, webSite, name} = data
    return (
        <View>
            <Text  _margin={'0px 0px 20px 0px'} type={'h2'}>{name}</Text>

            <View>
                <Text>Date of birth: <Text type={'span'}>{birth}</Text></Text>
                <Text>City: <Text type={'span'}>{city}</Text></Text>
                <Text>Education: <Text type={'span'}>{education}</Text></Text>
                <Text>Web site: <Text type={'span'}>{webSite}</Text></Text>
            </View>
        </View>
    )
}