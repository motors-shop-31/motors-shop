import { IUser } from "../interface/userInterface";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { genericUserRota } from "../service/user/genericUserRota";
import InputError from "../components/InputError";

interface modalProps {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

export const AddressEdit = ({ setState, user, setUser }: modalProps) => {
  const schema = yup.object({
    cep: yup.string().matches(/^[0-9]{8}$/, {
      message: "E necessario um cep valido",
      excludeEmptyString: true,
    }),
    state: yup.string(),
    city: yup.string(),
    street: yup.string(),
    number: yup.string(),
    complement: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const changeAddress = (body: any) => {
    const tokenJson = localStorage.getItem("token");
    if (tokenJson) {
      genericUserRota("/user/address", body, tokenJson)
        .then(({ data }) => {
          setState(false);
          user.address = data;
          setUser(user);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <form onSubmit={handleSubmit(changeAddress)}>
      <p className="body-2-500">Infomações de endereço</p>

      <InputError
        id="cep"
        error={errors.cep}
        placeholder={user.address.cep.toString()}
        label="Cep"
        registerForm={register("cep")}
      />

      <div className="conteiner--input">
        <div>
          <InputError
            id="state"
            error={errors.state}
            placeholder={user.address.state}
            label="Estado"
            registerForm={register("state")}
          />
        </div>

        <div>
          <InputError
            id="city"
            error={errors.city}
            placeholder={user.address.city}
            label="Cidade"
            registerForm={register("city")}
          />
        </div>
      </div>

      <InputError
        id="street"
        error={errors.street}
        placeholder={user.address.street}
        label="Rua"
        registerForm={register("street")}
      />

      <div className="conteiner--input">
        <div>
          <InputError
            id="number"
            error={errors.number}
            placeholder={user.address.number}
            label="Número"
            registerForm={register("number")}
          />
        </div>

        <div>
          <InputError
            id="complement"
            error={errors.complement}
            placeholder={user.address.complement}
            label="Complemento"
            registerForm={register("complement")}
          />
        </div>
      </div>

      <div className="conteiner--button">
        <button
          className="big negative"
          type="button"
          onClick={() => setState(false)}
        >
          Cancelar
        </button>
        <button className="big brand1" type="submit">
          Salvar alterações
        </button>
      </div>
    </form>
  );
};
