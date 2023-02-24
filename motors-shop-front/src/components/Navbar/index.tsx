import { NavbarStyle, MobileStyle, DesktopStyle } from "./styles";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <NavbarStyle>
        <div>
          <h1>MOTORS shop</h1>
          <MobileStyle>
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    isActive={isOpen}
                    as={Button}
                    marginRight={"32px"}
                    marginTop={"10px"}
                    _hover={{ bgColor: "none" }}
                    _active={{ bgColor: "none" }}
                    bg={"none"}
                  >
                    {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
                  </MenuButton>
                  <MenuList
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                  >
                    <section className="body-1-600 items">
                      <MenuDivider />
                      <MenuItem marginLeft={"16px"}>
                        <a href="#carros">Carros</a>
                      </MenuItem>
                      <MenuItem marginLeft={"16px"} marginTop={"10px"}>
                        <a href="#motos">Motos</a>
                      </MenuItem>
                      <MenuItem marginLeft={"16px"} marginTop={"10px"}>
                        <a href="#leilao">Leilão</a>
                      </MenuItem>
                      <MenuDivider />
                      <MenuItem marginLeft={"12px"} marginTop={"10px"}>
                        Fazer login
                      </MenuItem>
                      <div className="div-button">
                        <button className="button-mobile">Cadastrar</button>
                      </div>
                    </section>
                  </MenuList>
                </>
              )}
            </Menu>
          </MobileStyle>
          <DesktopStyle>
            <h2>
              <a href="#carros" className="body-1-600">
                Carros
              </a>
            </h2>
            <h2>
              <a href="#motos" className="body-1-600">
                Motos
              </a>
            </h2>
            <h2>
              <a href="#leilao" className="body-1-600">
                Leilão
              </a>
            </h2>
            <p></p>
            <h3 className="body-1-600">Fazer Login</h3>
            <button className="body-1-600 button-desktop">Cadastrar</button>
          </DesktopStyle>
        </div>
      </NavbarStyle>
    </>
  );
};

export default Navbar;
