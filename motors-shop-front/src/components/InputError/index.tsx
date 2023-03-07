import { Div, Error } from "./styles";
import { BiErrorCircle } from "react-icons/bi";
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

// interface IInuput {
//   label: string;
//   error: FieldError | undefined;
//   placeholder: string;
//   id: string;
//   registerForm: UseFormRegister<FieldValues>;
// }

interface IInuput {
  label: string;
  error: any;
  placeholder: string;
  id: string;
  registerForm: UseFormRegister<FieldValues>;
  type?: string;
}

const InputError = ({
  id,
  label,
  error,
  placeholder,
  registerForm,
  type,
}: IInuput) => {
  const [visibleConfirm, setVisibleConfirm] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Div className="Teste">
        <label htmlFor="id">{label}</label>
        {error?.message && (
          <Error>
            <BiErrorCircle />
            <span>{error?.message}</span>
          </Error>
        )}
      </Div>
      <div className="InputContaine">
        <input
          placeholder={placeholder}
          {...registerForm}
          type={
            type === "password"
              ? visible || visibleConfirm
                ? "text"
                : "password"
              : type
          }
        />
        {label === "Senha" &&
          (visible ? (
            <AiFillEye
              style={{ cursor: "pointer" }}
              onClick={() => setVisible(false)}
            />
          ) : (
            <AiFillEyeInvisible
              style={{ cursor: "pointer" }}
              onClick={() => setVisible(true)}
            />
          ))}
        {label === "Confirmar Senha" &&
          (visibleConfirm ? (
            <AiFillEye
              style={{ cursor: "pointer" }}
              onClick={() => setVisibleConfirm(false)}
            />
          ) : (
            <AiFillEyeInvisible
              style={{ cursor: "pointer" }}
              onClick={() => setVisibleConfirm(true)}
            />
          ))}
      </div>
    </>
  );
};

export const InputErrorPassword = ({
  id,
  label,
  error,
  placeholder,
  registerForm,
}: IInuput) => {
  return (
    <>
      <Div className="Teste">
        <label htmlFor="id">{label}</label>
        {error?.message && (
          <Error>
            <BiErrorCircle />
            <span>{error?.message}</span>
          </Error>
        )}
      </Div>
      <div className="InputContaine">
        <input type="password" placeholder={placeholder} {...registerForm} />
      </div>
    </>
  );
};

export default InputError;
