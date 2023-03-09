import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import api from "../../service/api";
import { Container } from "./styles";

interface Iprops {
  idComment: string;
}

export const ModalMoreComments = ({ idComment }: Iprops) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState("");
  const { listComment } = useContext(GlobalContext);

  let token = localStorage.getItem("token");

  const initialRef = React.useRef(null);

  const { id } = useParams();

  function updateComment() {
    const data = {
      text: value,
    };

    api
      .patch(`/comments/${idComment}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        onClose();
      })
      .catch((err) => {
        console.log(err);
      });

    listComment(id);
  }

  return (
    <>
      <span className="more" onClick={onOpen}>
        <FiMoreHorizontal />
      </span>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Atualize seu comentário</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Seu Comentário</FormLabel>

              <Input
                ref={initialRef}
                placeholder="Digite um novo comentário"
                onChange={(e) => setValue(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Container>
              <button className="alert body-1-400" onClick={onClose}>
                Cancelar
              </button>
              <button className="sucess body-1-400" onClick={updateComment}>
                Salvar
              </button>
            </Container>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
