import styled from "styled-components";

export const FooterStyle = styled.footer`
  width: 100%;
  height: 200px;
  background-color: var(--grey0);
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;

  h1 {
    color: var(--whiteFixed);
  }

  span {
    font-size: 30px;
  }

  p {
    color: var(--whiteFixed);
  }

  .arrow-up {
    color: var(--grey1);
    width: 40px;
    height: 40px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    height: 100px;

    h1 {
      margin-left: 28px;
    }

    .arrow-up {
      margin-right: 28px;
    }
  }
`;
