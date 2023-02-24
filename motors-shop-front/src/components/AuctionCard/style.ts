import styled from "styled-components";

export const Main = styled.main`
  width: 95%;
  display: flex;
  color: #fff;
  flex-direction: column;
  border-radius: 5px;

  .conteinerEdit {
    background-color: var(--brand1);
    padding: 1rem;

    .leilao {
      border: 1.5px solid var(--grey10);
      color: var(--grey10);
      margin-left: 1rem;
    }
  }

  @media (min-width: 600px) {
    width: 735px;
    height: 388px;
    border-radius: 5px;
  }
`;

export const Cronometer = styled.div`
  background-color: #fff;
  color: #000;
  width: 123px;
  height: 36px;
  border-radius: 32px;
  margin-bottom: 35px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-weight: 500;
  font-size: 16px;
  #icon {
    width: 25px;
    height: 25px;
    color: var(--brand1);
  }
`;

export const Infos = styled.div`
  padding: 34px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 20px;
    font-weight: 600;
    color: var(--grey10);
    margin-bottom: 20px;
  }

  #info-car {
    color: var(--grey5);
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 24px;
  }
  #info-user {
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
    p {
      font-size: 14px;
      font-weight: 500;
      margin-left: 8px;
    }
    align-items: center;
  }
  #img {
    background-color: var(--brand1);
    border-radius: 100px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    align-items: center;
  }

  background-image: linear-gradient(rgba(0, 0, 0, 0.29), rgba(0, 0, 0, 1)),
    url(https://www.motortrend.com/uploads/sites/10/2017/05/2017-mercedes-benz-cls-class-400-sedan-angular-front.png);
  background-size: 100%;
  background-repeat: no-repeat;

  :hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 1, 1)),
      url(https://www.motortrend.com/uploads/sites/10/2017/05/2017-mercedes-benz-cls-class-400-sedan-angular-front.png);
  }
`;

export const InfoCar = styled.div`
  display: flex;
  flex-direction: column;

  #infos {
    display: flex;
    flex-direction: row;
  }

  #year {
    display: flex;
    width: auto;
    height: 32px;
    padding: 10px;
    background-color: var(--brand4);
    color: var(--brand1);
    font-size: 14px;
    font-weight: 500;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--brand1);
    margin-bottom: 20px;
  }

  #km {
    display: flex;
    width: auto;
    height: 32px;
    padding: 5px;
    background-color: var(--brand4);
    color: var(--brand1);
    font-size: 14px;
    font-weight: 500;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--brand1);
    margin-bottom: 20px;
    margin-left: 12px;
  }

  #price {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const Button = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  display: flex;
  align-items: center;
  background-color: var(--brand1);
  font-size: 16px;
  font-weight: 600;
  justify-content: space-between;

  #icon2 {
    width: 27px;
    height: 24px;
    cursor: pointer;
  }
  border-radius: 0px 0px 5px 5px;

  @media (min-width: 600px) {
    width: 735px;
    border-radius: 0px 0px 5px 5px;
  }
`;
