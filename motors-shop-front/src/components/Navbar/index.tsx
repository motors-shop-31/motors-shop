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
import { useContext, useEffect, useState } from "react";
import { UserModal } from "../userModal/userModal";
import { UserEditForm } from "../../form/userEdit";
import { AddressEdit } from "../../form/addresEdit";
import { getUser } from "../../service/user/getUser";

import { IUser } from "../../interface/userInterface";
import { GlobalContext } from "../../contexts/GlobalContext";

const Navbar = () => {
  const Navigate = useNavigate();

  const [user, setUser] = useState({} as IUser);
  const { setLogged } = useContext(GlobalContext);

  const [userEdit, setUserEdit] = useState(false);
  const [addressEdit, setAddressEdit] = useState(false);

  useEffect(() => {
    const tokenJson = localStorage.getItem("token");

    if (tokenJson) {
      setLogged(true);
      getUser(tokenJson)
        .then((res) => {
          setUser(res.data);
        })
        .catch((e) => {
          window.localStorage.clear();
          setUser({} as IUser);
          setLogged(false);
        });
    }
  }, []);

  let firstLetterProduc = "";
  let secondLetterProduc = "";

  if (user?.name) {
    firstLetterProduc = user.name.trim().split(" ")[0][0]?.toLocaleUpperCase();

    if (user.name.split(" ").length > 1) {
      secondLetterProduc = user.name.split(" ")[1][0]?.toLocaleUpperCase();
    }

    window.localStorage.setItem(
      "userNameLogo",
      `${firstLetterProduc}${secondLetterProduc}
    `.trim()
    );

    window.localStorage.setItem("userName", user.name);
  }

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
                        {user?.name ? (
                          <>
                            <section className="div-name">
                              <h3 className="logo-name">
                                {`${firstLetterProduc}${secondLetterProduc}
                                `.trim()}
                              </h3>
                              <h3 className="name">{user?.name}</h3>
                            </section>
                            <section className="div-info">
                              <MenuItem
                                paddingLeft={"28px"}
                                marginTop={"2px"}
                                onClick={() => setUserEdit(!userEdit)}
                              >
                                Editar Perfil
                              </MenuItem>
                              <MenuItem
                                paddingLeft={"28px"}
                                marginTop={"5px"}
                                onClick={() => setAddressEdit(!addressEdit)}
                              >
                                Editar endereço
                              </MenuItem>
                              {user.account_type ? (
                                <MenuItem
                                  paddingLeft={"28px"}
                                  marginTop={"5px"}
                                  onClick={() =>
                                    Navigate("/myAds", { replace: true })
                                  }
                                >
                                  Meus Anúncios
                                </MenuItem>
                              ) : (
                                <></>
                              )}
                              <MenuItem
                                onClick={() => {
                                  window.localStorage.clear();
                                  setUser({} as IUser);
                                }}
                                paddingLeft={"28px"}
                                marginTop={"5px"}
                              >
                                Sair
                              </MenuItem>
                            </section>
                          </>
                        ) : (
                          <>
                            <MenuItem
                              marginLeft={"12px"}
                              marginTop={"10px"}
                              onClick={() =>
                                Navigate("/Login", { replace: false })
                              }
                            >
                              Fazer login
                            </MenuItem>
                            <div className="div-button ">
                              <button
                                className="button-mobile"
                                onClick={() =>
                                  Navigate("/Cadastro", { replace: false })
                                }
                              >
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
            {user?.name ? (
              <>
                <section className="section-name">
                  <h3 className="logo-name">
                    {`${firstLetterProduc}${secondLetterProduc}`.trim()}
                  </h3>
                  <h3 className="name">{user?.name}</h3>
                  <section className="section-dropdown">
                    <button onClick={() => setUserEdit(!userEdit)}>
                      Editar Perfil
                    </button>
                    <button onClick={() => setAddressEdit(!addressEdit)}>
                      Editar endereço
                    </button>
                    {user.account_type ? (
                      <button
                        onClick={() => Navigate("/myAds", { replace: true })}
                      >
                        Meus Anúncios
                      </button>
                    ) : (
                      <></>
                    )}
                    <button
                      onClick={() => {
                        window.localStorage.clear();
                        setUser({} as IUser);
                        setLogged(false);
                      }}
                    >
                      Sair
                    </button>
                  </section>
                </section>
              </>
            ) : (
              <>
                <h3
                  className="body-1-600 button-login"
                  onClick={() => Navigate("/Login", { replace: false })}
                >
                  Fazer Login
                </h3>
                <button
                  className="body-1-600 button-desktop"
                  onClick={() => Navigate("/Cadastro", { replace: false })}
                >
                  Cadastrar
                </button>
              </>
            )}
          </DesktopStyle>
        </div>

        <UserModal
          state={userEdit}
          setState={setUserEdit}
          children={
            <UserEditForm
              setState={setUserEdit}
              user={user}
              setUser={setUser}
            />
          }
        />

        <UserModal
          state={addressEdit}
          setState={setAddressEdit}
          children={
            <AddressEdit
              setState={setAddressEdit}
              user={user}
              setUser={setUser}
            />
          }
        />
      </NavbarStyle>
    </>
  );
};

export default Navbar;
