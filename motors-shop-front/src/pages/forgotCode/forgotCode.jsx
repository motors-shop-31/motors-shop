import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Body, Content, Header } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputError from "../../components/InputError";
import { forgotCodeApi } from "../../service/forgotPass/forgotPass";
import { useContext } from "react";
import { AuthContext } from "../../contexts/modalContext";

const ForgotCode = () => {
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
      setCode(data.code);
      navegar("/forgotPassword/resetPassword", { replace: false });
    });
  }

  return (
    <>
      <Navbar />
      <Body>
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
          </form>
        </Content>

        <Footer className="footer" />
      </Body>
    </>
  );
};

export default ForgotCode;
