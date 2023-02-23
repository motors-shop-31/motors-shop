import styled from "styled-components";

export const Conteiner = styled.div`
  ul {
    background-color: var(--whiteFixed);
    padding: 1rem;
    padding-left: 0px;

    margin-left: 1rem;

    display: flex;
    gap: 1rem;

    li {
      cursor: pointer;
    }

    .conteiner--cart {
      position: relative;

      width: 17rem;
      height: 11.185rem;

      display: flex;

      align-items: center;
      background-color: var(--grey7);

      img {
        &:hover {
          -moz-transform: scale(1.4);
          -webkit-transform: scale(1.4);
          transform: scale(1.4);
        }
      }

      .anuncioStatus {
        position: absolute;

        top: 120px;
        left: 120px;

        padding: 0px 8px;

        top: 1rem;
        left: 1rem;

        color: var(--whiteFixed);
      }

      .Ativo {
        background-color: var(--brand1);
      }

      .Inativo {
        background-color: var(--grey4);
      }

      img {
        width: 17rem;
        height: 9.393rem;
      }

      margin-bottom: 2px;
    }

    .title {
      width: 17rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      margin-bottom: 1rem;
    }

    .description {
      width: 17rem;
      height: 2.938rem;

      overflow: hidden;
      text-overflow: ellipsis;

      color: var(--grey2);

      margin-bottom: 1rem;
    }

    .conteiner--logo {
      display: flex;

      margin-bottom: 1rem;

      .logo {
        width: 2rem;
        height: 2rem;

        border-radius: 150px;

        background-color: var(--brand2);
      }

      p {
        color: var(--grey2);
        padding-left: 8px;
        padding-top: 6px;
      }
    }

    .conteiner--info {
      display: flex;
      justify-content: space-between;
      div {
        display: flex;

        max-width: 50%;
      }
      .km {
        padding: 4px 8px;
        margin-right: 12px;

        color: var(--brand1);
        background-color: var(--brand4);
      }
      .year {
        padding: 4px 8px;

        color: var(--brand1);
        background-color: var(--brand4);
      }
      .price {
        padding: 4px 8px;
        max-width: 50%;
      }
    }
  }

  @media (min-width: 580px) {
    ul {
      padding-left: 0px;
      margin-left: 3.7rem;
    }
  }
`;
