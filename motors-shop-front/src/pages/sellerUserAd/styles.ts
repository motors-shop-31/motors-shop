import styled from "styled-components";

export const Conteiner = styled.div`
  .backGroudHeader {
    width: 100vw;
    height: 357px;
    background-color: var(--brand2);

    position: absolute;
    top: 0px;

    z-index: -1;
  }
  .advertiserCard {
    margin: auto;
    width: 300px;

    margin-bottom: 1rem;
    margin-top: 170px;

    background-color: var(--grey10);
    border: 1.5px solid var(--grey10);
    border-radius: 4px;

    padding: 1.5rem;

    .seller {
      width: 104px;
      height: 104px;

      background-color: var(--brand1);
      color: var(--whiteFixed);
      border-radius: 100%;

      text-align: center;
      padding-top: 22px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
    }

    .sellerConteiner {
      display: flex;
      gap: 1rem;

      margin: 1.4rem 0px;

      .sellerType {
        padding: 0.2rem 0.6rem;
        background-color: var(--brand4);
        color: var(--brand1);
      }
    }

    .description {
      color: var(--grey2);
      width: 200px;
    }
  }

  a {
    text-decoration: none;
  }

  .carroselConteiner {
    overflow: hidden;
  }

  ul {
    display: flex;
  }

  .tipo {
    text-indent: 1rem;
  }

  #motos {
    margin-top: 8rem;
  }

  .leilaoConteiner {
    display: flex;
    height: 27rem;

    gap: 2rem;

    margin-top: 1rem;
    margin-left: 1rem;
    margin-bottom: 12.5rem;

    overflow: scroll;
    overflow-y: hidden;
  }

  @media (min-width: 580px) {
    .backGroudHeader {
      height: 357px;

      .advertiserCard {
        padding: 2.5rem;

        .description {
          width: 450px;
        }
      }
    }
    .tipo {
      text-indent: 3.7rem;
    }

    .leilaoConteiner {
      margin-left: 3.7rem;
    }
  }

  @media (min-width: 800px) {
    .advertiserCard {
      width: 750px;
      .description {
        width: 650px;
      }
    }
  }

  @media (min-width: 1300px) {
    .advertiserCard {
      width: 1229px;
      .description {
        width: 1129px;
      }
    }
  }
`;
