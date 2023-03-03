import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Body, Content, Header } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputError from "../../components/InputError";
import { forgotPass } from "../../service/forgotPass/forgotPass";

export const ForgotPassword = () => {
  const navegar = useNavigate();
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
    forgotPass(data).then((response) => {
      navegar("/forgotPassword/code", { replace: false });
    });
  }

  return (
    <>
      <Navbar />
      <Body>
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
          </form>
        </Content>

        <Footer className="footer" />
      </Body>
    </>
  );
};
