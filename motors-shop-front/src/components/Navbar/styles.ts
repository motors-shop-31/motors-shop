import styled from "styled-components";

export const NavbarStyle = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  height: 80px;
  z-index: 4;

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

  .login {
    cursor: pointer;
  }

  @media (min-width: 768px) {
  }
`;

const randomColor: string =
  "--random" + Math.floor(Math.random() * (12 - 0) + 1);

export const MobileStyle = styled.section`
  a {
    text-decoration: none;
    color: var(--grey2);
    width: 80%;
  }

  .div-name {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 28px;
    gap: 12px;

    height: 50px;

    .name {
      font-size: 14px;
      font-weight: 500;
    }
    .logo-name {
      width: 25px;
      height: 25px;
      border-radius: 100px;
      background-color: var(${randomColor});

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 12px;
      font-weight: 500;
      color: var(--whiteFixed);
    }
  }

  .div-info {
    flex-direction: column;
    padding-bottom: 5px;
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

    .button-login {
      cursor: pointer;
    }

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

    .section-name {
      display: flex;
      align-items: center;
      height: 80px;
      gap: 10px;

      margin-right: 40px;
    }

    .section-dropdown {
      display: none;
      position: absolute;
      margin-top: 200px;
      width: 115px;
      background-color: var(--grey9);
      box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.5);
      border-radius: 4px;
      padding: 20px 20px;
      z-index: 1;
      right: 10px;
      gap: 20px;

      button {
        background: none;
        text-align: start;
        font-weight: 400;
        font-size: 16px;
        color: var(--grey2);
      }
    }

    .section-name:hover .section-dropdown {
      display: flex;
      flex-direction: column;
    }

    .logo-name {
      width: 32px;
      height: 32px;
      border-radius: 100px;
      background-color: var(${randomColor});

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 14px;
      font-weight: 500;
      color: var(--whiteFixed);
    }

    .name {
      font-weight: 400;
      font-size: 16px;
      color: var(--grey2);
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
