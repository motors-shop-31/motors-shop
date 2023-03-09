import styled from "styled-components";

export const Conteiner = styled.div`
  background-color: var(--grey7);

  max-width: 100vw;

  form {
    background-color: var(--grey10);

    border-radius: 4px;

    width: 90vw;
    margin: auto;
    margin-top: 2rem;

    padding: 2rem;

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

    div:nth-child(25),
    div:nth-child(27) {
      display: flex;
      align-items: center;
      background-color: var(--grey8);
      border-radius: 4px;
      padding-right: 10px;
      width: 97%;

      :focus-within {
        outline: 2px solid black;
        background-color: var(--grey8);
      }

      input {
        width: 92%;
        border: none;
        :focus {
          outline: none;
          background-color: var(--grey8);
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
      margin: 1rem 0px;
    }

    button {
      width: 100%;
    }

    .conteiner--input {
      display: flex;
      gap: 10px;
      margin: 1rem 0px;
    }

    .conteiner--button {
      margin-bottom: 1rem;

      display: flex;
      gap: 1rem;
    }

    .cadastro {
      margin-top: 1rem;
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
