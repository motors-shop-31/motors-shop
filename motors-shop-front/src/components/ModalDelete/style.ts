import styled from 'styled-components';

export const ModalContent = styled.div`
    .title{
        color: #000;
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 0.625rem;
    }

    .description{
        color: var(--grey2);
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 0.625rem;
    }
`
export const ModalHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Lexend';
    padding: 0.5rem 0rem;

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
    margin-top: 4.375rem;
    padding: 0.5rem 1.5rem;
    .buttons{
        display: flex;
        justify-content: flex-end;
        gap: 0.625rem;
    }
    .cancel{
        background-color: var(--grey6);
        width: auto;
        color: var(--grey2);
        font-size: 1rem;
        font-weight: 600;
        padding: 0.5rem;
        border-radius: 0.25rem;
        margin-top: 1rem;
        margin-bottom: 1.25rem;
       
        :hover{
            background-color: var(--brand1);
            color: var(--whiteFixed);
        }
    }

    .delete{
        background-color: var(--alert2);
        width: auto;
        color: var(--alert1);
        font-size: 1rem;
        font-weight: 600;
        padding: 0.5rem;
        border-radius: 0.25rem;
        margin-top: 1rem;
        margin-bottom: 1.25rem;
        :hover{
            background-color: var(--alert1);
            color: var(--whiteFixed);
        }
    }

`

export const Modal = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    
    align-items: flex-start;
    z-index: 1;
    overflow-y: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
`
export const ModalBoryStyled = styled.div`
    padding: 0.5rem 1.5rem;
    .buttons{
        display: flex;
        justify-content: flex-end;
        gap: 0.625rem;
    }
    .cancel{
        background-color: var(--grey6);
        width: auto;
        color: var(--grey2);
        font-size: 1rem;
        font-weight: 600;
        padding: 0.5rem;
        border-radius: 0.25rem;
        margin-top: 1rem;
        margin-bottom: 1.25rem;
       
        :hover{
            background-color: var(--brand1);
            color: var(--whiteFixed);
        }
    }

    .delete{
        background-color: var(--alert2);
        width: auto;
        color: var(--alert1);
        font-size: 1rem;
        font-weight: 600;
        padding: 0.5rem;
        border-radius: 0.25rem;
        margin-top: 1rem;
        margin-bottom: 1.25rem;
        :hover{
            background-color: var(--alert1);
            color: var(--whiteFixed);
        }
    }
    
`