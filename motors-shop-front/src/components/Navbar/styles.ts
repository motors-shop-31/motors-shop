import styled from "styled-components";

export const NavbarStyle = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  height: 80px;
  z-index: 1;

  div {
    width: 100%;
    background-color: var(--grey10);
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid var(--grey6);
  }

  .items {
    width: 100%;
    background-color: var(--grey10);
    color: var(--grey2);
  }

  h1 {
    margin-left: 15px;
    font-size: 24px;
    background: linear-gradient(90deg, #0b0d0d -1.61%, #4529e6 100.99%);
    font-weight: bold;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .button-logo {
    background: none;
  }

  .div-button {
    display: flex;
    justify-content: center;
  }

  .button-mobile {
    width: 80%;
    height: 35px;
    background: none;
    border: 1.5px solid var(--grey4);
    color: var(--grey0);
    font-weight: bold;
    border-radius: 4px;
  }

  a {
    color: var(--grey2);
  }

  @media (min-width: 768px) {
  }
`;
export const MobileStyle = styled.section`
  a {
    text-decoration: none;
    color: var(--grey2);
    width: 100%;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export const DesktopStyle = styled.section`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    width: 50%;
    justify-content: space-between;
    align-items: center;

    h2 {
      margin-right: 5px;

      a {
        text-decoration: none;
        color: var(--grey2);
      }
    }

    p {
      height: 80px;
      border-right: 3px solid var(--grey6);
    }

    .button-desktop {
      width: 90px;
      height: 35px;
      background: none;
      border: 1.5px solid var(--grey4);
      color: var(--grey0);
      font-weight: bold;
      border-radius: 4px;
    }
  }
  @media (min-width: 1027px) {
    width: 35%;

    h2 {
      margin-right: 10px;
    }

    p {
      margin-right: 15px;
    }

    .button-desktop {
      width: 150px;
      height: 35px;
      background: none;
      border: 1.5px solid var(--grey4);
      color: var(--grey0);
      font-weight: bold;
      border-radius: 4px;
      margin-left: 6px;
    }
  }
`;
