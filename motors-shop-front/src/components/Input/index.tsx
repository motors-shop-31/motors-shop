import { InputHTMLAttributes } from 'react';
import {  InputStyle, Label, InputDiv } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    label?: string;
}

export const Input = ({label, placeholder, ...rest}: InputProps) => {
    return (
        <>
        <InputDiv>
                {label && <Label>{label}</Label>}
                <InputStyle type="text" placeholder={placeholder}{...rest}/>
        </InputDiv>
        </>
    )
}

