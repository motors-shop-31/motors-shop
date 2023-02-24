import styled from 'styled-components'


export const Label = styled.label`
    font-family: 'Inter';
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
`

export const InputStyle = styled.input`
    width: 95%;
    height: 3.125rem;
    border: 0.0938rem solid var(--grey7);
    border-radius: 0.25rem;
    outline-color: var(--brand2);
    padding: 1rem;
    background-color: var(--grey8);
    :focus{
        background-color: var(--grey9);
    }
    ::placeholder{
        color: var(--grey3)
    }
`


export const InputDiv = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.625rem 0rem 0.625rem 0.9375rem;
`


