import {useEffect, useRef} from "react";

export function toCapitalize(str: string) {
    if (!str) {
        return str;
    }

    return str.split(" ").map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(" ");
};


type RefProps = {
    prev: any
}

export const usePrevState = (data: any) => {

    const Ref = useRef<RefProps>({
        prev: data
    })

    useEffect(() => {
        Ref.current.prev = data
    }, [data])

    const {prev} = Ref.current

    return {
        prev
    }


}

export const setGlobalProperty = (obj: any, value: any[], ...props: string[]) => {
    props.forEach((prop, i: number) => Object.defineProperties(obj, {
        [prop]: {
            value: value[i]
        }
    }))
}

type Action = {
    type: string
}
export const logActions = (action: Action, type: string, payload: any) => {
    switch (action.type) {
        case type:
            console.table({action: type, payload, time: new Date().toString()})

            break

        default:
            throw new Error(`Unknown --${type}-- action type was dispatched!`)
    }
}


export const push = (value: any) => {
    return (prev: Array<any>) => {
        const clone = [...prev];
        clone.push(value);

        return () => {
            return clone
        }

    }
}


type Update = {
    [key: string]: any
}
export const update = (prevState: any, propForUpdate: { name: string, callback: () => any }) => {
    return {
        ...prevState,
        [propForUpdate.name]: propForUpdate.callback()
    }
}

export const uriId = () => {
    return Number(window.location.pathname.split("/")[2])
}