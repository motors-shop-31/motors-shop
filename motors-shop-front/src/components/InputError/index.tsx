import { Div, Error } from "./styles";
import { BiErrorCircle } from "react-icons/bi";
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";

interface IInuput {
  label: string;
  error: FieldError | undefined;
  placeholder: string;
  id: string;
  registerForm: UseFormRegister<FieldValues>;
}

const InputError = ({
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
        <input placeholder={placeholder} {...registerForm} />
      </div>
    </>
  );
};

export default InputError;
