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
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();

  return (
    <>
      <NavbarStyle>
        <div>
          <button
            className="button-logo"
            onClick={() => Navigate("/dashboard", { replace: true })}
          >
            <h1>MOTORS shop</h1>
          </button>
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
                      <MenuItem
                        marginLeft={"12px"}
                        marginTop={"10px"}
                        onClick={() => Navigate("/Login", { replace: false })}
                      >
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
            <h2 className="body-1-600">
              <a href="#carros">Carros</a>
            </h2>
            <h2 className="body-1-600">
              <a href="#motos">Motos</a>
            </h2>
            <h2 className="body-1-600">
              <a href="#leilao">Leilão</a>
            </h2>
            <p></p>
            <h3
              className="body-1-600 login"
              onClick={() => Navigate("/Login", { replace: false })}
            >
              Fazer Login
            </h3>
            <button className="body-1-600 button-desktop">Cadastrar</button>
          </DesktopStyle>
        </div>
      </NavbarStyle>
    </>
  );
};

export default Navbar;
