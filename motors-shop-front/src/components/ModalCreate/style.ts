import styled from "styled-components";


export const Modal = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    z-index: 2;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.4);
    overflow: hidden;
`

export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 26.875rem;
    padding: 20px;
    border-radius: 0.25rem;
    background-color: var(--whiteFixed);
`

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 38px;

    .modal_title {
        font-size: 1rem;
        font-weight: 500;
        font-family: 'Lexend';
    }

    #xis{
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
`
export const ModalFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const DefaultInputContainer = styled.label`
    display: flex;
    flex-direction: column;
    width: 100%;

    h2 {
        margin-bottom: 18px;
    }

    input, textarea {
        display: flex;
        width: 100%;
        padding: 20px 16px;
        border: 1.5px solid #e9ecef;
        border-radius: 4px;
    }

    input,textarea::placeholder {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
    }

    textarea {
        box-sizing: border-box;
        max-width: 100%;
        min-width: 100%;
    }

    span {
        display: flex;
        align-items: center;
        height: 24px;
        color: red;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
    }
`

export const InputContainerButtons = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    h2 {
        margin-bottom: 18px;
    }

    span {
        display: flex;
        align-items: center;
        height: 24px;
        color: red;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
    }
`

export const InputContainerMarginBottom = styled(DefaultInputContainer)`
    margin-bottom: 24px;
`

export const InputContainer02 = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    label {
        width: 48%;
    }
`

export const BottomButtons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 30px 0;

    button {
        width: 48%;
    }
`
