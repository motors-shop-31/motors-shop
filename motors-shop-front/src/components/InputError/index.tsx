import { Div, Error } from "./styles";
import { BiErrorCircle } from "react-icons/bi";
import { FieldError } from "react-hook-form";

interface IInuput {
  label: string;
  error: FieldError | undefined;
  placeholder: string;
  id: string;
}

const InputError = ({ id, label, error, placeholder }: IInuput) => {
  return (
    <>
      <Div>
        <label>{label}</label>
        {error?.message && (
          <Error>
            <BiErrorCircle />
            <span>{error?.message}</span>
          </Error>
        )}
      </Div>
      <div className="InputContaine">
        {/* <input placeholder={placeholder} {...register(id)} /> */}
        <input placeholder={placeholder} />
      </div>
    </>
  );
};

export default InputError;
