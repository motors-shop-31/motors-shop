// import Footer from "../../components/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Navbar from "../../components/Navbar";
import { Conteiner } from "./styles";

import jwt from "jwt-decode";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import {
  ModalBoryStyled,
  ModalHeaderStryled,
} from "../../components/ModalSucess/style";
import Footer from "../../components/Footer";
import { loginPost } from "../../service/login/login";
import InputError from "../../components/InputError";

const Login = () => {
  const navegar = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const tokenJson = localStorage.getItem("token");

  useEffect(() => {
    if (tokenJson) {
      navegar("/Dashboard", { replace: false });
    }
  }, []);

  const schema = yup.object({
    name: yup.string().required("Campo obrigatorio"),
    password: yup.string().required("Campo obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function login(data) {
    loginPost(data)
      .then((response) => {
        const { token } = response.data;
        const user = jwt(token);

        localStorage.setItem("token", token);
        localStorage.setItem("userId", user.id);

        navegar("/Dashboard", { replace: false });
      })
      .catch((erro) => onOpen());
  }

  return (
    <Conteiner>
      <Navbar />

      <form onSubmit={handleSubmit(login)}>
        <h1 className="Heading-5-500">Login</h1>

        <InputError
          id="usuario"
          error={errors.name}
          placeholder="Digitar usuário"
          label="Usuário"
          registerForm={register("name")}
        />

        <InputError
          id="senha"
          error={errors.password}
          placeholder="Digitar senha"
          label="Senha"
          registerForm={register("password")}
        />

        <p className="body-2-500 password">Esqueci minha senha</p>

        <button className="medium brand1">Entrar</button>
        <p className="body-2-500">Ainda não possui conta?</p>
        <button className="medium Outline2">Cadastrar</button>
      </form>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeaderStryled>Erro!</ModalHeaderStryled>
          <ModalCloseButton />
          <ModalBoryStyled>
            <p className="title">Usuario ou senha invalido</p>
          </ModalBoryStyled>
        </ModalContent>
      </Modal>

      <Footer />
    </Conteiner>
  );
};

export { Login };
