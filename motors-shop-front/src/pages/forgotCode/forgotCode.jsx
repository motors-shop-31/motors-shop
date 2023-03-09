import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Body, Content, Header } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputError from "../../components/InputError";
import { forgotCodeApi } from "../../service/forgotPass/forgotPass";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/modalContext";
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
import { CircularProgress } from "@chakra-ui/react";

const ForgotCode = () => {
  const [progress, setProgress] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navegar = useNavigate();
  const schema = yup.object({
    code: yup.number().required("Campo obrigatório"),
  });
  const { setCode } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function forgotCode(data) {
    forgotCodeApi(data).then((response) => {
      setProgress(true);
      setCode(data.code);
      setTimeout(() => {
        navegar("/forgotPassword/resetPassword", { replace: false });
      }, 1500);
    }).catch((err) => {
      if (err.request.status) {
        onOpen();
      }
    })
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
              <p>Código inválido</p>
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
            <p>Inisira o código enviado pelo email</p>
          </Header>
          <form onSubmit={handleSubmit(forgotCode)}>
            <InputError
              id="code"
              error={errors.code}
              placeholder="Ex: 0000"
              label="Código"
              registerForm={register("code")}
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

export default ForgotCode;
