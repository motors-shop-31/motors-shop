import styled from "styled-components";


export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0.625rem 0rem 0.625rem 0.9375rem;

    .button1{
        width: 47%;
        color: #000;
        font-size: 16px;
        font-weight: 600;
        height: 45px;
        border: none;
        border-radius: 4px;
        border: 1px solid var(--grey4);

        :hover{
            background-color: var(--brand1);
            color: #fff;
        }
        
    }
    .button2{
        width: 47%;
        height: 45px;
        font-size: 16px;
        font-weight: 600;
        border-radius: 4px;
        border: 1px solid var(--grey4);
        :hover{
            background-color: var(--brand1);
            color: #fff;
        }
    }
`

export const InputsInfos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const FormMain = styled.div`
    .label { 
        font-size: 0.875rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
        padding: 0.625rem 0rem 0.625rem 0.9375rem;
    }

    #adcCampo{
        width: auto;
        padding: 10px;
        margin-left: 15px;
        background-color: var(--brand4);
        color: var(--brand1);
        font-size: 14px;
        font-weight: 600;
        border-radius: 4px;

    }
`