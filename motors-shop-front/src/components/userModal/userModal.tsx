import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";

import { ModalBoryStyled, ModalHeaderStryled } from "../ModalSucess/style";
import { FormStyle } from "./style";

// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm } from "react-hook-form";

interface modalProps {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

export const UserModal = ({ state, setState, children }: modalProps) => {
  //   const { register, handleSubmit } = useForm({});

  //   const {
  //     register,
  //     handleSubmit,
  //     watch,
  //     formState: { errors },
  //   } = useForm();

  //   const onSubmit = (data) => console.log(data);

  return (
    <Modal isOpen={state} onClose={() => setState(!state)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeaderStryled>Editar perfil</ModalHeaderStryled>
        <ModalCloseButton />
        <ModalBoryStyled>
          <FormStyle>{children}</FormStyle>
        </ModalBoryStyled>
      </ModalContent>
    </Modal>
  );
};
