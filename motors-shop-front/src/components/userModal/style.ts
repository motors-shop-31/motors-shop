import styled from "styled-components";

export const FormStyleConteiner = styled.div`
  p {
    margin: 1rem 0px;
  }

  input {
    width: 100%;
    height: 3.125rem;
    border: 0.0938rem solid var(--grey7);
    border-radius: 0.25rem;
    outline-color: var(--grey2);
    padding: 1rem;
    background-color: var(--grey8);
  }

  label {
    display: block;
    margin: 1rem 0px;
    font-family: "Inter";
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .negative {
    background-color: var(--grey6);
    border: 1.5px solid var(--grey6);

    color: var(--grey2);

    &:hover {
      background-color: var(--grey5);
      border: 1.5px solid var(--grey5);
    }
  }

  .alert {
    background-color: var(--alert1);
    border: 1.5px solid var(--alert1);

    color: var(--whiteFixed);

    &:hover {
      background-color: var(--alert3);
      border: 1.5px solid var(--alert3);

      color: var(--alert1);
    }
  }

  .conteiner--button {
    display: flex;
    justify-content: end;

    gap: 1rem;
  }

  .conteiner--input {
    display: flex;
    gap: 10px;
    margin: 1rem 0px;
  }
`;

export const ConteinerInput = styled.div`
  display: flex;
  justify-content: end;

  gap: 1rem;

  .negative {
    background-color: var(--grey6);
    border: 1.5px solid var(--grey6);

    color: var(--grey2);

    &:hover {
      background-color: var(--grey5);
      border: 1.5px solid var(--grey5);
    }
  }

  .alert {
    background-color: var(--alert1);
    border: 1.5px solid var(--alert1);

    color: var(--whiteFixed);

    &:hover {
      background-color: var(--alert3);
      border: 1.5px solid var(--alert3);

      color: var(--alert1);
    }
  }
`;
