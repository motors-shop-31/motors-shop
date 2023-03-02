// import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "./style";
import { IPostResponse, ValuesFunctions } from "../../contexts/InputsContext";
import { ModalHeaderStryled } from "../ModalSucess/style";
import { AuthContext } from "../../contexts/modalContext";
import { GrFormClose } from "react-icons/gr";

const ModalDelete = () => {
  const { formSchema, onSubmitFunction } = useContext(ValuesFunctions);
  const { modal, openModal, closeModal, modalDelete, closeModalDelete} = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    // formState: { errors }
  } = useForm<IPostResponse>({
    resolver: yupResolver(formSchema),
  });

  return modalDelete === true ?  (
    <>
      <Modal>
        <ModalBody>
          <ModalHeader>
            <p>Excluir anúncio</p>
            <GrFormClose id="xis" onClick={() => closeModalDelete()} />
          </ModalHeader>
          <ModalContent>
            <p className="title">Tem certeza que deseja remover este anúncio?</p>
            <p className="description">
              Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
              conta e removerá seus dados de nossos servidores.
            </p>
          </ModalContent>
          <div className='buttons'>
                <button className='cancel'>Cancelar</button>
                <button className='delete'>Sim, excluir anúncio</button>
              </div>
        </ModalBody>
      </Modal>
    </>
  ) : null;
};

export default ModalDelete;
