import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Body, Content, Header } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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
import { InputErrorPassword } from "../../components/InputError";
import api from "../../service/api";
import { AuthContext } from "../../contexts/modalContext";
import { useContext } from "react";

const ResetPassword = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navegar = useNavigate();
  const schema = yup.object({
    new_password: yup.string().required("Campo obrigatório"),
    confirm_password: yup.string().required("Campo obrigatório"),
  });
  const { code } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function resetPasswordFunction(data) {
    api.patch(`/forgot/${code}`, data).then((response) => {
      onOpen();
      setTimeout(() => {
        navegar("/Login", { replace: false });
      }, 2500);
    });
  }

  return (
    <>
      <Navbar />
      <Body>
        <Content>
          <Header>
            <p>Inisira a nova senha</p>
          </Header>
          <form onSubmit={handleSubmit(resetPasswordFunction)}>
            <InputErrorPassword
              id="new_password"
              error={errors.new_password}
              placeholder="Digite a nova senha"
              label="Nova Senha"
              registerForm={register("new_password")}
            />
            <InputErrorPassword
              id="confirm_password"
              error={errors.confirm_password}
              placeholder="Confirmação da senha"
              label="Confirmar Senha"
              registerForm={register("confirm_password")}
            />
            <button type="submit">Enviar</button>
          </form>
        </Content>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeaderStryled>Sucesso!</ModalHeaderStryled>
            <ModalCloseButton />
            <ModalBoryStyled>
              <p className="title">
                Senha atualizada com sucesso, você será redirecionado em breve
              </p>
            </ModalBoryStyled>
          </ModalContent>
        </Modal>
        <Footer className="footer" />
      </Body>
    </>
  );
};

export default ResetPassword;
