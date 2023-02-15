import { FooterStyle } from "./styles";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <FooterStyle>
        <h1 className="Heading-5-600">
          <span>MOTORS</span> shop
        </h1>
        <p className="body-2-400">© 2022 - Todos os direitos reservados.</p>
        <BsFillArrowUpSquareFill className="arrow-up" />
      </FooterStyle>
    </>
  );
};

export default Footer;
