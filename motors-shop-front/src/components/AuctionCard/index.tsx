import React from "react";
import { Main, Cronometer, Infos, InfoCar, Button } from "./style";
import { BiTimeFive } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

interface props {
  myAds: boolean;
}

export const AuctionCard = ({ myAds }: props) => {
  return (
    <>
      <Main>
        <Infos>
          <Cronometer>
            <BiTimeFive id="icon" /> 01:58:00{" "}
          </Cronometer>
          <h1>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 </h1>
          <p id="info-car">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
          </p>
          <div id="info-user">
            <div id="img">RT</div>
            <p>Rodrigo Tavares</p>
          </div>
          <InfoCar>
            <div id="infos">
              <p id="year">2013</p>
              <p id="km">0 KM</p>
            </div>
            <p id="price">R$ 00.000,00</p>
          </InfoCar>
        </Infos>
        {myAds ? (
          <div className="conteinerEdit">
            <button className="medium Outline1 leilao">Editar</button>
            <button className="medium Outline1 leilao">Ver como</button>
          </div>
        ) : (
          <Button>
            <p>Acessar página do leilão</p>
            <BsArrowRight id="icon2" />
          </Button>
        )}
      </Main>
    </>
  );
};
