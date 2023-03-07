import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IUser } from "../interface/userInterface";
import moment from "moment";
import { genericUserRota } from "../service/user/genericUserRota";
import { userDelete } from "../service/user/userDelete";
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import {
  ModalBoryStyled,
  ModalHeaderStryled,
} from "../components/ModalSucess/style";
import { useState } from "react";

import { ConteinerInput } from "../components/userModal/style";

////
import InputError from "../components/InputError";

interface modalProps {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

export const UserEditForm = ({ setState, user, setUser }: modalProps) => {
  const [userDeleteState, setUserDelete] = useState(false);

  const schema = yup.object({
    name: yup.string(),
    email: yup.string().email("E necessario uma email valido"),
    cpf: yup.string().matches(/^[0-9]{11}$/, {
      message: "cpf invalido",
      excludeEmptyString: true,
    }),
    tel: yup
      .string()
      .matches(
        /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/,
        {
          message: "telefone invalido",
          excludeEmptyString: true,
        }
      ),
    birthday: yup
      .string()
      .matches(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/, {
        message: "E necessario uma data valida dia/mes/ano",
        excludeEmptyString: true,
      }),
    description: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const updateUser = (data: any) => {
    const tokenJson = localStorage.getItem("token");
    if (tokenJson) {
      genericUserRota("/user", data, tokenJson)
        .then(({ data }) => {
          setUser(data);
          setState(false);
        })
        .catch((err) => console.log(err));
    }
  };

  const deleteModal = () => {
    setUserDelete(true);
  };

  const deleteUser = () => {
    const tokenJson = localStorage.getItem("token");
    if (tokenJson) {
      userDelete(tokenJson, user.id)
        .then(() => {
          setState(false);
          localStorage.clear();
          setUser({} as IUser);
        })
        .catch((err: any) => console.log(err));
    }
  };

  return (
    <form onSubmit={handleSubmit(updateUser)}>
      <p className="body-2-500">Infomações pessoais</p>

      <InputError
        id="name"
        error={errors.name}
        placeholder={user.name}
        label="Nome"
        registerForm={register("name")}
      />

      <InputError
        id="email"
        error={errors.email}
        placeholder={user.email}
        label="Email"
        registerForm={register("email")}
      />

      <InputError
        id="Cpf"
        error={errors.cpf}
        placeholder={user.cpf}
        label="Email"
        registerForm={register("cpf")}
      />

      <InputError
        id="tel"
        error={errors.tel}
        placeholder={user.tel}
        label="Celular"
        registerForm={register("tel")}
      />

      <InputError
        id="birthday"
        error={errors.birthday}
        placeholder={moment(user.birthday).calendar()}
        label="Data de nascimento"
        registerForm={register("birthday")}
      />

      <InputError
        id="description"
        error={errors.description}
        placeholder={user.description}
        label="Descrição"
        registerForm={register("description")}
      />

      <div className="conteiner--button">
        <button className="big negative" onClick={() => setState(false)}>
          Cancelar
        </button>
        <button className="big brand1" type="submit">
          Salvar alterações
        </button>
        <button
          className="big alert"
          type="button"
          onClick={() => deleteModal()}
        >
          deletar
        </button>
      </div>

      <Modal isOpen={userDeleteState} onClose={() => setUserDelete(true)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeaderStryled>Deletar conta</ModalHeaderStryled>
          <ModalCloseButton />
          <ModalBoryStyled>
            <p>
              você realmente deseja deletar sua conta esse e um processo
              permanente
            </p>
            <ConteinerInput>
              <button
                className="big negative"
                onClick={() => setUserDelete(true)}
              >
                Cancelar
              </button>
              <button className="big alert" onClick={() => deleteUser()}>
                Deletar
              </button>
            </ConteinerInput>
          </ModalBoryStyled>
        </ModalContent>
      </Modal>
    </form>
  );
};
