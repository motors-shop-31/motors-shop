import styled from "styled-components";

export const Conteiner = styled.div`
  .info {
    width: 100vw;
    height: 703px;
    background-color: var(--brand2);

    display: flex;
    justify-content: center;

    div {
      width: 90vw;
    }

    .title {
      color: var(--grey10);

      margin-top: 3rem;
      text-align: center;
    }

    .description {
      color: var(--grey9);
      margin-top: 3.2rem;
      text-align: center;
    }

    .buttonConteiner {
      display: flex;
      flex-direction: column;

      gap: 1rem;
      margin-top: 3rem;

      a {
        text-decoration: none;
        text-align: center;
      }
    }

    .vehicle {
      border: 1.5px solid var(--grey10);
      color: var(--grey10);

      padding: 1rem 0px;

      &:hover {
        background-color: var(--grey10);
        color: var(--grey0);
      }
    }
  }

  .tipo {
    text-indent: 1rem;
    margin-top: 2.3rem;
    margin-bottom: 1rem;
  }

  .leilaoConteiner {
    display: flex;

    gap: 2rem;

    margin-top: 1rem;
    margin-left: 1rem;
    margin-bottom: 12.5rem;
  }

  @media (min-width: 580px) {
    .info {
      height: 581px;
      div {
        max-width: 748px;
      }
      .title {
        margin-top: 160px;

        font-weight: 700;
        font-size: 44px;
      }
      .description {
        margin-top: 2rem;
      }
      .buttonConteiner {
        flex-direction: row;
        justify-content: center;
      }
      .vehicle {
        padding: 1rem 4rem;
      }
    }

    .tipo {
      text-indent: 3.7rem;
      margin-top: 6.2rem;
    }

    .leilaoConteiner {
      margin-left: 3.7rem;
    }
  }
`;
