import styled from "styled-components";


export const ModalHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    #xis{
        width: 1.5625rem;
        height: 1.5625rem;
        cursor: pointer;

    }
`

export const ModalBody = styled.div`
    background-color: var(--whiteFixed);
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    max-width: 26.875rem;
    padding: 0.9375rem;
    border-radius: 0.25rem;

`

export const Modal = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    align-items: center;
    z-index: 1;
    overflow-y: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0.625rem 0rem 0.625rem 0.9375rem;

    .button1{
        width: 47%;
        color: #000;
        font-size: 1rem;
        font-weight: 600;
        height: 2.8125rem;
        border: none;
        border-radius: 0.25rem;
        border: 0.0625rem solid var(--grey4);

        :hover{
            background-color: var(--brand1);
            color: #fff;
        }
        
    }
    .button2{
        width: 47%;
        height: 2.8125rem;
        font-size: 1rem;
        font-weight: 600;
        border-radius: 0.25rem;
        border: 0.0625rem solid var(--grey4);
        :hover{
            background-color: var(--brand1);
            color: #fff;
        }
    }

    
`

export const ButtonFooter = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    gap: 0.625rem;
    margin-top: 1.25rem;
.cancel{
        width: 28%;
        color: #000;
        font-size: 1rem;
        font-weight: 600;
        height: 2.5rem;
        border: none;
        border-radius: 0.25rem;
        border: 0.0625rem solid var(--grey4);
        :hover{
            background-color: var(--brand1);
            color: #fff;
        }
    }
    .enter {
        width: 38%;
        height: 2.5rem;
        font-size: 1rem;
        font-weight: 600;
        border-radius: 0.25rem;
        border: 0.0625rem solid var(--grey4);
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

export const FormMain = styled.form`
    .label { 
        font-size: 0.875rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
        padding: 0.625rem 0rem 0.625rem 0.9375rem;
    }

    #adcCampo{
        width: auto;
        padding: 0.625rem;
        margin-left: 0.9375rem;
        background-color: var(--brand4);
        color: var(--brand1);
        font-size: 0.875rem;
        font-weight: 600;
        border-radius: 0.25rem;

    }
   
`