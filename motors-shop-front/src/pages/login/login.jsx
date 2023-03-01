// import Footer from "../../components/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Navbar from "../../components/Navbar";
import { Conteiner } from "./styles";

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
    console.log(data);
    onOpen();
  }

  return (
    <Conteiner>
      <Navbar />

      <form onSubmit={handleSubmit(login)}>
        <h1 className="Heading-5-500">Login</h1>
        <div>
          <label htmlFor="usuario">Usuário</label>
          <input
            type="text"
            placeholder="Digitar usuário"
            id="usuario"
            {...register("name")}
          />
        </div>

        <div>
          <label htmlFor="senha">Senha</label>
          <input
            type="text"
            placeholder="Digitar senha"
            id="senha"
            {...register("password")}
          />
        </div>

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

      {/* <Footer /> */}
    </Conteiner>
  );
};

export { Login };
