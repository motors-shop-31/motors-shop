import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext } from "react";
import { BiTrash } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import api from "../../service/api";
import { Container } from "./styles";

interface Iprops {
  idComment: string;
}

export const ModalTrash = ({ idComment }: Iprops) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  let token = localStorage.getItem("token");

  const { listComment } = useContext(GlobalContext);

  const { id } = useParams();

  function deleteComment() {
    api
      .delete(`/comments/${idComment}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        onClose();
      })
      .catch((err) => {});

    listComment(id);
  }

  return (
    <>
      <span className="trash" onClick={onOpen}>
        <BiTrash />
      </span>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="Heading-2-600">
            Excluir comentário
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>Excluir seu comentário permanentemente?</ModalBody>

          <ModalFooter>
            <div>
              <Container>
                <button className="alert body-1-400" onClick={onClose}>
                  Cancelar
                </button>
                <button className="sucess body-1-400" onClick={deleteComment}>
                  Excluir
                </button>
              </Container>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
