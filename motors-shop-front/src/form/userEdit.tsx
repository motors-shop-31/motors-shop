interface modalProps {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserEditForm = ({ setState }: modalProps) => {
  return (
    <>
      <p className="body-2-500">Infomações pessoais</p>
      <div>
        <label htmlFor="Teste">Nome</label>
        <input type="text" placeholder="samuel leao" />
      </div>

      <div>
        <label htmlFor="Teste">Email</label>
        <input type="text" placeholder="samuel@kenzie.com.br" />
      </div>

      <div>
        <label htmlFor="Teste">CPF</label>
        <input type="text" placeholder="900.880.090-00" />
      </div>

      <div>
        <label htmlFor="Teste">Celular</label>
        <input type="text" placeholder="(084) 90909-9092" />
      </div>

      <div>
        <label htmlFor="Teste">Data de nascimento</label>
        <input type="text" placeholder="09/12/99" />
      </div>

      <div>
        <label htmlFor="Teste">Descrição</label>

        <input placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
      </div>

      <div className="conteiner--button">
        <button className="big negative" onClick={() => setState(false)}>
          Cancelar
        </button>
        <button className="big brand1">Salvar alterações</button>
      </div>
    </>
  );
};
