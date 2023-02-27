import styled from 'styled-components';


export const ModalHeaderStryled = styled.header`
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Lexend';
    padding: 0.5rem 1.5rem;
`

export const ModalBoryStyled = styled.div`
    padding: 0.5rem 1.5rem;
    .title{
        color: #000;
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 0.625rem;
    }

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