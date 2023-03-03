interface modalProps {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddressEdit = ({ setState }: modalProps) => {
  return (
    <>
      <p className="body-2-500">Infomações de endereço</p>
      <div>
        <label htmlFor="Teste">CEP</label>
        <input type="text" placeholder="89888.888" />
      </div>

      <div className="conteiner--input">
        <div>
          <label htmlFor="Teste">Estado</label>
          <input type="text" placeholder="Paraná" />
        </div>

        <div>
          <label htmlFor="Teste">Cidade</label>
          <input type="text" placeholder="Curitiba" />
        </div>
      </div>

      <div>
        <label htmlFor="Teste">Rua</label>
        <input type="text" placeholder="Rua do paraná" />
      </div>

      <div className="conteiner--input">
        <div>
          <label htmlFor="Teste">Número</label>
          <input type="text" placeholder="1029" />
        </div>

        <div>
          <label htmlFor="Teste">Complemento</label>
          <input type="text" placeholder="Apart 12" />
        </div>
      </div>

      <div className="conteiner--button">
        <button className="big negative" onClick={() => setState(false)}>
          Cancelar
        </button>
        <button className="big brand1" type="submit">
          Salvar alterações
        </button>
      </div>
    </>
  );
};
