// import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
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
import { createUser } from "../../service/user/createUser";

const Cadastro = () => {
  const navegar = useNavigate();
  const [userType, setUserType] = useState(false);
  const [cadastroModal, setCadastroModal] = useState(false);
  const [erroCadastro, setErroCadastro] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const schema = yup.object({
    name: yup.string().required("Campo obrigatorio"),
    email: yup.string().email().required("Campo obrigatorio"),
    password: yup
      .string()
      .required("Campo obrigatorio")
      .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
      .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
      .matches(/(\d)/, "Deve conter ao menos 1 número")
      .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
      .matches(/.{8,}/, "deve conter ao menos 8 dígitos"),
    confirmPassword: yup
      .string()
      .required("Campo obrigatorio")
      .oneOf([yup.ref("password")], "Deve ser igual a senha"),
    cpf: yup
      .string()
      .required("Campo obrigatorio")
      .matches(/^[0-9]{11}$/, "cpf invalido"),
    birthday: yup
      .string()
      .required("Campo obrigatorio")
      .matches(
        /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
        "E necessario um data valida"
      )
      .typeError("E necessario uma data valida"),
    tel: yup
      .string()
      .required("Campo obrigatorio")
      .matches(
        /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/,
        "telefone invalido"
      ),
    description: yup.string("Campo obrigatorio"),
    account_type: yup.string(),
    cep: yup
      .string()
      .required("Campo obrigatorio")
      .matches(/^[0-9]{8}$/, "E necessario um cep valido")
      .typeError("E necessario um cep valido"),
    state: yup.string().required("Campo obrigatorio"),
    city: yup.string().required("Campo obrigatorio"),
    street: yup.string().required("Campo obrigatorio"),
    number: yup.string().required("Campo obrigatorio"),
    complement: yup.string("Campo obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function cadastro(data) {
    const { cep, state, street, city, number, complement, ...rest } = data;
    const body = {
      ...rest,
      account_type: userType,
      address: { cep, state, street, city, number, complement },
    };
    console.log(body);

    createUser(body)
      .then((res) => {
        console.log(res);
        setCadastroModal(true);
        onOpen();
      })
      .catch((erro) => {
        console.log(erro);
        setErroCadastro("");
        setCadastroModal(false);
        onOpen();
      });
  }

  return (
    <Conteiner>
      <Navbar />
      <form onSubmit={handleSubmit(cadastro)}>
        <h1 className="Heading-5-500">Cadastro</h1>
        <p className="body-2-500">Infomações pessoais</p>
        <InputError
          id="nome"
          error={errors.name}
          placeholder="Ex: Samuel Leão"
          label="Nome"
          registerForm={register("name")}
        />
        <InputError
          id="email"
          error={errors.email}
          placeholder="Ex: samuel@kenzie.com.br"
          label="Email"
          registerForm={register("email")}
        />
        <InputError
          id="cpf"
          error={errors.cpf}
          placeholder="000.000.000-00"
          label="Cpf"
          registerForm={register("cpf")}
        />
        <InputError
          id="celular"
          error={errors.tel}
          placeholder="000.000.000-00"
          label="Celular"
          registerForm={register("tel")}
        />

        <InputError
          id="birthday"
          error={errors.birthday}
          placeholder="00/00/00"
          label="Data de nascimento"
          registerForm={register("birthday")}
        />

        <InputError
          id="description"
          error={errors.description}
          placeholder="Digitar descrição"
          label="Digitar descrição"
          registerForm={register("description")}
        />

        <p>Infomações de endereço</p>

        <InputError
          id="cep"
          error={errors.cep}
          placeholder="00000.000"
          label="CEP"
          registerForm={register("cep")}
        />

        <div className="conteiner--input">
          <div>
            <InputError
              id="state"
              error={errors.state}
              placeholder="Digitar Estado"
              label="Estado"
              registerForm={register("state")}
            />
          </div>

          <div>
            <InputError
              id="city"
              error={errors.city}
              placeholder="Digitar cidade"
              label="Cidade"
              registerForm={register("city")}
            />
          </div>
        </div>

        <InputError
          id="city"
          error={errors.street}
          placeholder="Digitar rua"
          label="Rua"
          registerForm={register("street")}
        />

        <div className="conteiner--input">
          <div>
            <InputError
              id="number"
              error={errors.number}
              placeholder="Digitar número"
              label="Número"
              registerForm={register("number")}
            />
          </div>

          <div>
            <InputError
              id="complemento"
              error={errors.complement}
              placeholder="Ex: apart 307"
              label="Complemento"
              registerForm={register("complement")}
            />
          </div>
        </div>

        <p>Tipo de conta</p>
        <div className="conteiner--button">
          <button
            type="button"
            className={`medium ${userType ? "Outline2" : "brand1"}`}
            onClick={() => setUserType(false)}
          >
            Comprador
          </button>
          <button
            type="button"
            className={`medium ${userType ? "brand1" : "Outline2"}`}
            onClick={() => setUserType(true)}
          >
            Anuciante
          </button>
        </div>

        <InputError
          id="password"
          error={errors.password}
          placeholder="Digitar senha"
          label="Senha"
          registerForm={register("password")}
          type="password"
        />

        <InputError
          id="confirmPassword"
          error={errors.confirmPassword}
          placeholder="Digitar senha"
          label="Confirmar Senha"
          registerForm={register("confirmPassword")}
          type="password"
        />

        <button className="big brand1 cadastro">Finalizar cadastro</button>
      </form>
      {!cadastroModal ? (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeaderStryled>Erro!</ModalHeaderStryled>
            <ModalCloseButton />
            <ModalBoryStyled>
              <p className="title">Cadastro invalido email ja registrado</p>
            </ModalBoryStyled>
          </ModalContent>
        </Modal>
      ) : (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeaderStryled>Sucesso!</ModalHeaderStryled>
            <ModalCloseButton />
            <ModalBoryStyled>
              <p className="title">Sua conta foi criada com sucesso!</p>
              <p>
                Agora você poderá ver seus negócios crescendo em grande escala
              </p>
              <button onClick={() => navegar("/Login", { replace: false })}>
                Ir para o login
              </button>
            </ModalBoryStyled>
          </ModalContent>
        </Modal>
      )}
      <Footer />
    </Conteiner>
  );
};

export { Cadastro };
