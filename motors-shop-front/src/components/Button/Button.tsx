import { Conteiner } from "./styled";

interface IPops {
  border: String;
  color: string;
  background: string;
}

export const ButtonComponets = (props: IPops) => {
  return (
    <Conteiner props={props}>
      <button>Ola mundo teste</button>
    </Conteiner>
  );
};
