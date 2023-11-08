import {ReactNode} from "react";

export type StyledServiceWrapperType = {
    _block?: boolean,
    _justify?: 'space-between' | 'space-evenly' | 'space-around' | 'flex-start' |
    'center' | 'flex-end',
    align_center? : 'center' | boolean,
    gap?: string
    _margin?: string
    _direction?: 'row' | 'column' | 'column-reverse'

}

export type WrapperChildren = {
    children: ReactNode,
    _margin?: string
    _block?: boolean
    _justify?: 'space-between' | 'space-evenly' | 'space-around' | 'flex-start' |
        'center' | 'flex-end',
    align_center?:'center' | boolean,
    gap?: string
    _direction?: 'row' | 'column' | 'column-reverse'


}

export type TextPropsType = {
    _color?: string;
    font_size?: string;
    type?: 'p' | 'h2' | 'h1' | 'span',
    children?: ReactNode;
    centered?: string;
    mw?: string;
    _margin?: string,
    font_weight?: number
    _display? : 'inline-block' | 'block'
};

export type ButtonProps = {
    width?: string,
    text?: string,
    height?: string,
    type?: string,
    as?: string,
    href?: string,
    disabled?: boolean,
    onClickHandler?: (arg?: any) => void

}
