/* eslint-disable no-useless-concat */
import styled from "styled-components";

export const Background = styled.div`
  /* position: relative;
  background-color: var(--grey8);
  z-index: -3; */

  /* Essa estilização está bugando o header, não funciona nenhum botão */
`;

export const BackgroundPurple = styled.div`
  width: 100%;
  height: 450px;
  background-color: var(--brand1);
  position: fixed;
  z-index: -1;
`;

export const Container = styled.div`
  section {
    margin-top: 45px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 21px;
  }
  figure {
    width: 290px;
    height: 285px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--grey10);
    border-radius: 4px;

    img {
      width: 243px;
      height: 202px;
    }
  }

  @media (min-width: 768px) {
    display: flex;

    .section-main {
      align-items: flex-start;
      margin-left: 100px;
    }

    .section-fixed {
      justify-content: flex-start;
      position: fixed;
      right: 15%;
      top: 168px;
      width: 8em;
      margin-top: -2.5em;
    }
  }

  @media (min-width: 1000px) {
    figure {
      width: 520px;

      img {
        width: 350px;
        height: 232px;
      }
    }
  }

  @media (min-width: 1400px) {
    .section-main {
      margin-left: 250px;
    }
  }

  @media (min-width: 1500px) {
    figure {
      width: 720px;

      img {
        width: 400px;
        height: 252px;
      }
    }
  }
`;

export const InfoProduct = styled.div`
  width: 290px;
  height: 255px;
  background-color: var(--grey10);
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  h2 {
    margin-left: 20px;
  }

  div {
    margin-left: 20px;
    display: flex;
    gap: 20px;

    h3 {
      text-align: center;
      background: var(--brand4);
      color: var(--brand1);
      padding: 7px;
      border-radius: 4px;
    }
  }

  h4 {
    margin-left: 20px;
  }

  button {
    margin-left: 20px;
    width: 100px;
    height: 38px;
    border-radius: 4px;
  }

  @media (min-width: 1000px) {
    width: 520px;
  }

  @media (min-width: 1500px) {
    width: 720px;
  }
`;

export const Description = styled.div`
  width: 290px;
  height: 254px;
  background-color: var(--grey10);
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  h2 {
    margin-left: 20px;
  }

  p {
    margin-left: 20px;
  }

  @media (min-width: 1000px) {
    width: 520px;
    display: flex;
  }

  @media (min-width: 1500px) {
    width: 720px;
  }
`;

export const PhotosProduct = styled.div`
  width: 290px;
  height: 254px;
  background-color: var(--grey10);
  border-radius: 4px;

  h2 {
    margin-left: 20px;
  }

  ul {
    margin-left: 20px;
    width: 240px;
    height: 200px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 6px;
  }

  li {
    width: 68px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--grey7);

    img {
      width: 50px;
      height: 50px;
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    height: 283px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  @media (min-width: 1200px) {
    width: 450px;
    align-items: flex-start;

    ul {
      width: 400px;
    }

    li {
      width: 100px;
      height: 90px;

      img {
        width: 80px;
        height: 70px;
      }
    }
  }
`;
const randomColor: string =
  "--random" + Math.floor(Math.random() * (12 - 0) + 1);

export const ProfileProduct = styled.div`
  width: 290px;
  height: 294px;
  background-color: var(--grey10);
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  div {
    width: 77px;
    height: 77px;
    border-radius: 100px;
    background-color: var(${randomColor});

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 26px;
    font-weight: 500;
    color: var(--whiteFixed);
  }

  p {
    text-align: center;
  }

  button {
    width: 206px;
    height: 45px;
    border-radius: 4px;
  }

  @media (min-width: 1200px) {
    width: 450px;
    height: 308px;
  }
`;

export const Comments = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;

  .no_comments {
    margin-bottom: 25px;
    color: var(--grey2);
  }

  .container {
    width: 290px;
    padding-bottom: 20px;
    background-color: var(--grey10);
    display: flex;
    flex-direction: column;
    gap: 40px;
    border-radius: 4px;
  }

  .container-comment {
    background-color: var(--grey10);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    width: 100%;
  }

  h2 {
    margin: 30px 0 -20px 28px;
  }

  .container-info {
    margin-left: 8px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    width: 100%;

    h3 {
      color: var(--grey1);
      font-size: 13px;
    }

    .div-edit {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-bottom: 10px;

      h4 {
        height: 0px;
        font-weight: 400;
        font-size: 10px;
        color: var(--grey3);
      }

      span {
        font-weight: 400;
        font-size: 10px;
        color: var(--grey3);
      }
    }

    .trash {
      cursor: pointer;

      :hover {
        color: red;
      }
    }

    .more {
      cursor: pointer;

      :hover {
        background-color: var(--grey6);
      }
    }
  }

  h5 {
    margin-left: 50px;
  }

  p {
    width: 85%;
    margin-left: 20px;
    text-align: start;
    word-break: break-all;
  }

  .comments-empty {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media (min-width: 768px) {
    align-items: flex-start;
    width: 0;
    margin-left: 100px;
  }

  @media (min-width: 1000px) {
    .container {
      width: 520px;
    }

    .container-info {
      margin-left: 26px;
    }

    p {
      margin-left: 40px;
    }
  }

  @media (min-width: 1400px) {
    .container {
      margin-left: 149px;
    }
  }

  @media (min-width: 1500px) {
    .container {
      width: 720px;
    }
  }
`;

export const LogoName = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 100px;
  background-color: var(${(props) => props.color});

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  font-weight: 500;
  color: var(--whiteFixed);
`;

const randomColor2: string =
  "--random" + Math.floor(Math.random() * (12 - 0) + 1);

export const InputComments = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;

  .container {
    width: 290px;
    height: 294px;
    background-color: var(--grey10);
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  }

  .div-name {
    display: flex;
    align-items: center;
    margin-left: 28px;
    gap: 8px;

    div {
      width: 32px;
      height: 32px;
      border-radius: 100px;
      background-color: var(${randomColor2});

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 14px;
      font-weight: 500;
      color: var(--whiteFixed);
    }
  }

  .div-input {
    display: flex;
    flex-direction: column;
    margin-left: 28px;
    gap: 24px;

    textarea {
      width: 200px;
      height: 50px;
      border: 1.5px solid var(--grey7);
      border-radius: 4px;
      resize: none;

      padding: 12px;

      font-weight: 400;
      font-size: 16px;
      color: var(--grey3);
    }

    button {
      width: 108px;
      height: 35px;
      border-radius: 4px;
    }
  }

  .div-buttons {
    display: flex;
    flex-wrap: wrap;
    margin-left: 28px;
    gap: 8px;

    button {
      color: var(--grey3);
      font-weight: 500;
      font-size: 12px;

      display: flex;
      justify-content: center;
      align-items: center;

      background: var(--grey7);
      border-radius: 24px;
      padding: 10px;
      height: 24px;
    }
  }

  @media (min-width: 768px) {
    align-items: flex-start;
    width: 0;
    margin-left: 100px;
  }

  @media (min-width: 1000px) {
    .container {
      width: 520px;
    }
    .div-input {
      display: flex;
      align-items: center;
      flex-direction: row;
      border-radius: 4px;
      padding-right: 10px;
      height: 150px;
      outline: 2px solid var(--grey7);

      :focus-within {
        outline: 2px solid black;
      }
      textarea {
        width: 300px;
        height: 130px;
        border: none;
        overflow: hidden;
        :focus {
          outline: none;
        }
      }

      button {
        margin-top: 100px;
      }
    }
  }

  @media (min-width: 1400px) {
    .container {
      margin-left: 149px;
    }
  }

  @media (min-width: 1500px) {
    .container {
      width: 720px;
    }
    .div-input {
      textarea {
        width: 490px;
      }
    }
  }
`;

export const Figure = styled.div`
  width: 400px;
  height: 239px;
  background-color: var(--grey7);
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 280px;
    height: 185px;

    border-radius: 4px;
  }

  @media (max-width: 768px) {
    width: 320px;

    img {
      width: 250px;
      height: 155px;
    }
  }
`;

export const DivModal = styled.div`
  @media (max-width: 768px) {
    .content {
      width: 344px;
    }
  }
`;
