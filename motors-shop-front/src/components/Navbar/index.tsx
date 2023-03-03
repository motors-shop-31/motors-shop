import { NavbarStyle, MobileStyle, DesktopStyle } from "./styles";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button,
  // Modal,
  // ModalOverlay,
  // ModalContent,
  // ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ModalBoryStyled, ModalHeaderStryled } from "../ModalSucess/style";
import { UserModal } from "../userModal/userModal";
import { UserEditForm } from "../../form/userEdit";
import { AddressEdit } from "../../form/addresEdit";


const Navbar = () => {
  const Navigate = useNavigate();
  const [login, setLogin] = useState(true);
  const [anunciante, setAnunciante] = useState(true);
  const [userEdit, setUserEdit] = useState(true);


  return (
    <>
      <NavbarStyle>
        <div className="div-main">
          <button
            className="button-logo"
            onClick={() => Navigate("/dashboard", { replace: true })}
          >
            <h1>MOTORS shop</h1>
          </button>
          <MobileStyle>
            <div className="div-main">
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
                        <MenuItem paddingLeft={"27px"}>
                          <a href="#carros">Carros</a>
                        </MenuItem>
                        <MenuItem paddingLeft={"27px"} marginTop={"10px"}>
                          <a href="#motos">Motos</a>
                        </MenuItem>
                        <MenuItem paddingLeft={"27px"} marginTop={"10px"}>
                          <a href="#leilao">Leilão</a>
                        </MenuItem>
                        <MenuDivider />
                        {login ? (
                          <>
                            <section className="div-name">
                              <h3 className="logo-name">JD</h3>
                              <h3 className="name">João Dantas</h3>
                            </section>
                            <section className="div-info">
                              <MenuItem paddingLeft={"28px"} marginTop={"2px"}>
                                Editar Perfil
                              </MenuItem>
                              <MenuItem paddingLeft={"28px"} marginTop={"5px"}>
                                Editar endereço
                              </MenuItem>
                              {anunciante ? (
                                <MenuItem
                                  paddingLeft={"28px"}
                                  marginTop={"5px"}
                                >
                                  Meus Anúncios
                                </MenuItem>
                              ) : (
                                <></>
                              )}
                              <MenuItem
                                onClick={() => setLogin(false)}
                                paddingLeft={"28px"}
                                marginTop={"5px"}
                              >
                                Sair
                              </MenuItem>
                            </section>
                          </>
                        ) : (
                          <>
                            <MenuItem marginLeft={"12px"} marginTop={"10px"} onClick={() => Navigate("/Login", { replace: false })}>
                              Fazer login
                            </MenuItem>
                            <div className="div-button ">
                              <button className="button-mobile" onClick={() => Navigate("/Cadastro", { replace: false })}>
                                Cadastrar
                              </button>
                            </div>
                          </>
                        )}
                      </section>
                    </MenuList>
                  </>
                )}
              </Menu>
            </div>
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
            {login ? (
              <>
                <section className="section-name">
                  <h3 className="logo-name">JD</h3>
                  <h3 className="name">João Dantas</h3>
                  <section className="section-dropdown">
                    <button>Editar Perfil</button>
                    <button>Editar endereço</button>
                    {anunciante ? <button>Meus Anúncios</button> : <></>}
                    <button onClick={() => setLogin(false)}>Sair</button>
                  </section>
                </section>
              </>
            ) : (
              <>
                <h3 className="body-1-600" onClick={() => Navigate("/Login", { replace: false })}>Fazer Login</h3>
                <button className="body-1-600 button-desktop" onClick={() => Navigate("/Cadastro", { replace: false })}>Cadastrar</button>
              </>
            )}
          </DesktopStyle>
        </div>

        {/* <UserModal
          state={userEdit}
          setState={setUserEdit}
          children={<AddressEdit setState={setUserEdit} />}
        /> */}

        {/* <UserModal
          state={userEdit}
          setState={setUserEdit}
          children={<UserEditForm setState={setUserEdit} />}
        /> */}
      </NavbarStyle>
    </>
  );
};

export default Navbar;
