import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Body, Content, Header } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputError from "../../components/InputError";
import { forgotPass } from "../../service/forgotPass/forgotPass";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { useState } from "react";

export const ForgotPassword = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navegar = useNavigate();
  const [progress, setProgress] = useState(false);
  const schema = yup.object({
    email: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function forgotPassword(data) {
    forgotPass(data)
      .then((response) => {
        setProgress(true);
        setTimeout(() => {
          navegar("/forgotPassword/code", { replace: false });
        }, 2500);
      })
      .catch((err) => {
        if (err.request.status) {
          onOpen();
        }
      });
  }

  function Progress() {
    return progress === true ? (
      <CircularProgress isIndeterminate color="green.300" />
    ) : null;
  }
  return (
    <>
      <Navbar />
      <Body>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Erro!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>Usuario não existe ou email inválido</p>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Fechar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Content>
          <Header>
            <p>Inisira o email de usuario</p>
          </Header>
          <form onSubmit={handleSubmit(forgotPassword)}>
            <InputError
              id="email"
              error={errors.email}
              placeholder="Ex: samuel@kenzie.com.br"
              label="Email"
              registerForm={register("email")}
            />
            <button type="submit">Enviar</button>
            <div className="progress">
              <Progress />
            </div>
          </form>
        </Content>

        <Footer className="footer" />
      </Body>
    </>
  );
};
