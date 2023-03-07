import styled from "styled-components";

export const Conteiner = styled.div`
  background-color: var(--grey7);

  width: 100vw;
  height: 100vh;

  .footer {
    position: fixed;
    top: -1;
  }

  form {
    background-color: var(--grey10);

    border-radius: 4px;

    width: 90vw;
    margin: auto;
    margin-top: 2rem;

    padding: 1rem;

    #forgotPass {
      cursor: pointer;
    }

    label {
      display: block;
      padding: 5px 0px;
    }

    h1 {
      margin: 1rem 0px;
    }

    input {
      width: 95%;
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

    div:nth-child(5) {
      display: flex;
      align-items: center;
      background-color: var(--grey8);
      border-radius: 4px;
      padding-right: 10px;
      width: 96%;

      :focus-within {
        outline: 2px solid black;
      }

      input {
        width: 92%;
        :focus {
          outline: none;
        }
      }
    }

    label {
      font-family: "Inter";
      font-size: 0.875rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }

    p {
      color: var(--grey2);

      text-align: center;
      margin: 1rem;
    }
    .password {
      text-align: end;
    }

    button {
      width: 100%;
    }
  }

  @media (min-width: 425px) {
    form {
      width: 70vw;
    }
  }

  @media (min-width: 800px) {
    form {
      width: 40vw;
    }
  }

  @media (min-width: 800px) {
    form {
      width: 412px;
    }
  }
`;
