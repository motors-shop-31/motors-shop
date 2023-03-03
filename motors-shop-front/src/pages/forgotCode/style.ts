import styled from 'styled-components';


export const Body = styled.div`
    background-color: var(--grey7);
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;


    .footer {
        position: fixed;
        top: -1;
    }
    input {
      width: 382px;
      height: 3.125rem;
      border: 0.0938rem solid var(--grey7);
      border-radius: 0.25rem;
      outline-color: var(--brand2);
      padding: 1rem;
      background-color: var(--grey8);
      :focus {
        background-color: var(--grey9);
      }
      ::placeholder {
        color: var(--grey3);
      }
    }

    label {
      font-family: "Inter";
      font-size: 0.875rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
      margin-left: 25px;
    }
`

export const Content = styled.div`
    background-color: var(--whiteFixed);
    border-radius: 4px;
    width: 440px;
    height: 300px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    button{
        margin-top: 20px;
        width: 382px;
        height: 48px;
        border-radius: 4px;
        background-color: var(--brand1);
        color: var(--whiteFixed);
        font-size: 16px;
        font-weight: 600;
    }
`

export const Header = styled.div`
    font-size: 24px;
    font-weight: 500;
    color: var(--black);
    padding: 23px;
`