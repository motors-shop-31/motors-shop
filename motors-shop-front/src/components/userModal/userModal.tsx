import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";

import { ModalBoryStyled, ModalHeaderStryled } from "../ModalSucess/style";
import { FormStyleConteiner } from "./style";

interface modalProps {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

export const UserModal = ({ state, setState, children }: modalProps) => {
  return (
    <Modal isOpen={state} onClose={() => setState(!state)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeaderStryled>Editar perfil</ModalHeaderStryled>
        <ModalCloseButton />
        <ModalBoryStyled>
          <FormStyleConteiner>{children}</FormStyleConteiner>
        </ModalBoryStyled>
      </ModalContent>
    </Modal>
  );
};
